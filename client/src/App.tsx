import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ResumoExecutivo from "./pages/ResumoExecutivo";
import IndicadoresFinanceiros from "./pages/IndicadoresFinanceiros";
import ComingSoon from "./pages/ComingSoon";
import DashboardLayout from "./components/DashboardLayout";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </Route>
      <Route path="/resumo-executivo">
        <DashboardLayout>
          <ResumoExecutivo />
        </DashboardLayout>
      </Route>
      <Route path="/indicadores-financeiros">
        <DashboardLayout>
          <IndicadoresFinanceiros />
        </DashboardLayout>
      </Route>
      <Route path="/indicadores-comerciais">
        <DashboardLayout>
          <ComingSoon title="Indicadores Comerciais" description="Análise de vendas, carteira e desempenho comercial" />
        </DashboardLayout>
      </Route>
      <Route path="/marketing-digital">
        <DashboardLayout>
          <ComingSoon title="Marketing Digital" description="Métricas e resultados das campanhas digitais" />
        </DashboardLayout>
      </Route>
      <Route path="/fluxo-caixa">
        <DashboardLayout>
          <ComingSoon title="Fluxo de Caixa" description="Análise de entrada e saída de recursos" />
        </DashboardLayout>
      </Route>
      <Route path="/comentarios">
        <DashboardLayout>
          <ComingSoon title="Comentários" description="Observações e análises do gestor" />
        </DashboardLayout>
      </Route>
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
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
