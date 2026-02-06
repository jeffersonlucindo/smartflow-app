import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardPage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Card</h1>
                <p className="text-muted-foreground text-lg">
                    Displays a card with header, content, and footer.
                </p>
            </div>

            {/* Basic Card */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic Card</h2>
                    <p className="text-muted-foreground">
                        A simple card with all sections.
                    </p>
                </div>
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground">Card Footer</p>
                    </CardFooter>
                </Card>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-muted-foreground">Card Footer</p>
  </CardFooter>
</Card>`}</code>
                </pre>
            </section>

            {/* Form Card */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Form Card</h2>
                    <p className="text-muted-foreground">
                        A card containing a form.
                    </p>
                </div>
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>
                            Enter your details to create your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Create</Button>
                    </CardFooter>
                </Card>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Card>
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>
      Enter your details to create your account.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="John Doe" />
    </div>
    {/* More fields... */}
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Create</Button>
  </CardFooter>
</Card>`}</code>
                </pre>
            </section>

            {/* Minimal Card */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Minimal Card</h2>
                    <p className="text-muted-foreground">
                        Card with only content.
                    </p>
                </div>
                <Card className="max-w-md">
                    <CardContent className="pt-6">
                        <p>
                            This is a minimal card with only content. Perfect for simple displays.
                        </p>
                    </CardContent>
                </Card>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Card>
  <CardContent className="pt-6">
    <p>This is a minimal card with only content.</p>
  </CardContent>
</Card>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
      <CardFooter>Footer</CardFooter>
    </Card>
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
                    <li>Cards are semantic containers using article elements</li>
                    <li>Use CardTitle for proper heading hierarchy</li>
                    <li>CardDescription provides context for screen readers</li>
                </ul>
            </section>
        </div>
    )
}
