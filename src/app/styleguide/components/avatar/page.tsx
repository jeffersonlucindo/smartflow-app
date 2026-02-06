import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Avatar</h1>
                <p className="text-muted-foreground text-lg">
                    An image element with a fallback for representing the user.
                </p>
            </div>

            {/* Basic */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic</h2>
                    <p className="text-muted-foreground">
                        Avatar with image and fallback.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Fallback Only */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Fallback Only</h2>
                    <p className="text-muted-foreground">
                        Avatar with only fallback text (no image).
                    </p>
                </div>
                <div className="flex gap-4">
                    <Avatar>
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Sizes</h2>
                    <p className="text-muted-foreground">
                        Different avatar sizes using custom classes.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
                        <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
                        <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
                        <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-24 w-24">
                        <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
                        <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Avatar className="h-8 w-8">
  <AvatarImage src="..." />
  <AvatarFallback>SM</AvatarFallback>
</Avatar>

<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="..." />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Use Cases */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Common Use Cases</h2>
                    <p className="text-muted-foreground">
                        Practical examples of avatar usage.
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="font-medium">User Profile</h3>
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">John Doe</p>
                                <p className="text-sm text-muted-foreground">john@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-medium">Avatar Group</h3>
                        <div className="flex -space-x-4">
                            <Avatar className="border-2 border-background">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarImage src="https://github.com/vercel.png" />
                                <AvatarFallback>CD</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarFallback>EF</AvatarFallback>
                            </Avatar>
                            <Avatar className="border-2 border-background">
                                <AvatarFallback>+5</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`{/* User Profile */}
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="..." />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="text-sm font-medium">John Doe</p>
    <p className="text-sm text-muted-foreground">john@example.com</p>
  </div>
</div>

{/* Avatar Group */}
<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>CD</AvatarFallback>
  </Avatar>
</div>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="User" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
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
                    <li>Always provide alt text for AvatarImage</li>
                    <li>Fallback text should be meaningful initials or identifier</li>
                    <li>Use proper color contrast for fallback backgrounds</li>
                    <li>Consider adding aria-label for additional context</li>
                </ul>
            </section>
        </div>
    )
}
