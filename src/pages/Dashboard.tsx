import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Plus, 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tests] = useState([
    {
      id: 1,
      title: "Historia Polski - II Wojna Światowa",
      questions: 20,
      responses: 45,
      createdAt: "2025-01-03",
      status: "active"
    },
    {
      id: 2,
      title: "Matematyka - Równania kwadratowe",
      questions: 15,
      responses: 32,
      createdAt: "2025-01-02",
      status: "active"
    },
    {
      id: 3,
      title: "Biologia - Komórka",
      questions: 25,
      responses: 0,
      createdAt: "2025-01-01",
      status: "draft"
    }
  ]);

  const stats = [
    { label: "Wszystkie testy", value: "12", icon: <FileText className="w-5 h-5" /> },
    { label: "Odpowiedzi", value: "234", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Uczniowie", value: "89", icon: <Users className="w-5 h-5" /> },
    { label: "Średni wynik", value: "78%", icon: <BarChart3 className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">TestPortal AI</span>
        </div>

        <nav className="space-y-2">
          <NavItem icon={<FileText />} label="Moje testy" active />
          <NavItem icon={<Users />} label="Uczniowie" />
          <NavItem icon={<BarChart3 />} label="Statystyki" />
          <NavItem icon={<Settings />} label="Ustawienia" />
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
              <LogOut className="w-4 h-4" />
              Wyloguj się
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 p-6 lg:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">
              Witaj z powrotem! 👋
            </h1>
            <p className="text-muted-foreground">
              Zarządzaj swoimi testami i śledź postępy uczniów
            </p>
          </div>
          <Link to="/create-test">
            <Button variant="hero" size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Stwórz nowy test
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick action card */}
        <Card className="mb-10 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Wygeneruj test z pomocą AI
                </h3>
                <p className="text-muted-foreground">
                  Opisz temat, a AI stworzy dla Ciebie kompletny test z pytaniami otwartymi i zamkniętymi
                </p>
              </div>
              <Link to="/create-test">
                <Button variant="hero" className="flex-shrink-0 gap-2">
                  Rozpocznij
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Tests list */}
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground mb-4">
            Ostatnie testy
          </h2>
          <div className="space-y-4">
            {tests.map((test) => (
              <Card key={test.id} className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{test.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{test.questions} pytań</span>
                          <span>{test.responses} odpowiedzi</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {test.createdAt}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        test.status === "active" 
                          ? "bg-success/10 text-success" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {test.status === "active" ? "Aktywny" : "Szkic"}
                      </span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
      active 
        ? "bg-primary text-primary-foreground" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default Dashboard;
