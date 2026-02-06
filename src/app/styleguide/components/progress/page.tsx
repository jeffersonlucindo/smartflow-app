import { Progress } from "@/components/ui/progress"

export default function ProgressPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Progress</h1>
                <p className="text-muted-foreground text-lg">
                    Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        Simple progress bars with different values.
                    </p>
                </div>
                <div className="space-y-6 max-w-2xl">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Progress: 0%</span>
                        </div>
                        <Progress value={0} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Progress: 25%</span>
                        </div>
                        <Progress value={25} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Progress: 50%</span>
                        </div>
                        <Progress value={50} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Progress: 75%</span>
                        </div>
                        <Progress value={75} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Progress: 100%</span>
                        </div>
                        <Progress value={100} />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Progress value={0} />
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}</code>
                </pre>
            </section>

            {/* Use Cases */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Common Use Cases</h2>
                    <p className="text-muted-foreground">
                        Practical examples of progress bar usage.
                    </p>
                </div>
                <div className="space-y-6 max-w-2xl">
                    <div className="space-y-2">
                        <h3 className="font-medium">File Upload</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Uploading document.pdf</span>
                            <span>65%</span>
                        </div>
                        <Progress value={65} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">Profile Completion</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Complete your profile</span>
                            <span>3 of 5 steps</span>
                        </div>
                        <Progress value={60} />
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">Storage Usage</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>4.2 GB of 10 GB used</span>
                            <span>42%</span>
                        </div>
                        <Progress value={42} />
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading document.pdf</span>
    <span>65%</span>
  </div>
  <Progress value={65} />
</div>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Progress } from "@/components/ui/progress"

export default function MyComponent() {
  return <Progress value={50} />
}`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Uses proper ARIA attributes for progress indication</li>
                    <li>Screen readers announce current progress value</li>
                    <li>Provide additional context with visible labels</li>
                    <li>Update value programmatically as task progresses</li>
                </ul>
            </section>
        </div>
    )
}
