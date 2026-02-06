"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SwitchPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Switch</h1>
                <p className="text-muted-foreground text-lg">
                    A control that allows the user to toggle between checked and not checked.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        A simple switch toggle.
                    </p>
                </div>
                <Switch />
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Switch />`}</code>
                </pre>
            </section>

            {/* With Label */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Label</h2>
                    <p className="text-muted-foreground">
                        Switch with an associated label.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode" className="cursor-pointer">
                        Airplane Mode
                    </Label>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}</code>
                </pre>
            </section>

            {/* Form Example */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Form Example</h2>
                    <p className="text-muted-foreground">
                        Multiple switches in a settings form.
                    </p>
                </div>
                <div className="max-w-md space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="notifications" className="cursor-pointer">
                                Email Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive emails about your account activity
                            </p>
                        </div>
                        <Switch id="notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="marketing" className="cursor-pointer">
                                Marketing Emails
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Receive emails about new products and features
                            </p>
                        </div>
                        <Switch id="marketing" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label htmlFor="security" className="cursor-pointer">
                                Security Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                                Get notified about security updates
                            </p>
                        </div>
                        <Switch id="security" defaultChecked />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label htmlFor="notifications">Email Notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive emails about your account activity
    </p>
  </div>
  <Switch id="notifications" />
</div>`}</code>
                </pre>
            </section>

            {/* States */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">States</h2>
                    <p className="text-muted-foreground">
                        Different switch states.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Switch id="default-switch" />
                        <Label htmlFor="default-switch">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="checked-switch" defaultChecked />
                        <Label htmlFor="checked-switch">Checked</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="disabled-switch" disabled />
                        <Label htmlFor="disabled-switch" className="opacity-50">Disabled</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="disabled-checked-switch" disabled defaultChecked />
                        <Label htmlFor="disabled-checked-switch" className="opacity-50">
                            Disabled (Checked)
                        </Label>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Switch />
<Switch defaultChecked />
<Switch disabled />
<Switch disabled defaultChecked />`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`"use client"

import { Switch } from "@/components/ui/switch"

export default function MyComponent() {
  return <Switch />
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Keyboard accessible - can be toggled with Space or Enter</li>
                    <li>Screen readers announce current state (on/off)</li>
                    <li>Associate with Label using id for better accessibility</li>
                    <li>Disabled state is announced to screen readers</li>
                </ul>
            </section>
        </div>
    )
}
