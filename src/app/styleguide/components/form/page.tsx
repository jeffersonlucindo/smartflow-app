"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
})

export default function FormPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast.success("Form submitted successfully!", {
            description: JSON.stringify(values, null, 2),
        })
    }

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Form</h1>
                <p className="text-muted-foreground text-lg">
                    Building forms with React Hook Form and Zod for validation.
                </p>
            </div>

            {/* Basic Form */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic Form</h2>
                    <p className="text-muted-foreground">
                        A form with validation using React Hook Form and Zod.
                    </p>
                </div>
                <div className="max-w-md">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="johndoe" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            We&apos;ll never share your email with anyone else.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
})

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Your display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}</code>
                </pre>
            </section>

            {/* Form Components */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Form Components</h2>
                    <p className="text-muted-foreground">
                        The form is composed of several sub-components.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormField</h3>
                        <p className="text-sm text-muted-foreground">
                            Wrapper that connects the form field to React Hook Form. Uses render props pattern.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormItem</h3>
                        <p className="text-sm text-muted-foreground">
                            Container for a form field, providing proper spacing and layout.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormLabel</h3>
                        <p className="text-sm text-muted-foreground">
                            Label for the form field with automatic association.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormControl</h3>
                        <p className="text-sm text-muted-foreground">
                            Wrapper for the actual input component (Input, Select, etc.)
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormDescription</h3>
                        <p className="text-sm text-muted-foreground">
                            Helper text to provide additional context for the field.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">FormMessage</h3>
                        <p className="text-sm text-muted-foreground">
                            Displays validation error messages for the field.
                        </p>
                    </div>
                </div>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// See full example above for implementation`}</code>
                </pre>
            </section>

            {/* Accessibility */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Accessibility</h2>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Automatic label association with form controls</li>
                    <li>Error messages are announced to screen readers</li>
                    <li>Required fields are properly marked</li>
                    <li>Keyboard navigation works seamlessly</li>
                    <li>Built on Radix UI primitives for accessibility</li>
                </ul>
            </section>
        </div>
    )
}
