'use client'
import {ColumnDef} from "@tanstack/react-table"
import {Item, SalvageElement} from '@/types/itemsTypes'
import {BazaarResponse} from "@/types/bazaarTypes";
import {DollarSign as Coin} from "lucide-react";

export function columns(bazaar: BazaarResponse, item: Item): ColumnDef<SalvageElement[]>[] {

    const handleCost = (elements: SalvageElement[]): number => {
        let cost = 0;
        elements.map(element => {
            const amount = element.amount || 1;

            if (element.type === "ITEM" && element.item_id) {
                cost += getItemBazaarPrice(element.item_id) * amount;
            } else if (element.type === "ESSENCE" && element.essence_type) {
                cost += getItemBazaarPrice("ESSENCE_" + element.essence_type) * amount;
            }
        });
        return cost;
    }

    const getItemBazaarPrice = (itemId: string): number => {
        return bazaar.products[itemId].buy_summary[0].pricePerUnit;
    }

    const getItemAndAmount = (tier: number): { name: string, amount: number }[] => {
        const itemListe: { name: string, amount: number }[] = [];

        if (item.upgrade_costs) {
            item.upgrade_costs.map((cost, index) => {
                if (index <= tier) {
                    cost.map((element) => {
                        let key: string | null = null;

                        if (element.type === "ITEM" && element.item_id) {
                            key = element.item_id;
                        } else if (element.type === "ESSENCE" && element.essence_type) {
                            key = "ESSENCE_" + element.essence_type;
                        }

                        if (key) {
                            const existing = itemListe.find(e => e.name === key);
                            if (existing) {
                                existing.amount += element.amount || 1;
                            } else {
                                itemListe.push({ name: key, amount: element.amount || 1 });
                            }
                        }
                    });
                }
            });
        }

        return itemListe;
    }

    const handleTotalCost = (tier: number): number => {
        let totalCost = 0;
        if (item.upgrade_costs) {
            item.upgrade_costs.map((cost, index) => {
                if (index <= tier) {
                    totalCost += handleCost(cost);
                }
            })
        }
        return totalCost;
    }

    const TotalAmount = ({tier}: { tier: number }) => {
        const itemListe = getItemAndAmount(tier);
        return (
            <>
                {itemListe.map((item, index) => (
                    <p key={index}>{item.amount.toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                ))}
            </>
        );
    }

    const TotalItem = ({tier}: { tier: number }) => {
        const itemListe = getItemAndAmount(tier);
        return (
            <>
                {itemListe.map((item, index) => (
                    <p key={index}>{item.name}</p>
                ))}
            </>
        );
    }

    return [
        {
            accessorKey: "Tier",
            header: "Tier",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-col">
                    <p>{row.index + 1}</p>
                </div>
            ),
        },
        {
            accessorKey: "Item",
            header: "Item",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-col">{row.original.map((cost, index) => {
                    if (cost.type === "ITEM")
                        return (
                            <p key={index}>{cost.item_id}</p>
                        )
                    if (cost.type === "ESSENCE")
                        return (
                            <p key={index}>{cost.essence_type} {cost.type}</p>
                        )
                })}</div>
            ),
        },
        {
            accessorKey: "Amount",
            header: "Amount",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-col">{row.original.map((cost, index) => {
                    return (
                        <p key={index}>{cost.amount?.toLocaleString("fr-FR").replace(/\u202F/g, " ")}</p>
                    )
                })}</div>
            ),
        },
        {
            accessorKey: "Cost",
            header: "Cost",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-row font-semibold justify-center">
                    <p>{(handleCost(row.original)).toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                    <Coin size={17}/>
                </div>
            ),
        },
        {
            accessorKey: "TotalItem",
            header: "Total Item",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-col justify-center">
                    <TotalItem
                        tier={row.index}
                    />
                </div>
            ),
        },
        {
            accessorKey: "TotalAmount",
            header: "Total Amount",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-col justify-center">
                    <TotalAmount
                        tier={row.index}
                    />
                </div>
            ),
        },
        {
            accessorKey: "TotalCost",
            header: "Total Cost",
            cell: ({row}) => (
                <div className="uppercase text-sm flex flex-row font-semibold justify-center">
                    <p>{(handleTotalCost(row.index)).toLocaleString("fr-FR").split(',')[0].replace(/\u202F/g, " ")}</p>
                    <Coin size={17}/>
                </div>
            ),
        },
    ]
}