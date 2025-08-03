import { Clock, Calendar, Github, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { RFC3339Display } from "@/components/RFC3339Display"
import { EducationalContent } from "@/components/EducationalContent"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-rainbow flex items-center justify-center">
                <Clock className="h-6 w-6 dark:text-black text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-rainbow">RFC 3339 Explorer</h1>
                <p className="text-sm text-muted-foreground">Date and Time on the Internet</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-rainbow-indigo/30 hover:border-rainbow-indigo/60"
              >
                <a 
                  href="https://datatracker.ietf.org/doc/html/rfc3339" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  RFC 3339 Spec
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="text-gradient-rainbow">Master</span>{" "}
                <span className="text-foreground">RFC 3339</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore, understand, and generate RFC 3339 compliant timestamps. 
                Learn the differences between RFC 3339 and ISO 8601 standards.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto border-rainbow-yellow/30 hover:border-rainbow-yellow/60 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-gradient-rainbow">
                  <Calendar className="h-5 w-5" />
                  Quick RFC 3339 Facts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-rainbow-red">Always UTC</div>
                    <div className="text-muted-foreground">Timezone required</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-rainbow-green">Internet Ready</div>
                    <div className="text-muted-foreground">Designed for protocols</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-rainbow-blue">Unambiguous</div>
                    <div className="text-muted-foreground">Clear format rules</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* RFC 3339 Display */}
          <section>
            <RFC3339Display />
          </section>

          {/* Educational Content */}
          <section>
            <EducationalContent />
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ for the developer community
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              RFC 3339 • Date and Time on the Internet • July 2002
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
