import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteAnalytics from "./components/SiteAnalytics";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const CandidateComparison = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.CandidateComparison })));
const CandidateHub = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.CandidateHub })));
const CandidatePage = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.CandidatePage })));
const ElectionOverview = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.ElectionOverview })));
const IssueHub = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.IssueHub })));
const IssuePage = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.IssuePage })));
const StaticResourcePage = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.StaticResourcePage })));
const VotingHub = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.VotingHub })));
const VotingResourcePage = lazy(() => import("./pages/ResourcePages").then((module) => ({ default: module.VotingResourcePage })));
const EnglishCandidateComparison = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishCandidateComparison })));
const EnglishCandidateHub = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishCandidateHub })));
const EnglishCandidatePage = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishCandidatePage })));
const EnglishElectionOverview = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishElectionOverview })));
const EnglishIssueHub = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishIssueHub })));
const EnglishIssuePage = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishIssuePage })));
const EnglishMissingResource = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishMissingResource })));
const EnglishStaticResourcePage = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishStaticResourcePage })));
const EnglishVotingHub = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishVotingHub })));
const EnglishVotingResourcePage = lazy(() => import("./pages/ResourcePagesEnglish").then((module) => ({ default: module.EnglishVotingResourcePage })));
const LocalRacePage = lazy(() => import("./pages/LocalRaces").then((module) => ({ default: module.LocalRacePage })));
const LocalCandidateProfilePage = lazy(() => import("./pages/LocalCandidateProfiles"));
const CampaignFinanceDashboard = lazy(() => import("./pages/CampaignFinanceDashboard"));
const WhereToVote = lazy(() => import("./pages/WhereToVote"));
const Advertise = lazy(() => import("./pages/Advertise"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/">{() => <Home defaultLanguage="en" />}</Route>
        <Route path="/es">{() => <Home defaultLanguage="es" />}</Route>
        <Route path="/election-2026/candidates/:slug">{(params) => <LocalCandidateProfilePage slug={params.slug} language="en" />}</Route>
        <Route path="/election-2026/:slug">{(params) => <LocalRacePage slug={params.slug} language="en" />}</Route>
        <Route path="/election-2026" component={EnglishElectionOverview} />
        <Route path="/eleccion-alcalde-laredo-2026/:slug">{(params) => <LocalRacePage slug={params.slug} language="en" />}</Route>
        <Route path="/eleccion-alcalde-laredo-2026" component={EnglishElectionOverview} />
        <Route path="/candidatos" component={EnglishCandidateHub} />
        <Route path="/comparar-candidatos" component={EnglishCandidateComparison} />
        <Route path="/candidatos/:slug">{(params) => <EnglishCandidatePage slug={params.slug} />}</Route>
        <Route path="/temas" component={EnglishIssueHub} />
        <Route path="/temas/:slug">{(params) => <EnglishIssuePage slug={params.slug} />}</Route>
        <Route path="/votar" component={EnglishVotingHub} />
        <Route path="/votar/:slug">{(params) => <EnglishVotingResourcePage slug={params.slug} />}</Route>
        <Route path="/calendario-electoral">{() => <EnglishStaticResourcePage kind="calendar" />}</Route>
        <Route path="/campaign-finance">{() => <CampaignFinanceDashboard language="en" />}</Route>
        <Route path="/finanzas-de-campana">{() => <CampaignFinanceDashboard language="en" />}</Route>
        <Route path="/where-to-vote">{() => <WhereToVote language="en" />}</Route>
        <Route path="/advertise">{() => <Advertise language="en" />}</Route>
        <Route path="/verificacion-de-datos">{() => <EnglishStaticResourcePage kind="facts" />}</Route>
        <Route path="/metodologia">{() => <EnglishStaticResourcePage kind="methodology" />}</Route>
        <Route path="/es/elecciones-2026/candidatos/:slug">{(params) => <LocalCandidateProfilePage slug={params.slug} language="es" />}</Route>
        <Route path="/es/elecciones-2026/:slug">{(params) => <LocalRacePage slug={params.slug} language="es" />}</Route>
        <Route path="/es/elecciones-2026" component={ElectionOverview} />
        <Route path="/es/eleccion-alcalde-laredo-2026/:slug">{(params) => <LocalRacePage slug={params.slug} language="es" />}</Route>
        <Route path="/es/eleccion-alcalde-laredo-2026" component={ElectionOverview} />
        <Route path="/es/candidatos" component={CandidateHub} />
        <Route path="/es/comparar-candidatos" component={CandidateComparison} />
        <Route path="/es/candidatos/:slug">{(params) => <CandidatePage slug={params.slug} />}</Route>
        <Route path="/es/temas" component={IssueHub} />
        <Route path="/es/temas/:slug">{(params) => <IssuePage slug={params.slug} />}</Route>
        <Route path="/es/votar" component={VotingHub} />
        <Route path="/es/votar/:slug">{(params) => <VotingResourcePage slug={params.slug} />}</Route>
        <Route path="/es/calendario-electoral">{() => <StaticResourcePage kind="calendar" />}</Route>
        <Route path="/es/finanzas-de-campana">{() => <CampaignFinanceDashboard language="es" />}</Route>
        <Route path="/es/donde-votar">{() => <WhereToVote language="es" />}</Route>
        <Route path="/es/anunciate">{() => <Advertise language="es" />}</Route>
        <Route path="/es/verificacion-de-datos">{() => <StaticResourcePage kind="facts" />}</Route>
        <Route path="/es/metodologia">{() => <StaticResourcePage kind="methodology" />}</Route>
        <Route path={"/404"} component={EnglishMissingResource} />
        {/* Final fallback route */}
        <Route component={EnglishMissingResource} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <SiteAnalytics />
          <Toaster />
          <Suspense fallback={<div className="grid min-h-[45vh] place-items-center bg-[#f4f0e8] font-display text-xl font-black text-[#102b36]">Loading Laredo Politics…</div>}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
