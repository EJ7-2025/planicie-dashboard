import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp, Target, Calendar } from "lucide-react";

export default function ResumoExecutivo() {
  const insights = [
    "Receita Q3: R$ 509.719 com -3,17% vs forecast (estabilidade confirmada)",
    "EBITDA mantido em 27% pelo 2º trimestre consecutivo (consistência trimestral)",
    "Custos operacionais estáveis vs Q3 2024 (variações < 2%)",
    "Volumetria vendas 25-30 contratos/mês mantida há 5 anos"
  ];

  const pontosEstrategicos = [
    "Estabilidade operacional entre Q3 2024 e Q3 2025",
    "Ticket médio R$ 118,68 com crescimento qualitativo de 5%",
    "263 contratos acumulados em 2025 (81% planos novos)",
    "Carteira total de 1.691 planos em carteira",
    "Meta renegociação superada consistentemente"
  ];

  const expectativasQ4 = [
    "Manter estabilidade e buscar ganhos adicionais",
    "Evento Finados (08/11) para engajamento e conversão",
    "Reajuste IGPM e planejamento estratégico 2026"
  ];

  const recomendacoes = [
    "Executar evento Finados (08/11) com foco em conversão",
    "Implementar reajuste IGPM e envio de carnês",
    "Expandir Cartão TEM e Cremação PET como diferenciais",
    "Fortalecer equipe e processos comerciais",
    "Planejamento estratégico 2026 em andamento"
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Resumo Executivo</h1>
              <p className="text-muted-foreground mt-2">
                Análise estratégica do período - Setembro 2025 (Q3 2025)
              </p>
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
        {/* Análise do Gestor */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">Análise do Gestor da Conta</CardTitle>
                <CardDescription className="mt-2">
                  Por <span className="font-semibold">Edgard Masso</span> • Setembro 2025 (Q3 2025)
                </CardDescription>
              </div>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">
              Uma vez consolidados os resultados do mês de setembro e, por consequência, a consolidação dos 
              resultados do terceiro trimestre da operação Planície Planos de Assistência Social LTDA, os dados 
              confirmam a tendência de estabilidade da conta Planície, tanto em relação às estimativas quanto no 
              comparativo com o ano anterior no que tange ao terceiro trimestre da operação. Q3 2025 apresentou 
              estabilidade operacional sólida com receita de R$ 509.719 (-3,17% vs forecast), EBITDA de R$ 127.725 
              (27% margem) e caixa robusto de R$ 433.225.
            </p>
          </CardContent>
        </Card>

        {/* Grid de seções */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Principais Insights */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Principais Insights</CardTitle>
                  <CardDescription>Descobertas e observações estratégicas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Pontos Estratégicos */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <CardTitle>Pontos Estratégicos</CardTitle>
                  <CardDescription>Ações e conquistas relevantes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pontosEstrategicos.map((ponto, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{ponto}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Expectativas Q4 2025 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <CardTitle>Expectativas Q4 2025</CardTitle>
                  <CardDescription>Projeções para o próximo trimestre</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {expectativasQ4.map((expectativa, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 mt-2" />
                    <span className="text-sm text-foreground">{expectativa}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recomendações Estratégicas */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Recomendações Estratégicas</CardTitle>
                  <CardDescription>Ações prioritárias para o período</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recomendacoes.map((recomendacao, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="flex-shrink-0 mt-0.5">
                      {index + 1}
                    </Badge>
                    <span className="text-sm text-foreground">{recomendacao}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <Card className="bg-muted/50">
          <CardContent className="py-4">
            <p className="text-sm text-muted-foreground text-center">
              Relatório gerado em Setembro 2025 (Q3 2025) • Confidencial
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
