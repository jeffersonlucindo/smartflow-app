import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Accordion</h1>
                <p className="text-muted-foreground text-lg">
                    A vertically stacked set of interactive headings that each reveal a section of content.
                </p>
            </div>

            {/* Single */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Single</h2>
                    <p className="text-muted-foreground">
                        Only one item can be opened at a time.
                    </p>
                </div>
                <Accordion type="single" collapsible className="max-w-2xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other components' aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                </pre>
            </section>

            {/* Multiple */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Multiple</h2>
                    <p className="text-muted-foreground">
                        Multiple items can be opened at the same time.
                    </p>
                </div>
                <Accordion type="multiple" className="max-w-2xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                        <AccordionContent>
                            Yes! With type=&quot;multiple&quot;, you can have multiple accordion items open at the same time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I close all items?</AccordionTrigger>
                        <AccordionContent>
                            Simply click on each opened item&apos;s trigger to close it individually.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is this useful?</AccordionTrigger>
                        <AccordionContent>
                            Yes, especially for FAQ sections where users might want to compare answers.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                </pre>
            </section>

            {/* FAQ Example */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">FAQ Example</h2>
                    <p className="text-muted-foreground">
                        Common use case for accordion.
                    </p>
                </div>
                <Accordion type="single" collapsible className="max-w-2xl">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What services do you offer?</AccordionTrigger>
                        <AccordionContent>
                            We offer comprehensive nutrition planning, dietary consultations, meal tracking, and personalized health recommendations tailored to your specific needs and goals.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How do I get started?</AccordionTrigger>
                        <AccordionContent>
                            Simply create an account, complete your health profile, and schedule your first consultation with one of our certified nutritionists. We&apos;ll guide you through every step of your journey.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are your pricing plans?</AccordionTrigger>
                        <AccordionContent>
                            We offer flexible pricing plans starting from basic meal tracking to comprehensive nutrition programs with personal coaching. Visit our pricing page or contact us for a custom plan.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What services do you offer?</AccordionTrigger>
    <AccordionContent>
      Comprehensive nutrition planning...
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function MyComponent() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Title</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
      </AccordionItem>
    </Accordion>
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
                    <li>Keyboard navigation with Tab and Arrow keys</li>
                    <li>Space or Enter to toggle accordion items</li>
                    <li>Home/End keys navigate to first/last item</li>
                    <li>Screen readers announce expanded/collapsed state</li>
                </ul>
            </section>
        </div>
    )
}
