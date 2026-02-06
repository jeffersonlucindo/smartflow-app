import { Badge } from "@/components/ui/badge"

export default function BadgePage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Badge</h1>
                <p className="text-muted-foreground text-lg">
                    Displays a badge or a component that looks like a badge.
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
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}</code>
                </pre>
            </section>

            {/* Use Cases */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Common Use Cases</h2>
                    <p className="text-muted-foreground">
                        Practical examples of badge usage.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-medium">Status Indicators</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Active</Badge>
                            <Badge variant="secondary">Pending</Badge>
                            <Badge variant="destructive">Cancelled</Badge>
                            <Badge variant="outline">Draft</Badge>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">Notification Count</h3>
                        <div className="flex flex-wrap gap-2 items-center">
                            <div className="relative">
                                <span>Inbox</span>
                                <Badge className="ml-2">12</Badge>
                            </div>
                            <div className="relative">
                                <span>Messages</span>
                                <Badge variant="destructive" className="ml-2">3</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">Next.js</Badge>
                            <Badge variant="secondary">Tailwind CSS</Badge>
                        </div>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`{/* Status */}
<Badge>Active</Badge>
<Badge variant="destructive">Cancelled</Badge>

{/* Count */}
<span>Inbox</span>
<Badge className="ml-2">12</Badge>

{/* Tags */}
<Badge variant="secondary">React</Badge>
<Badge variant="secondary">TypeScript</Badge>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Badge } from "@/components/ui/badge"

export default function MyComponent() {
  return <Badge>Badge</Badge>
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Badges are purely visual indicators</li>
                    <li>Use aria-label if the badge conveys important information</li>
                    <li>Ensure sufficient color contrast for readability</li>
                    <li>Don&apos;t rely solely on color to convey meaning</li>
                </ul>
            </section>
        </div>
    )
}
