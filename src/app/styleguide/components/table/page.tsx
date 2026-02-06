import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
]

export default function TablePage() {
    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Table</h1>
                <p className="text-muted-foreground text-lg">
                    A responsive table component for displaying data.
                </p>
            </div>

            {/* Basic Table */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Basic Table</h2>
                    <p className="text-muted-foreground">
                        A simple table with header, body, and footer.
                    </p>
                </div>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right">$1,750.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell>{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={3}>Total</TableCell>
      <TableCell className="text-right">$1,750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}</code>
                </pre>
            </section>

            {/* Minimal Table */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Minimal Table</h2>
                    <p className="text-muted-foreground">
                        A table without caption and footer.
                    </p>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>john@example.com</TableCell>
                            <TableCell>Admin</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jane Smith</TableCell>
                            <TableCell>jane@example.com</TableCell>
                            <TableCell>User</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
                </pre>
            </section>

            {/* Usage */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function MyComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell</TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
                    <li>Use TableCaption to describe the table content</li>
                    <li>TableHeader provides semantic meaning for screen readers</li>
                    <li>Use proper heading hierarchy with TableHead elements</li>
                    <li>Consider adding scope attributes for complex tables</li>
                </ul>
            </section>
        </div>
    )
}
