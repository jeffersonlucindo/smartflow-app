import { Button } from "@/components/ui/button"
import { Loader2, Mail, ChevronRight } from "lucide-react"

export default function ButtonPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Button</h1>
                <p className="text-muted-foreground text-lg">
                    Displays a button or a component that looks like a button.
                </p>
            </div>

            {/* Variants */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Variants</h2>
                    <p className="text-muted-foreground">
                        Different visual styles for various use cases.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Sizes</h2>
                    <p className="text-muted-foreground">
                        Different button sizes for different contexts.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`}</code>
                </pre>
            </section>

            {/* With Icon */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Icon</h2>
                    <p className="text-muted-foreground">
                        Buttons with icons for better visual communication.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button>
                        <Mail className="mr-2 h-4 w-4" />
                        Login with Email
                    </Button>
                    <Button variant="outline">
                        Continue
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>
<Button variant="outline">
  Continue
  <ChevronRight className="ml-2 h-4 w-4" />
</Button>`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">States</h2>
                    <p className="text-muted-foreground">
                        Different button states for user feedback.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading
                    </Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Button>Default</Button>
<Button disabled>Disabled</Button>
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading
</Button>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button>Click me</Button>
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Keyboard accessible - can be focused and activated with Enter or Space</li>
                    <li>Disabled state prevents interaction and is announced to screen readers</li>
                    <li>Use descriptive text or aria-label for icon-only buttons</li>
                </ul>
            </section>
        </div>
    )
}
