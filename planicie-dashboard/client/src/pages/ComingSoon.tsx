import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground mt-2">{description}</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/api/placeholder/120/40" alt="EJ7 Solutions" className="h-10" />
              <img src="/api/placeholder/120/40" alt="Planície" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-2xl">Em Desenvolvimento</CardTitle>
            <CardDescription className="text-base">
              Esta seção está sendo preparada e estará disponível em breve.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              Estamos trabalhando para trazer mais funcionalidades e insights para você.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
