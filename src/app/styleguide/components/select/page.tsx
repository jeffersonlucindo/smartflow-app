import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function SelectPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Select</h1>
                <p className="text-muted-foreground text-lg">
                    Displays a list of options for the user to pick from—triggered by a button.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A simple select dropdown.
                    </p>
                </div>
                <div className="max-w-sm">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="orange">Orange</SelectItem>
                            <SelectItem value="grape">Grape</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`}</code>
                </pre>
            </section>

            {/* With Label */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Label</h2>
                    <p className="text-muted-foreground">
                        Select with an associated label.
                    </p>
                </div>
                <div className="max-w-sm space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                        <SelectTrigger id="country">
                            <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="brasil">Brasil</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="country">Country</Label>
  <Select>
    <SelectTrigger id="country">
      <SelectValue placeholder="Select your country" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="brasil">Brasil</SelectItem>
      <SelectItem value="usa">United States</SelectItem>
    </SelectContent>
  </Select>
</div>`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">States</h2>
                    <p className="text-muted-foreground">
                        Different select states.
                    </p>
                </div>
                <div className="max-w-sm space-y-4">
                    <div className="space-y-2">
                        <Label>Default</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="option1">Option 1</SelectItem>
                                <SelectItem value="option2">Option 2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Disabled</Label>
                        <Select disabled>
                            <SelectTrigger>
                                <SelectValue placeholder="Disabled select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="option1">Option 1</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>

<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Disabled select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function MyComponent() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
      </SelectContent>
    </Select>
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
                    <li>Keyboard navigation with Arrow keys, Enter, and Escape</li>
                    <li>Type-ahead support to quickly find options</li>
                    <li>Screen readers announce selected value and available options</li>
                    <li>Associate with Label using id for better accessibility</li>
                </ul>
            </section>
        </div>
    )
}
