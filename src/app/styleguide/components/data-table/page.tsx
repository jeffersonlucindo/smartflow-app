"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export type Patient = {
    id: string
    name: string
    email: string
    status: "active" | "inactive" | "pending"
    lastVisit: string
}

const data: Patient[] = [
    {
        id: "PAT001",
        name: "Maria Silva",
        email: "maria.silva@email.com",
        status: "active",
        lastVisit: "2024-02-01",
    },
    {
        id: "PAT002",
        name: "João Santos",
        email: "joao.santos@email.com",
        status: "active",
        lastVisit: "2024-02-03",
    },
    {
        id: "PAT003",
        name: "Ana Costa",
        email: "ana.costa@email.com",
        status: "pending",
        lastVisit: "2024-01-28",
    },
    {
        id: "PAT004",
        name: "Pedro Oliveira",
        email: "pedro.oliveira@email.com",
        status: "inactive",
        lastVisit: "2024-01-15",
    },
    {
        id: "PAT005",
        name: "Carla Ferreira",
        email: "carla.ferreira@email.com",
        status: "active",
        lastVisit: "2024-02-05",
    },
    {
        id: "PAT006",
        name: "Rafael Lima",
        email: "rafael.lima@email.com",
        status: "active",
        lastVisit: "2024-02-02",
    },
    {
        id: "PAT007",
        name: "Juliana Rocha",
        email: "juliana.rocha@email.com",
        status: "pending",
        lastVisit: "2024-01-30",
    },
    {
        id: "PAT008",
        name: "Lucas Alves",
        email: "lucas.alves@email.com",
        status: "active",
        lastVisit: "2024-02-04",
    },
]

export const columns: ColumnDef<Patient>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => <div className="font-medium">{row.getValue("id")}</div>,
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string
            return (
                <div className="flex items-center">
                    <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${status === "active"
                                ? "bg-green-100 text-green-800"
                                : status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                    >
                        {status}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "lastVisit",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Last Visit
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div>{row.getValue("lastVisit")}</div>,
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const patient = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(patient.id)}
                        >
                            Copy patient ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View patient</DropdownMenuItem>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]

export default function DataTablePage() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-bold mb-2">Data Table</h1>
                <p className="text-muted-foreground text-lg">
                    Advanced table with sorting, filtering, pagination, and row selection.
                </p>
            </div>

            {/* Advanced Data Table */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Interactive Data Table</h2>
                    <p className="text-muted-foreground">
                        A fully-featured data table with TanStack Table integration.
                    </p>
                </div>
                <div className="w-full">
                    <div className="flex items-center py-4 gap-2">
                        <Input
                            placeholder="Filter by name..."
                            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                            onChange={(event) =>
                                table.getColumn("name")?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-auto">
                                    Columns <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s) selected.
                        </div>
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Features</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Sorting</h3>
                        <p className="text-sm text-muted-foreground">
                            Click column headers to sort data ascending or descending.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Filtering</h3>
                        <p className="text-sm text-muted-foreground">
                            Search and filter rows using the search input.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Pagination</h3>
                        <p className="text-sm text-muted-foreground">
                            Navigate through large datasets with pagination controls.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Row Selection</h3>
                        <p className="text-sm text-muted-foreground">
                            Select individual rows or all rows with checkboxes.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Column Visibility</h3>
                        <p className="text-sm text-muted-foreground">
                            Toggle column visibility with the Columns dropdown.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">✓ Row Actions</h3>
                        <p className="text-sm text-muted-foreground">
                            Context menu for actions like copy, view, or edit.
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
                    <code>{`"use client"

import { useReactTable, getCoreRowModel } from "@tanstack/react-table"

// Define columns
const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  // ... more columns
]

// Use in component
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
})

// Render with flexRender helper`}</code>
                </pre>
            </section>

            {/* Dependencies */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Installation</h2>
                </div>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code>{`npm install @tanstack/react-table`}</code>
                </pre>
            </section>
        </div>
    )
}
