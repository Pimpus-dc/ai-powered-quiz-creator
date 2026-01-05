import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { 
  Brain, 
  ArrowLeft, 
  Sparkles, 
  Loader2,
  CheckCircle,
  FileText,
  ListChecks,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CreateTest = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState<"config" | "preview">("config");
  
  // Form state
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [questionCount, setQuestionCount] = useState([10]);
  const [difficulty, setDifficulty] = useState("medium");
  const [includeOpenQuestions, setIncludeOpenQuestions] = useState(true);
  const [includeClosedQuestions, setIncludeClosedQuestions] = useState(true);
  const [language, setLanguage] = useState("pl");

  const handleGenerate = async () => {
    if (!title || !topic) {
      toast({
        title: "Uzupełnij wymagane pola",
        description: "Podaj tytuł i temat testu",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation - will be replaced with real API call
    setTimeout(() => {
      toast({
        title: "Funkcja w przygotowaniu",
        description: "Połącz Cloud i dodaj klucz API ChatGPT aby generować testy",
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-display font-bold text-xl text-foreground">Nowy test</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Progress indicator */}
          <div className="flex items-center gap-4 mb-10">
            <StepIndicator number={1} label="Konfiguracja" active={step === "config"} completed={step === "preview"} />
            <div className="flex-grow h-px bg-border" />
            <StepIndicator number={2} label="Podgląd i edycja" active={step === "preview"} />
          </div>

          {step === "config" && (
            <div className="space-y-6">
              {/* Basic info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Podstawowe informacje
                  </CardTitle>
                  <CardDescription>
                    Podaj tytuł i temat testu, który chcesz wygenerować
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Tytuł testu</Label>
                    <Input
                      id="title"
                      placeholder="np. Historia Polski - XX wiek"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="topic">Temat / Opis</Label>
                    <Textarea
                      id="topic"
                      placeholder="Opisz szczegółowo temat testu. Im więcej informacji podasz, tym lepiej AI dopasuje pytania..."
                      rows={4}
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Question settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-primary" />
                    Ustawienia pytań
                  </CardTitle>
                  <CardDescription>
                    Skonfiguruj rodzaje i ilość pytań
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label>Liczba pytań: {questionCount[0]}</Label>
                    </div>
                    <Slider
                      value={questionCount}
                      onValueChange={setQuestionCount}
                      min={5}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Poziom trudności</Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Łatwy</SelectItem>
                        <SelectItem value="medium">Średni</SelectItem>
                        <SelectItem value="hard">Trudny</SelectItem>
                        <SelectItem value="mixed">Mieszany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Typy pytań</Label>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Pytania zamknięte</p>
                            <p className="text-sm text-muted-foreground">Jednokrotny i wielokrotny wybór</p>
                          </div>
                        </div>
                        <Switch
                          checked={includeClosedQuestions}
                          onCheckedChange={setIncludeClosedQuestions}
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Pytania otwarte</p>
                            <p className="text-sm text-muted-foreground">Wymagające tekstowej odpowiedzi</p>
                          </div>
                        </div>
                        <Switch
                          checked={includeOpenQuestions}
                          onCheckedChange={setIncludeOpenQuestions}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Język pytań</Label>
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pl">Polski</SelectItem>
                        <SelectItem value="en">Angielski</SelectItem>
                        <SelectItem value="de">Niemiecki</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Generate button */}
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full gap-2"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generowanie testu...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Wygeneruj test z AI
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const StepIndicator = ({ 
  number, 
  label, 
  active, 
  completed 
}: { 
  number: number; 
  label: string; 
  active: boolean; 
  completed?: boolean;
}) => (
  <div className="flex items-center gap-3">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
      completed 
        ? "bg-success text-success-foreground"
        : active 
          ? "primary-gradient text-primary-foreground" 
          : "bg-muted text-muted-foreground"
    }`}>
      {completed ? <CheckCircle className="w-5 h-5" /> : number}
    </div>
    <span className={`font-medium ${active ? "text-foreground" : "text-muted-foreground"}`}>
      {label}
    </span>
  </div>
);

export default CreateTest;
