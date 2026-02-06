import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TextareaPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Textarea</h1>
                <p className="text-muted-foreground text-lg">
                    Displays a form textarea or a component that looks like a textarea.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A simple textarea field.
                    </p>
                </div>
                <div className="max-w-2xl">
                    <Textarea placeholder="Type your message here." />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Textarea placeholder="Type your message here." />`}</code>
                </pre>
            </section>

            {/* With Label */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Label</h2>
                    <p className="text-muted-foreground">
                        Textarea with an associated label.
                    </p>
                </div>
                <div className="max-w-2xl space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message..." />
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message..." />
</div>`}</code>
                </pre>
            </section>

            {/* With Description */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Description</h2>
                    <p className="text-muted-foreground">
                        Textarea with label and helper text.
                    </p>
                </div>
                <div className="max-w-2xl space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself" />
                    <p className="text-sm text-muted-foreground">
                        You can use markdown and @mentions to format your bio.
                    </p>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself" />
  <p className="text-sm text-muted-foreground">
    You can use markdown and @mentions to format your bio.
  </p>
</div>`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">States</h2>
                    <p className="text-muted-foreground">
                        Different textarea states.
                    </p>
                </div>
                <div className="max-w-2xl space-y-4">
                    <div className="space-y-2">
                        <Label>Default</Label>
                        <Textarea placeholder="Default state" />
                    </div>
                    <div className="space-y-2">
                        <Label>Disabled</Label>
                        <Textarea placeholder="Disabled state" disabled />
                    </div>
                    <div className="space-y-2">
                        <Label>Read Only</Label>
                        <Textarea value="This text is read-only and cannot be edited." readOnly />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Textarea placeholder="Default state" />
<Textarea placeholder="Disabled state" disabled />
<Textarea value="Read-only text" readOnly />`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Textarea } from "@/components/ui/textarea"

export default function MyComponent() {
  return <Textarea placeholder="Type here..." />
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Always use a Label component with matching htmlFor attribute</li>
                    <li>Provide helpful placeholder text</li>
                    <li>Add description text for complex inputs</li>
                    <li>Disabled and readonly states are announced to screen readers</li>
                </ul>
            </section>
        </div>
    )
}
