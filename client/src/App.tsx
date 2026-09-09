import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import {
  CandidateComparison,
  CandidateHub,
  CandidatePage,
  ElectionOverview,
  IssueHub,
  IssuePage,
  MissingResource,
  StaticResourcePage,
  VotingHub,
  VotingResourcePage,
} from "./pages/ResourcePages";

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
        <Route path={"/"} component={Home} />
        <Route path="/eleccion-alcalde-laredo-2026" component={ElectionOverview} />
        <Route path="/candidatos" component={CandidateHub} />
        <Route path="/comparar-candidatos" component={CandidateComparison} />
        <Route path="/candidatos/:slug">{(params) => <CandidatePage slug={params.slug} />}</Route>
        <Route path="/temas" component={IssueHub} />
        <Route path="/temas/:slug">{(params) => <IssuePage slug={params.slug} />}</Route>
        <Route path="/votar" component={VotingHub} />
        <Route path="/votar/:slug">{(params) => <VotingResourcePage slug={params.slug} />}</Route>
        <Route path="/calendario-electoral">{() => <StaticResourcePage kind="calendar" />}</Route>
        <Route path="/finanzas-de-campana">{() => <StaticResourcePage kind="finance" />}</Route>
        <Route path="/verificacion-de-datos">{() => <StaticResourcePage kind="facts" />}</Route>
        <Route path="/metodologia">{() => <StaticResourcePage kind="methodology" />}</Route>
        <Route path={"/404"} component={MissingResource} />
        {/* Final fallback route */}
        <Route component={MissingResource} />
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
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
