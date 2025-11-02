import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  TrendingUp, 
  Coins, 
  Users, 
  MessageSquare,
  ArrowDown,
  ArrowUp
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const metricsData = [
  {
    title: "Receita Operacional Bruta",
    value: "R$ 509.719",
    change: "-3.17% vs forecast",
    forecast: "Forecast: R$ 526.383",
    icon: DollarSign,
    iconBg: "bg-red-500",
    trend: "down"
  },
  {
    title: "EBITDA",
    value: "R$ 127.725",
    change: "27% de margem",
    forecast: "Forecast: R$ 128.307",
    icon: TrendingUp,
    iconBg: "bg-primary",
    trend: "up"
  },
  {
    title: "Ticket Médio",
    value: "R$ 119",
    change: "+5% (qualidade)",
    forecast: "Foco em valor agregado",
    icon: Coins,
    iconBg: "bg-accent",
    trend: "up"
  },
  {
    title: "Contratos Setembro",
    value: "29",
    change: "97% da meta (30)",
    forecast: "Acumulado 2025: 263 contratos",
    icon: Users,
    iconBg: "bg-blue-500",
    trend: "neutral"
  }
];

const ebitdaData = [
  { name: "Receita Bruta", forecast: 550, actual: 510 },
  { name: "Custos Variáveis", forecast: 210, actual: 205 },
  { name: "Custos Fixos", forecast: 210, actual: 178 },
  { name: "EBITDA", forecast: 130, actual: 128 }
];

const evolutionData = [
  { month: "Fevereiro", faturamento: 165, ebitda: 42 },
  { month: "Março", faturamento: 168, ebitda: 44 },
  { month: "Abril", faturamento: 170, ebitda: 45 },
  { month: "Maio", faturamento: 172, ebitda: 46 },
  { month: "Junho", faturamento: 175, ebitda: 45 },
  { month: "Julho", faturamento: 178, ebitda: 45 },
  { month: "Setembro", faturamento: 175, ebitda: 135 },
  { month: "Outubro", faturamento: 177, ebitda: 43 }
];

const additionalMetrics = [
  {
    title: "Margem de Contribuição",
    value: "R$ 303.866",
    description: "QBR Q3 2025: Margem de 63% mantida com R$ 303.866 (+2% vs estimado)."
  },
  {
    title: "Variação vs Estimado",
    value: "-3,17%",
    description: "Receita vs forecast dentro da normalidade. QBR confirma gestão exemplar com variações < 3,17%."
  },
  {
    title: "Qualidade vs Quantidade",
    value: "+5%",
    description: "Ticket médio R$ 118,68 com crescimento qualitativo de 5%, demonstrando foco em valor agregado."
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard Planície</h1>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-muted-foreground">Período: Setembro 2025 (Q3)</p>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  QBR Q3 2025
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src="/api/placeholder/120/40" alt="EJ7 Solutions" className="h-10" />
              <img src="/api/placeholder/120/40" alt="Planície" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container py-8 space-y-8">
        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardDescription className="text-xs mb-1">{metric.title}</CardDescription>
                      <CardTitle className="text-2xl font-bold">{metric.value}</CardTitle>
                    </div>
                    <div className={`${metric.iconBg} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-1">
                  <div className="flex items-center gap-2">
                    {metric.trend === "up" && <ArrowUp className="w-4 h-4 text-primary" />}
                    {metric.trend === "down" && <ArrowDown className="w-4 h-4 text-destructive" />}
                    <span className={`text-sm font-medium ${
                      metric.trend === "up" ? "text-primary" : 
                      metric.trend === "down" ? "text-destructive" : 
                      "text-muted-foreground"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.forecast}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-3 right-3 h-8 w-8 p-0"
                    title="Ver comentário do gestor"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* EBITDA Evolução */}
          <Card>
            <CardHeader>
              <CardTitle>EBITDA Evolução - Q3 2025</CardTitle>
              <CardDescription>Forecast vs Actual - Valores Trimestrais Corrigidos</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ebitdaData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="name" 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="forecast" name="Forecast" fill="hsl(var(--muted))" />
                  <Bar dataKey="actual" name="Actual" fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Evolução Financeira */}
          <Card>
            <CardHeader>
              <CardTitle>Evolução Financeira</CardTitle>
              <CardDescription>Faturamento e EBITDA - Últimos 8 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={evolutionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis 
                    dataKey="month" 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    className="text-xs"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="faturamento" 
                    name="Faturamento Bruto" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ebitda" 
                    name="EBITDA Mensal" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Seção de custos */}
        <Card>
          <CardHeader>
            <CardTitle>Distribuição de Custos - Páginas 11 e 15</CardTitle>
            <CardDescription>Estrutura real de custos conforme relatório</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">{metric.title}</h3>
                  <p className="text-2xl font-bold mb-2">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
