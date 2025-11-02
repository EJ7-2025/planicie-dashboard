import { Link, useLocation } from "wouter";
import { 
  LayoutDashboard, 
  FileText, 
  TrendingUp, 
  ShoppingCart, 
  Megaphone, 
  DollarSign, 
  MessageSquare,
  LogOut,
  TrendingUpIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { path: "/", label: "Visão Geral", icon: LayoutDashboard, badge: "2" },
  { path: "/resumo-executivo", label: "Resumo Executivo", icon: FileText, badge: "8" },
  { path: "/indicadores-financeiros", label: "Indicadores Financeiros", icon: TrendingUp, badge: "4" },
  { path: "/indicadores-comerciais", label: "Indicadores Comerciais", icon: ShoppingCart, badge: "5" },
  { path: "/marketing-digital", label: "Marketing Digital", icon: Megaphone, badge: "6" },
  { path: "/fluxo-caixa", label: "Fluxo de Caixa", icon: DollarSign, badge: "7" },
  { path: "/comentarios", label: "Comentários", icon: MessageSquare, badge: "8" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col">
        {/* Logo e título */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Planície</h1>
              <p className="text-xs text-sidebar-foreground/70">Dashboard Financeiro</p>
            </div>
          </div>
        </div>

        {/* Menu de navegação */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            
            return (
              <Link key={item.path} href={item.path}>
                <a
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium flex-1">{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      "px-2 py-0.5 text-xs rounded-full font-semibold",
                      isActive 
                        ? "bg-primary-foreground/20 text-primary-foreground" 
                        : "bg-accent text-accent-foreground"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Botão de sair */}
        <div className="p-4 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
