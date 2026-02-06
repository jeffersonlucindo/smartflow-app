import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LabelPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Label</h1>
                <p className="text-muted-foreground text-lg">
                    Renders an accessible label associated with form controls.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        Label associated with an input.
                    </p>
                </div>
                <div className="max-w-sm space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>`}</code>
                </pre>
            </section>

            {/* With Checkbox */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Checkbox</h2>
                    <p className="text-muted-foreground">
                        Label associated with a checkbox.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="cursor-pointer">
                        Accept terms and conditions
                    </Label>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="cursor-pointer">
    Accept terms and conditions
  </Label>
</div>`}</code>
                </pre>
            </section>

            {/* Required Field */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Required Field</h2>
                    <p className="text-muted-foreground">
                        Label with required indicator.
                    </p>
                </div>
                <div className="max-w-sm space-y-2">
                    <Label htmlFor="username">
                        Username <span className="text-destructive">*</span>
                    </Label>
                    <Input id="username" required />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="username">
    Username <span className="text-destructive">*</span>
  </Label>
  <Input id="username" required />
</div>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Label } from "@/components/ui/label"

export default function MyComponent() {
  return <Label htmlFor="input-id">Label Text</Label>
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Always associate labels with form controls using htmlFor attribute</li>
                    <li>Screen readers announce the label when the control receives focus</li>
                    <li>Clicking the label focuses the associated control</li>
                    <li>Use cursor-pointer class for better UX with clickable labels</li>
                </ul>
            </section>
        </div>
    )
}
