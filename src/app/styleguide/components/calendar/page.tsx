"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function CalendarPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Calendar</h1>
                <p className="text-muted-foreground text-lg">
                    A date field component that allows users to enter and edit date.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A simple calendar with single date selection.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}</code>
                </pre>
            </section>

            {/* Multiple Selection */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Multiple Selection</h2>
                    <p className="text-muted-foreground">
                        Calendar with multiple date selection.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Calendar
                        mode="multiple"
                        selected={multipleDates}
                        onSelect={setMultipleDates}
                        className="rounded-md border"
                    />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`const [dates, setDates] = useState<Date[] | undefined>([])

<Calendar
  mode="multiple"
  selected={dates}
  onSelect={setDates}
  className="rounded-md border"
/>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function MyComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Keyboard navigation with Arrow keys to move between dates</li>
                    <li>Enter or Space to select a date</li>
                    <li>Page Up/Down to navigate months</li>
                    <li>Home/End to navigate to start/end of week</li>
                    <li>Screen readers announce selected date and current month</li>
                </ul>
            </section>
        </div>
    )
}
