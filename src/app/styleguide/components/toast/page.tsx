"use client"

import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function ToastPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Toast</h1>
                <p className="text-muted-foreground text-lg">
                    A succinct message that is displayed temporarily. Uses Sonner library.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        Simple toast notification.
                    </p>
                </div>
                <Button onClick={() => toast("Event has been created")}>
                    Show Toast
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { toast } from "sonner"

toast("Event has been created")`}</code>
                </pre>
            </section>

            {/* With Description */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Description</h2>
                    <p className="text-muted-foreground">
                        Toast with title and description.
                    </p>
                </div>
                <Button
                    onClick={() =>
                        toast("Event has been created", {
                            description: "Monday, January 3rd at 6:00pm",
                        })
                    }
                >
                    Show Toast with Description
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`toast("Event has been created", {
  description: "Monday, January 3rd at 6:00pm",
})`}</code>
                </pre>
            </section>

            {/* Variants */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Variants</h2>
                    <p className="text-muted-foreground">
                        Different toast types for various use cases.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button onClick={() => toast("Default toast")}>
                        Default
                    </Button>
                    <Button onClick={() => toast.success("Success toast")}>
                        Success
                    </Button>
                    <Button onClick={() => toast.error("Error toast")}>
                        Error
                    </Button>
                    <Button onClick={() => toast.warning("Warning toast")}>
                        Warning
                    </Button>
                    <Button onClick={() => toast.info("Info toast")}>
                        Info
                    </Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`toast("Default toast")
toast.success("Success toast")
toast.error("Error toast")
toast.warning("Warning toast")
toast.info("Info toast")`}</code>
                </pre>
            </section>

            {/* With Action */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">With Action</h2>
                    <p className="text-muted-foreground">
                        Toast with an action button.
                    </p>
                </div>
                <Button
                    onClick={() =>
                        toast("Event has been created", {
                            action: {
                                label: "Undo",
                                onClick: () => toast("Undo clicked"),
                            },
                        })
                    }
                >
                    Show Toast with Action
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`}</code>
                </pre>
            </section>

            {/* Promise */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Promise</h2>
                    <p className="text-muted-foreground">
                        Toast that tracks a promise state.
                    </p>
                </div>
                <Button
                    onClick={() => {
                        const promise = () =>
                            new Promise<{ name: string }>((resolve) =>
                                setTimeout(() => resolve({ name: "Sonner" }), 2000)
                            )

                        toast.promise(promise, {
                            loading: "Loading...",
                            success: (data) => {
                                return `${data.name} has been added`
                            },
                            error: "Error",
                        })
                    }}
                >
                    Show Promise Toast
                </Button>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`const promise = () => new Promise((resolve) => 
  setTimeout(() => resolve({ name: "Data" }), 2000)
)

toast.promise(promise, {
  loading: "Loading...",
  success: (data) => \`\${data.name} loaded\`,
  error: "Error",
})`}</code>
                </pre>
            </section>

            {/* Custom Duration */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Custom Duration</h2>
                    <p className="text-muted-foreground">
                        Control how long the toast is displayed.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button
                        onClick={() =>
                            toast("This will close in 1 second", { duration: 1000 })
                        }
                    >
                        1 Second
                    </Button>
                    <Button
                        onClick={() =>
                            toast("This will close in 5 seconds", { duration: 5000 })
                        }
                    >
                        5 Seconds
                    </Button>
                    <Button
                        onClick={() =>
                            toast("This will stay open", { duration: Infinity })
                        }
                    >
                        Infinite
                    </Button>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`toast("Message", { duration: 5000 })`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`"use client"

import { toast } from "sonner"

export default function MyComponent() {
  return (
    <button onClick={() => toast("Hello world")}>
      Show Toast
    </button>
  )
}

// Note: Toaster component must be added to your root layout
// import { Toaster } from "@/components/ui/sonner"
// <Toaster />`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Screen readers announce toast messages</li>
                    <li>Toasts can be dismissed with Escape key</li>
                    <li>Action buttons are keyboard accessible</li>
                    <li>Supports reduced motion preferences</li>
                </ul>
            </section>
        </div >
    )
}
