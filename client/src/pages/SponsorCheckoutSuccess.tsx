import { ArrowRight, Check, CheckCircle2, Clock3, CreditCard, FileUp, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";
import { PageShell } from "@/components/SiteChrome";
import { sponsorOnboardingChecklist, sponsorPackages } from "@/data/sponsorships";

const packageNames: Record<string, string> = {
  "small-square": "Small Square",
  banner: "Banner",
  "non-rotating": "Non-Rotating Placement",
  "lock-in": "Election Day Lock-In",
  newsletter: "Laredo Brief Sponsor",
};

export default function SponsorCheckoutSuccess() {
  const params = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const packageId = params.get("package") || "";
  const sessionId = params.get("session_id") || "";
  const packageName = packageNames[packageId] || sponsorPackages.find((item) => item.id === packageId)?.name.en || "Laredo Politics sponsorship";

  return (
    <PageShell language="en">
      <Seo
        title="Sponsor Checkout Complete | Laredo Politics"
        description="Next steps for activating a paid Laredo Politics sponsorship."
        path="/advertise/success"
        keywords={["Laredo Politics sponsor onboarding"]}
        noIndex
      />
      <section className="paper-texture py-16 sm:py-24">
        <div className="container max-w-5xl">
          <div className="overflow-hidden bg-[#102b36] text-white shadow-[14px_14px_0_#e75037]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-[#e75037] p-8 sm:p-12">
                <CheckCircle2 className="h-12 w-12" />
                <p className="mt-10 text-[9px] font-black uppercase tracking-[0.18em] text-[#102b36]">Stripe checkout return</p>
                <h1 className="mt-5 font-display text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl">Your sponsor launch is moving.</h1>
                <p className="mt-6 text-sm leading-6 text-white/85">Selected package: <strong>{packageName}</strong></p>
              </div>
              <div className="p-8 sm:p-12">
                <p className="section-kicker section-kicker-light">What happens next</p>
                <div className="mt-8 grid gap-5">
                  {[
                    [CreditCard, "Receipt and payment record", "Stripe emails your receipt immediately. We confirm the transaction and available inventory."],
                    [FileUp, "Send five launch assets", "Reply to our onboarding message with your logo, destination URL, one-line offer, language preference and primary contact."],
                    [ShieldCheck, "Creative and policy review", "We verify the link, disclosure, formatting and strict separation from editorial coverage."],
                    [Clock3, "Go live in one to two business days", "After creative approval, we publish and begin tracking eligible delivery and sponsor clicks."],
                  ].map(([Icon, title, text]) => {
                    const IconComponent = Icon as typeof CreditCard;
                    return (
                      <div key={String(title)} className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/12 pb-5">
                        <span className="grid h-10 w-10 place-items-center bg-white/[0.07] text-[#f0dfbd]"><IconComponent className="h-5 w-5" /></span>
                        <div><h2 className="font-display text-2xl font-black tracking-[-0.035em]">{String(title)}</h2><p className="mt-2 text-sm leading-6 text-[#b9cbc7]">{String(text)}</p></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="border border-[#102b36]/14 bg-[#fbf8f1] p-7 sm:p-9">
              <p className="section-kicker">Your five-item checklist</p>
              <h2 className="mt-5 font-display text-4xl font-black tracking-[-0.045em]">Have these ready and onboarding takes about 15 minutes.</h2>
              <ul className="mt-7 grid gap-4">
                {sponsorOnboardingChecklist.en.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-bold leading-6 text-[#41585d]"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#e75037] text-white"><Check className="h-3 w-3" /></span>{item}</li>)}
              </ul>
            </div>
            <aside className="bg-[#f0dfbd] p-7 sm:p-9">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#e75037]">Important</p>
              <h2 className="mt-4 font-display text-3xl font-black tracking-[-0.04em]">Payment reserves the package. Final placement still requires creative approval.</h2>
              <p className="mt-5 text-sm leading-6 text-[#506367]">We do not promise a specific number of impressions, clicks, leads or sales. We report actual delivery and keep advertising clearly labeled and separate from civic coverage.</p>
              <a href="/advertise#advertiser-inquiry" className="mt-8 flex min-h-12 items-center justify-between bg-[#102b36] px-5 text-[9px] font-black uppercase tracking-[0.12em] text-white">Need to add a note? Use the direct form <ArrowRight className="h-4 w-4" /></a>
            </aside>
          </section>

          {sessionId && <p className="mt-8 text-center font-mono text-[8px] uppercase tracking-[0.12em] text-[#718083]">Checkout reference received · {sessionId.slice(0, 18)}…</p>}
        </div>
      </section>
    </PageShell>
  );
}
