import { useState, useEffect } from "react"
import { format, formatISO } from "date-fns"
import { formatInTimeZone, toZonedTime } from "date-fns-tz"
import { Calendar, Clock, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function RFC3339Display() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedTimezone, setSelectedTimezone] = useState("Z")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const { toast } = useToast()

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    // Initialize with current date/time
    const now = new Date()
    setSelectedDate(format(now, "yyyy-MM-dd"))
    setSelectedTime(format(now, "HH:mm:ss"))

    return () => clearInterval(timer)
  }, [])

  // Generate custom datetime
  const generateCustomDateTime = () => {
    try {
      let dateTimeString = `${selectedDate}T${selectedTime}`
      
      if (selectedTimezone === "Z") {
        dateTimeString += "Z"
      } else {
        dateTimeString += selectedTimezone
      }

      return dateTimeString
    } catch {
      return "Invalid date/time"
    }
  }

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
      toast({
        title: "Copied to clipboard!",
        description: "RFC 3339 timestamp copied successfully",
      })
    } catch {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const timezones = [
    { value: "Z", label: "UTC (Z)" },
    { value: "+00:00", label: "UTC (+00:00)" },
    { value: "-12:00", label: "Baker Island (-12:00)" },
    { value: "-11:00", label: "American Samoa (-11:00)" },
    { value: "-10:00", label: "Hawaii (-10:00)" },
    { value: "-09:00", label: "Alaska (-09:00)" },
    { value: "-08:00", label: "PST (-08:00)" },
    { value: "-07:00", label: "PDT/MST (-07:00)" },
    { value: "-06:00", label: "CST (-06:00)" },
    { value: "-05:00", label: "EST (-05:00)" },
    { value: "-04:00", label: "EDT/AST (-04:00)" },
    { value: "-03:00", label: "Argentina (-03:00)" },
    { value: "-02:00", label: "South Georgia (-02:00)" },
    { value: "-01:00", label: "Azores (-01:00)" },
    { value: "+01:00", label: "CET (+01:00)" },
    { value: "+02:00", label: "EET (+02:00)" },
    { value: "+03:00", label: "MSK (+03:00)" },
    { value: "+03:30", label: "Iran (+03:30)" },
    { value: "+04:00", label: "Gulf (+04:00)" },
    { value: "+04:30", label: "Afghanistan (+04:30)" },
    { value: "+05:00", label: "Pakistan (+05:00)" },
    { value: "+05:30", label: "India (+05:30)" },
    { value: "+05:45", label: "Nepal (+05:45)" },
    { value: "+06:00", label: "Bangladesh (+06:00)" },
    { value: "+06:30", label: "Myanmar (+06:30)" },
    { value: "+07:00", label: "ICT (+07:00)" },
    { value: "+08:00", label: "CST Asia (+08:00)" },
    { value: "+09:00", label: "JST (+09:00)" },
    { value: "+09:30", label: "Australia Central (+09:30)" },
    { value: "+10:00", label: "AEST (+10:00)" },
    { value: "+10:30", label: "Lord Howe (+10:30)" },
    { value: "+11:00", label: "Solomon Islands (+11:00)" },
    { value: "+12:00", label: "New Zealand (+12:00)" },
    { value: "+12:45", label: "Chatham Islands (+12:45)" },
    { value: "+13:00", label: "Tonga (+13:00)" },
    { value: "+14:00", label: "Line Islands (+14:00)" },
  ]

  const examples = [
    {
      title: "Current Browser Time",
      description: "Your local time in RFC 3339 format",
      value: formatISO(currentDate),
    },
    {
      title: "UTC Time",
      description: "Current UTC time with Z suffix",
      value: formatInTimeZone(currentDate, "UTC", "yyyy-MM-dd'T'HH:mm:ss'Z'"),
    },
    {
      title: "With Milliseconds",
      description: "High precision timestamp",
      value: currentDate.toISOString(),
    },
    {
      title: "Custom Date/Time",
      description: "Your configured date and time",
      value: generateCustomDateTime(),
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-rainbow-blue/30 hover:border-rainbow-blue/60 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-rainbow">
            <Clock className="h-5 w-5" />
            Live RFC 3339 Timestamps
          </CardTitle>
          <CardDescription>
            Real-time date and time formatting according to RFC 3339 specification
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {examples.map((example, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 code-bg rounded-lg border border-border/50"
            >
              <div className="flex-1">
                <h4 className="font-medium text-sm text-foreground">{example.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{example.description}</p>
                <code className="font-mono text-sm break-all">{example.value}</code>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(example.value, index)}
                className="ml-4 hover:bg-rainbow-blue/10"
              >
                {copiedIndex === index ? (
                  <Check className="h-4 w-4 text-rainbow-green" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-rainbow-green/30 hover:border-rainbow-green/60 transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gradient-rainbow">
            <Calendar className="h-5 w-5" />
            Custom Date/Time Builder
          </CardTitle>
          <CardDescription>
            Build your own RFC 3339 compliant timestamp
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                step="1"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="font-mono"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                <SelectTrigger className="font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timezones.map((tz) => (
                    <SelectItem key={tz.value} value={tz.value} className="font-mono">
                      {tz.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}