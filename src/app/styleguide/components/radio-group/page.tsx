"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Radio Group</h1>
                <p className="text-muted-foreground text-lg">
                    A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A simple radio group.
                    </p>
                </div>
                <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one" className="cursor-pointer">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two" className="cursor-pointer">Option Two</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="option-three" />
                        <Label htmlFor="option-three" className="cursor-pointer">Option Three</Label>
                    </div>
                </RadioGroup>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}</code>
                </pre>
            </section>

            {/* With Description */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Description</h2>
                    <p className="text-muted-foreground">
                        Radio group with descriptive text.
                    </p>
                </div>
                <RadioGroup defaultValue="comfortable">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="r1" className="cursor-pointer">
                                Default
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Use the default spacing and sizing.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="r2" className="cursor-pointer">
                                Comfortable
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Increase spacing for better readability.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="r3" className="cursor-pointer">
                                Compact
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Reduce spacing to fit more content.
                            </p>
                        </div>
                    </div>
                </RadioGroup>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <div className="grid gap-1.5">
      <Label htmlFor="r1">Default</Label>
      <p className="text-sm text-muted-foreground">
        Use the default spacing and sizing.
      </p>
    </div>
  </div>
</RadioGroup>`}</code>
                </pre>
            </section>

            {/* Form Example */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Form Example</h2>
                    <p className="text-muted-foreground">
                        Radio group in a form layout.
                    </p>
                </div>
                <div className="max-w-md space-y-3">
                    <div>
                        <h3 className="mb-2 font-medium">Notification preferences</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Choose how you want to receive notifications.
                        </p>
                    </div>
                    <RadioGroup defaultValue="email">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email" />
                            <Label htmlFor="email" className="cursor-pointer font-normal">
                                Email notifications
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="sms" id="sms" />
                            <Label htmlFor="sms" className="cursor-pointer font-normal">
                                SMS notifications
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="push" id="push" />
                            <Label htmlFor="push" className="cursor-pointer font-normal">
                                Push notifications
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="none" id="none" />
                            <Label htmlFor="none" className="cursor-pointer font-normal">
                                No notifications
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<RadioGroup defaultValue="email">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="email" id="email" />
    <Label htmlFor="email">Email notifications</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="sms" id="sms" />
    <Label htmlFor="sms">SMS notifications</Label>
  </div>
</RadioGroup>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function MyComponent() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
    </RadioGroup>
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
                    <li>Keyboard navigation with Arrow keys to move between options</li>
                    <li>Space key to select the focused option</li>
                    <li>Screen readers announce the group and selected option</li>
                    <li>Always associate with Label using matching id/htmlFor</li>
                </ul>
            </section>
        </div>
    )
}
