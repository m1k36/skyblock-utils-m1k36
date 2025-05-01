'use client'
import {Item} from "@/types/itemsTypes";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import React from "react";
import {columns} from "@/components/itemUpgradeComponent/Columns";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {BazaarResponse} from "@/types/bazaarTypes";

interface itemCardProps {
    item: Item,
    bazaar: BazaarResponse,
}

export default function DataTable({item, bazaar}: itemCardProps) {

    console.log(item.upgrade_costs)

    const reactiveColumns = columns(bazaar, item);

    const table = useReactTable({
        data: item.upgrade_costs ? item.upgrade_costs : [],
        columns: reactiveColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getRowCanExpand: () => true,
    });

    return (<>
            <h2 className="text-2xl font-bold mt-6 w-full">
                {item.name}
            </h2>

            <div className="text-sm text-gray-200 w-full">Tier: <span className="font-semibold">{item.tier}</span></div>
            <div className="text-sm text-gray-200 w-full">Category: <span className="font-semibold">{item.category}</span>
            </div>

            <div className="w-full h-fit mt-4 rounded-lg text-white bar flex relative content-center border border-gray-900">
                {item.upgrade_costs ?
                        <Table className="w-full rounded-lg">
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="bg-gray-900 border-2 border-gray-900">
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}
                                                           className="text-xl text-center font-semibold text-white p-2">
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <React.Fragment key={row.id}>
                                            <TableRow data-state={row.getIsSelected() && 'selected'}
                                                      className="text-center border-2 border-gray-900">
                                                {row.getVisibleCells().map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={reactiveColumns.length}
                                            className="text-left text-lg font-semibold"
                                        >
                                            Aucun résultat.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table> :
                    <div className="text-center text-lg font-semibold">
                        No upgrade costs for this item.
                    </div>
                }
            </div>
        </>
    )
}
