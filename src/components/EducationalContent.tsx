import { Book, Calendar, Clock, Globe, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function EducationalContent() {
  const rfcFeatures = [
    {
      title: "UTC Offset Required",
      description: "RFC 3339 mandates timezone information",
      example: "2023-12-25T10:30:00Z or 2023-12-25T10:30:00+05:00",
      color: "rainbow-red"
    },
    {
      title: "T Separator",
      description: "Uses 'T' to separate date and time components",
      example: "2023-12-25T10:30:00Z",
      color: "rainbow-orange"
    },
    {
      title: "Seconds Required",
      description: "Must include seconds in time format",
      example: "10:30:00 (not 10:30)",
      color: "rainbow-yellow"
    },
    {
      title: "Z for UTC",
      description: "'Z' (Zulu) represents UTC timezone",
      example: "2023-12-25T10:30:00Z = UTC time",
      color: "rainbow-green"
    }
  ]

  const isoFeatures = [
    {
      title: "Timezone Optional",
      description: "ISO 8601 allows local time without timezone",
      example: "2023-12-25T10:30:00 (local time)",
      color: "rainbow-blue"
    },
    {
      title: "Various Formats",
      description: "Supports multiple date/time representations",
      example: "2023-12-25, 2023-W52-1, 2023-359",
      color: "rainbow-indigo"
    },
    {
      title: "Flexible Precision",
      description: "Seconds can be omitted in some cases",
      example: "10:30 or 10:30:00",
      color: "rainbow-violet"
    },
    {
      title: "Extended Features",
      description: "Supports intervals, durations, and recurring events",
      example: "P1Y2M3DT4H5M6S (duration)",
      color: "rainbow-red"
    }
  ]

  const comparisonItems = [
    {
      aspect: "Timezone Requirement",
      rfc3339: "Always required (Z or ±HH:MM)",
      iso8601: "Optional for local time",
      rfcBetter: true
    },
    {
      aspect: "Internet Usage",
      rfc3339: "Designed for internet protocols",
      iso8601: "General-purpose standard",
      rfcBetter: true
    },
    {
      aspect: "Precision",
      rfc3339: "Seconds always required",
      iso8601: "Flexible precision",
      rfcBetter: false
    },
    {
      aspect: "Complexity",
      rfc3339: "Simpler, more focused",
      iso8601: "More comprehensive",
      rfcBetter: true
    },
    {
      aspect: "Ambiguity",
      rfc3339: "Less ambiguous due to timezone requirement",
      iso8601: "Can be ambiguous without timezone",
      rfcBetter: true
    }
  ]

  return (
    <div className="space-y-8">
      <Card className="border-rainbow-indigo/30 hover:border-rainbow-indigo/60 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-rainbow">
            <Book className="h-6 w-6" />
            What is RFC 3339?
          </CardTitle>
          <CardDescription>
            Understanding the Date and Time on the Internet specification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <p>
              <strong>RFC 3339</strong> is a profile of the <strong>ISO 8601</strong> standard, 
              specifically designed for use on the Internet. It defines a subset of ISO 8601 
              that is unambiguous and suitable for internet protocols and data exchange.
            </p>
            <p>
              Published in July 2002, RFC 3339 addresses the need for a standardized, 
              unambiguous way to represent dates and times in internet applications, 
              particularly focusing on timezone handling and reducing parsing complexity.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-rainbow-green/30 hover:border-rainbow-green/60 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-rainbow-green" />
              RFC 3339 Features
            </CardTitle>
            <CardDescription>
              Key characteristics of the RFC 3339 specification
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rfcFeatures.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`border-${feature.color}/50 text-${feature.color}`}>
                    {feature.title}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <code className="text-xs code-bg p-2 rounded block font-mono">
                  {feature.example}
                </code>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-rainbow-blue/30 hover:border-rainbow-blue/60 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-rainbow-blue" />
              ISO 8601 Features
            </CardTitle>
            <CardDescription>
              Broader capabilities of the ISO 8601 standard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isoFeatures.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`border-${feature.color}/50 text-${feature.color}`}>
                    {feature.title}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <code className="text-xs code-bg p-2 rounded block font-mono">
                  {feature.example}
                </code>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-rainbow-violet/30 hover:border-rainbow-violet/60 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-rainbow">
            <Info className="h-6 w-6" />
            RFC 3339 vs ISO 8601: Key Differences
          </CardTitle>
          <CardDescription>
            A detailed comparison of both standards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comparisonItems.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="font-medium text-foreground">
                    {item.aspect}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-rainbow-green">RFC 3339</div>
                    <div className="text-sm text-muted-foreground">{item.rfc3339}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-rainbow-blue">ISO 8601</div>
                    <div className="text-sm text-muted-foreground">{item.iso8601}</div>
                  </div>
                </div>
                {index < comparisonItems.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-rainbow-orange/30 hover:border-rainbow-orange/60 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-rainbow-orange" />
            When to Use Each Standard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-rainbow-green">Use RFC 3339 for:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web APIs and REST services</li>
                <li>• JSON data interchange</li>
                <li>• Database timestamps</li>
                <li>• Log files and audit trails</li>
                <li>• Internet protocols (HTTP, email)</li>
                <li>• When timezone clarity is critical</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-rainbow-blue">Use ISO 8601 for:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Calendar applications</li>
                <li>• Business documents</li>
                <li>• Duration and interval calculations</li>
                <li>• Recurring event patterns</li>
                <li>• Local time representations</li>
                <li>• International standards compliance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}