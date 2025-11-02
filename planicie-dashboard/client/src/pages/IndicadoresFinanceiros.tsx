import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";

interface DREItem {
  codigo?: string;
  descricao: string;
  forecast: number | string;
  actual: number | string;
  percentual?: number;
  variacao?: number;
  isHeader?: boolean;
  isSubtotal?: boolean;
  isNegative?: boolean;
}

const dreData: DREItem[] = [
  { descricao: "RECEITA OPERACIONAL BRUTA", forecast: 178537, actual: 177171, percentual: 100, variacao: -0.77, isHeader: true },
  { descricao: "RECEITAS OPERACIONAIS", forecast: 178537, actual: 176917, percentual: 100, variacao: -0.9, isSubtotal: true },
  { codigo: "1.1.01.002", descricao: "MENSALIDADES DE SEGUROS", forecast: 147285, actual: 148878 },
  { codigo: "1.1.01.003", descricao: "RECEITA RENEGOCIAÇÃO", forecast: 22712, actual: 21591 },
  { codigo: "1.1.01.004", descricao: "RECEITA REMISSIVO", forecast: 2925, actual: 3791 },
  { codigo: "1.1.02.001", descricao: "RECEITA PLANOS - CARÊNCIA ZERO", forecast: 5615, actual: 2657 },
  { descricao: "(-) IMPOSTOS SOBRE FATURAMENTO BRUTO", forecast: 9684, actual: 9671, percentual: -5, variacao: -0.14, isNegative: true },
  { codigo: "2.1.06.001", descricao: "PIS", forecast: 1114, actual: 1108 },
  { codigo: "2.1.06.002", descricao: "COFINS", forecast: 5142, actual: 5116 },
  { codigo: "2.1.06.003", descricao: "ISS", forecast: 3428, actual: 3447 },
  { descricao: "RECEITA OPERACIONAL LÍQUIDA", forecast: 168852, actual: 167500, percentual: 95, variacao: -0.80, isSubtotal: true },
  { descricao: "(-) CUSTOS/DESPESAS VARIÁVEIS", forecast: 63311, actual: 64571, percentual: -36, variacao: 1.99, isNegative: true },
  { codigo: "2.6.01.055", descricao: "SEGURO DE VIDA MONGERAL", forecast: 4479, actual: 3914 },
  { codigo: "2.6.01.056", descricao: "SEGURO REMISSIVO MONGERAL", forecast: 3804, actual: 3145 },
  { codigo: "2.1.01.008", descricao: "SERV.PRESTADOS POR OUTRAS FUNERARIAS", forecast: 26772, actual: 31430 },
  { codigo: "2.1.06.012", descricao: "TAXA SEPULTAMENTO PREFEITURA", forecast: 10074, actual: 6315 },
  { codigo: "2.1.05.005", descricao: "TARIFA CARTÃO DE CRÉDITO", forecast: 25, actual: 20 },
  { descricao: "OUTROS CUSTOS VARIÁVEIS", forecast: 17257, actual: 19746 },
  { descricao: "MARGEM BRUTA / MARGEM DE CONTRIBUIÇÃO", forecast: 105541, actual: 102929, percentual: 58, variacao: -2.48, isSubtotal: true },
  { descricao: "(-) DESPESAS / CUSTOS FIXOS", forecast: 60457, actual: 60197, percentual: -34, variacao: -0.43, isNegative: true },
  { descricao: "EBITDA R$", forecast: 45084, actual: 42732, percentual: 24, variacao: -5.22, isHeader: true },
  { descricao: "EBITDA %", forecast: "27%", actual: "26%", percentual: 0, variacao: -4.45 },
  { descricao: "(-) IMPOSTOS SOBRE RESULTADO APURADO", forecast: 17090, actual: 16318, percentual: -9, variacao: -4.52, isNegative: true },
  { codigo: "2.1.06.004", descricao: "CSLL", forecast: 5053, actual: 4849 },
  { codigo: "2.1.06.005", descricao: "IRPJ", forecast: 12037, actual: 11469 },
  { descricao: "NET INCOME - RESULTADO LÍQUIDO (R$)", forecast: 27994, actual: 26414, percentual: 15, variacao: -5.64, isHeader: true },
  { descricao: "NET INCOME - RESULTADO LÍQUIDO (%)", forecast: "16%", actual: "15%", percentual: 0, variacao: -4.92 },
];

const TrendIcon = ({ value }: { value?: number }) => {
  if (!value) return <Minus className="w-4 h-4 text-muted-foreground" />;
  if (value > 0) return <ArrowUp className="w-4 h-4 text-primary" />;
  if (value < 0) return <ArrowDown className="w-4 h-4 text-destructive" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const formatValue = (value: number | string) => {
  if (typeof value === "string") return value;
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

export default function IndicadoresFinanceiros() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Indicadores Financeiros</h1>
              <p className="text-muted-foreground mt-2">
                DRE Operacional - Outubro 2025
              </p>
            </div>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              Forecast vs Actual
            </Badge>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container py-8 space-y-6">
        {/* Tabela DRE */}
        <Card>
          <CardHeader>
            <CardTitle>DRE Operacional Estimado vs Realizado</CardTitle>
            <CardDescription>
              Com uma leve oscilação entre geração de receita, os resultados registrados em outubro de 2025 
              mantiveram-se dentro das expectativas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Código</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Forecast</TableHead>
                    <TableHead className="text-right">Actual</TableHead>
                    <TableHead className="text-center">%</TableHead>
                    <TableHead className="text-center">Variação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dreData.map((item, index) => (
                    <TableRow 
                      key={index}
                      className={
                        item.isHeader 
                          ? "bg-secondary/20 font-bold" 
                          : item.isSubtotal 
                          ? "bg-muted/50 font-semibold" 
                          : ""
                      }
                    >
                      <TableCell className="text-xs text-muted-foreground">
                        {item.codigo || ""}
                      </TableCell>
                      <TableCell className={item.isHeader || item.isSubtotal ? "font-semibold" : ""}>
                        {item.isNegative && "(-) "}
                        {item.descricao}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatValue(item.forecast)}
                      </TableCell>
                      <TableCell className="text-right font-mono">
                        {formatValue(item.actual)}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.percentual !== undefined && item.percentual !== 0 && (
                          <Badge variant="outline" className="font-mono">
                            {item.percentual}%
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.variacao !== undefined && (
                          <div className="flex items-center justify-center gap-1">
                            <TrendIcon value={item.variacao} />
                            <span className={`text-sm font-mono ${
                              item.variacao > 0 ? "text-primary" : 
                              item.variacao < 0 ? "text-destructive" : 
                              "text-muted-foreground"
                            }`}>
                              {item.variacao > 0 ? "+" : ""}{item.variacao.toFixed(2)}%
                            </span>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Cards de resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Receita Operacional Líquida</CardDescription>
              <CardTitle className="text-3xl">R$ 167.500</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <ArrowDown className="w-4 h-4 text-destructive" />
                <span className="text-destructive font-medium">-0,80%</span>
                <span className="text-muted-foreground">vs forecast</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>EBITDA</CardDescription>
              <CardTitle className="text-3xl">R$ 42.732</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="secondary">26% margem</Badge>
                <span className="text-muted-foreground">Estável</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Resultado Líquido</CardDescription>
              <CardTitle className="text-3xl">R$ 26.414</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="secondary">15% margem</Badge>
                <span className="text-muted-foreground">Saudável</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
