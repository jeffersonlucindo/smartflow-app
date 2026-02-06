import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `Tag ${a.length - i}`
)

export default function ScrollAreaPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Scroll Area</h1>
                <p className="text-muted-foreground text-lg">
                    Augments native scroll functionality for custom, cross-browser styling.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A scrollable area with custom styling.
                    </p>
                </div>
                <ScrollArea className="h-72 w-48 rounded-md border">
                    <div className="p-4">
                        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                        {tags.map((tag) => (
                            <>
                                <div key={tag} className="text-sm">
                                    {tag}
                                </div>
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>
                </ScrollArea>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">{tag}</div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>`}</code>
                </pre>
            </section>

            {/* Horizontal */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Horizontal</h2>
                    <p className="text-muted-foreground">
                        Horizontally scrollable content.
                    </p>
                </div>
                <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className="shrink-0 rounded-md bg-muted h-20 w-20 flex items-center justify-center"
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {items.map((item) => (
      <div key={item} className="shrink-0">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`}</code>
                </pre>
            </section>

            {/* Text Content */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Text Content</h2>
                    <p className="text-muted-foreground">
                        Scrollable text area for long content.
                    </p>
                </div>
                <ScrollArea className="h-[200px] w-full max-w-2xl rounded-md border p-4">
                    <div className="space-y-4">
                        <p>
                            Smart Flow Nutrition is a comprehensive nutrition management platform
                            designed to help nutritionists and their clients achieve optimal health
                            outcomes through personalized meal planning and monitoring.
                        </p>
                        <p>
                            Our platform provides tools for creating customized meal plans, tracking
                            nutritional intake, monitoring progress, and facilitating communication
                            between nutritionists and clients.
                        </p>
                        <p>
                            With Smart Flow Nutrition, nutritionists can efficiently manage multiple
                            clients, create evidence-based meal plans, and track client progress
                            over time. Clients benefit from personalized nutrition guidance,
                            easy-to-follow meal plans, and continuous support from their nutritionist.
                        </p>
                        <p>
                            The platform includes features such as automated meal plan generation,
                            nutritional analysis, progress tracking, appointment scheduling, and
                            secure messaging between nutritionists and clients.
                        </p>
                        <p>
                            Whether you&apos;re a solo practitioner or part of a larger nutrition practice,
                            Smart Flow Nutrition adapts to your needs and helps you deliver
                            exceptional care to your clients.
                        </p>
                    </div>
                </ScrollArea>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<ScrollArea className="h-[200px] w-full rounded-md border p-4">
  <div className="space-y-4">
    <p>Long text content...</p>
    <p>More paragraphs...</p>
  </div>
</ScrollArea>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { ScrollArea } from "@/components/ui/scroll-area"

export default function MyComponent() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border">
      <div className="p-4">
        {/* Your scrollable content */}
      </div>
    </ScrollArea>
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
                    <li>Keyboard navigation with Arrow keys and Page Up/Down</li>
                    <li>Mouse wheel scrolling works as expected</li>
                    <li>Touch/swipe gestures on mobile devices</li>
                    <li>Screen readers can navigate content normally</li>
                    <li>Scrollbar visibility follows system preferences</li>
                </ul>
            </section>
        </div>
    )
}
