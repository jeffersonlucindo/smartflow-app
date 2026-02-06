import { Separator } from "@/components/ui/separator"

export default function SeparatorPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Separator</h1>
                <p className="text-muted-foreground text-lg">
                    Visually or semantically separates content.
                </p>
            </div>

            {/* Horizontal */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Horizontal</h2>
                    <p className="text-muted-foreground">
                        Horizontal separator (default).
                    </p>
                </div>
                <div className="max-w-2xl">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none">Smart Flow Nutrition</h4>
                        <p className="text-sm text-muted-foreground">
                            Nutrition management platform
                        </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center space-x-4 text-sm">
                        <div>Blog</div>
                        <Separator orientation="vertical" />
                        <div>Docs</div>
                        <Separator orientation="vertical" />
                        <div>Source</div>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-1">
  <h4 className="text-sm font-medium">Title</h4>
  <p className="text-sm text-muted-foreground">Description</p>
</div>
<Separator className="my-4" />
<div className="flex items-center space-x-4">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
</div>`}</code>
                </pre>
            </section>

            {/* Vertical */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Vertical</h2>
                    <p className="text-muted-foreground">
                        Vertical separator for inline content.
                    </p>
                </div>
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <div>Home</div>
                    <Separator orientation="vertical" />
                    <div>About</div>
                    <Separator orientation="vertical" />
                    <div>Contact</div>
                    <Separator orientation="vertical" />
                    <div>Help</div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="flex h-5 items-center space-x-4 text-sm">
  <div>Home</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`}</code>
                </pre>
            </section>

            {/* In Lists */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">In Lists</h2>
                    <p className="text-muted-foreground">
                        Separating list items.
                    </p>
                </div>
                <div className="max-w-md">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Overview</h3>
                            <p className="text-sm text-muted-foreground">
                                View a summary of your data and metrics.
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="font-medium">Analytics</h3>
                            <p className="text-sm text-muted-foreground">
                                Deep dive into your analytics and performance.
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h3 className="font-medium">Settings</h3>
                            <p className="text-sm text-muted-foreground">
                                Manage your account and preferences.
                            </p>
                        </div>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-4">
  <div>
    <h3 className="font-medium">Overview</h3>
    <p className="text-sm text-muted-foreground">Summary</p>
  </div>
  <Separator />
  <div>
    <h3 className="font-medium">Analytics</h3>
    <p className="text-sm text-muted-foreground">Metrics</p>
  </div>
</div>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Separator } from "@/components/ui/separator"

export default function MyComponent() {
  return (
    <>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </>
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
                    <li>Uses semantic separator role for screen readers</li>
                    <li>Provides visual separation without affecting content flow</li>
                    <li>Decorative only - does not convey essential information</li>
                </ul>
            </section>
        </div>
    )
}
