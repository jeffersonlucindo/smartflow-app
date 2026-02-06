import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Input</h1>
                <p className="text-muted-foreground text-lg">
                    A text input field for user data entry.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        Standard text input field.
                    </p>
                </div>
                <div className="max-w-sm">
                    <Input type="text" placeholder="Enter text..." />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Input type="text" placeholder="Enter text..." />`}</code>
                </pre>
            </section>

            {/* With Label */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Label</h2>
                    <p className="text-muted-foreground">
                        Input with an associated label.
                    </p>
                </div>
                <div className="max-w-sm space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email" />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Email" />
</div>`}</code>
                </pre>
            </section>

            {/* Types */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Input Types</h2>
                    <p className="text-muted-foreground">
                        Different input types for various data.
                    </p>
                </div>
                <div className="max-w-sm space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="text">Text</Label>
                        <Input id="text" type="text" placeholder="Text input" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email-type">Email</Label>
                        <Input id="email-type" type="email" placeholder="email@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="number">Number</Label>
                        <Input id="number" type="number" placeholder="123" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" type="date" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="file">File</Label>
                        <Input id="file" type="file" />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="123" />
<Input type="date" />
<Input type="file" />`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">States</h2>
                    <p className="text-muted-foreground">
                        Different input states.
                    </p>
                </div>
                <div className="max-w-sm space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="default-state">Default</Label>
                        <Input id="default-state" placeholder="Default state" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="disabled-state">Disabled</Label>
                        <Input id="disabled-state" placeholder="Disabled state" disabled />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="readonly-state">Read Only</Label>
                        <Input id="readonly-state" value="Read only value" readOnly />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Input placeholder="Default state" />
<Input placeholder="Disabled state" disabled />
<Input value="Read only value" readOnly />`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Input } from "@/components/ui/input"

export default function MyComponent() {
  return <Input type="email" placeholder="Email" />
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Always use a Label component with a matching htmlFor attribute</li>
                    <li>Provide descriptive placeholder text when appropriate</li>
                    <li>Use appropriate input type for better mobile keyboards</li>
                    <li>Disabled and readonly states are announced to screen readers</li>
                </ul>
            </section>
        </div>
    )
}
