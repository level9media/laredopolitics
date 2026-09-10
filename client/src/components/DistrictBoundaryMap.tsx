import { useEffect, useRef, useState } from "react";
import { Layers3, Loader2, MapPinned } from "lucide-react";
import { MapView } from "@/components/Map";

const KML_PATH = "/media/plan-e-adopted_4643810f.kml";
const colors = ["#e75037", "#1f7a68", "#d49a28", "#8e5ea2", "#367ba5", "#d0648f", "#6f8b3d", "#ad613c"];

type Language = "en" | "es";

export default function DistrictBoundaryMap({ language = "en" }: { language?: Language }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [districtCount, setDistrictCount] = useState(0);
  const mapRef = useRef<google.maps.Map | null>(null);
  const polygonsRef = useRef<google.maps.Polygon[]>([]);

  useEffect(() => () => polygonsRef.current.forEach((polygon) => polygon.setMap(null)), []);

  async function drawDistricts(map: google.maps.Map) {
    mapRef.current = map;
    try {
      const response = await fetch(KML_PATH);
      if (!response.ok) throw new Error("KML unavailable");
      const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
      const placemarks = Array.from(xml.getElementsByTagName("Placemark"));
      setDistrictCount(placemarks.length);
      const bounds = new google.maps.LatLngBounds();

      placemarks.forEach((placemark, districtIndex) => {
        const name = placemark.getElementsByTagName("name")[0]?.textContent?.trim() || `District ${districtIndex + 1}`;
        const polygonNodes = Array.from(placemark.getElementsByTagName("Polygon"));
        polygonNodes.forEach((node) => {
          const coordinates = node.getElementsByTagName("outerBoundaryIs")[0]?.getElementsByTagName("coordinates")[0]?.textContent || "";
          const path = coordinates.trim().split(/\s+/).map((coordinate) => {
            const [lng, lat] = coordinate.split(",").map(Number);
            return { lat, lng };
          }).filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lng));
          if (path.length < 3) return;
          path.forEach((point) => bounds.extend(point));
          const polygon = new google.maps.Polygon({
            map,
            paths: path,
            strokeColor: colors[districtIndex % colors.length],
            strokeOpacity: 1,
            strokeWeight: 2,
            fillColor: colors[districtIndex % colors.length],
            fillOpacity: 0.25,
            clickable: true,
            zIndex: districtIndex + 1,
          });
          polygon.set("districtName", name);
          polygon.addListener("mouseover", () => polygon.setOptions({ fillOpacity: 0.48, strokeWeight: 3 }));
          polygon.addListener("mouseout", () => polygon.setOptions({ fillOpacity: selected === name ? 0.48 : 0.25, strokeWeight: selected === name ? 3 : 2 }));
          polygon.addListener("click", () => {
            setSelected(name);
            polygonsRef.current.forEach((item) => item.setOptions({ fillOpacity: 0.25, strokeWeight: 2 }));
            polygon.setOptions({ fillOpacity: 0.55, strokeWeight: 4 });
          });
          polygonsRef.current.push(polygon);
        });
      });
      if (!bounds.isEmpty()) map.fitBounds(bounds, 44);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  function focusDistrict(index: number) {
    const target = `District ${index}`;
    setSelected(target);
    polygonsRef.current.forEach((polygon) => polygon.setOptions({ fillOpacity: polygon.get("districtName") === target ? 0.55 : 0.18, strokeWeight: polygon.get("districtName") === target ? 4 : 2 }));
  }

  return (
    <div data-district-count={districtCount} className="overflow-hidden border border-[#102b36]/14 bg-[#102b36] shadow-[0_30px_90px_rgba(16,43,54,0.2)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-7">
        <div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-[#e75037]" /><div><p className="text-[8px] font-black uppercase tracking-[0.14em] text-[#f0dfbd]">Plan E · 2022 adopted boundaries</p><p className="mt-1 text-xs text-[#a9bfbb]">{language === "en" ? "Select a boundary to identify the council district" : "Selecciona un límite para identificar el distrito"}</p></div></div>
        {selected ? <span className="bg-[#f0dfbd] px-4 py-2 font-display text-xl font-black text-[#102b36]">{selected}</span> : districtCount > 0 && <span className="border border-white/15 px-4 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-[#f0dfbd]">{districtCount} {language === "en" ? "districts loaded" : "distritos cargados"}</span>}
      </div>
      <div className="relative">
        <MapView
          className="h-[620px] w-full"
          initialCenter={{ lat: 27.53, lng: -99.49 }}
          initialZoom={11}
          options={{ mapTypeControl: false, streetViewControl: false, fullscreenControl: true, gestureHandling: "greedy", mapId: undefined }}
          onMapReady={drawDistricts}
        />
        {loading && <div className="absolute inset-0 grid place-items-center bg-[#102b36]/80 text-white"><div className="text-center"><Loader2 className="mx-auto h-8 w-8 animate-spin text-[#e75037]" /><p className="mt-3 text-[9px] font-black uppercase tracking-[0.13em]">{language === "en" ? "Loading district boundaries" : "Cargando límites distritales"}</p></div></div>}
        {error && <div className="absolute inset-x-5 bottom-5 bg-[#e75037] p-4 text-sm text-white">{language === "en" ? "The interactive boundary layer could not load. Use the official GIS link below." : "La capa interactiva no pudo cargar. Usa el enlace GIS oficial abajo."}</div>}
      </div>
      <div className="grid grid-cols-4 border-t border-white/10 sm:grid-cols-8">
        {Array.from({ length: 8 }, (_, index) => index + 1).map((district) => <button key={district} type="button" onClick={() => focusDistrict(district)} className={`flex min-h-14 items-center justify-center gap-2 border-r border-white/10 text-[8px] font-black uppercase tracking-[0.12em] transition ${selected === `District ${district}` ? "bg-[#f0dfbd] text-[#102b36]" : "text-white hover:bg-white/10"}`}><MapPinned className="h-3.5 w-3.5" />D{district}</button>)}
      </div>
    </div>
  );
}
