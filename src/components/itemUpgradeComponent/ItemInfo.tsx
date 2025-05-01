'use client'
import React, {useState} from 'react';
import {BazaarResponse} from "@/types/bazaarTypes";
import {Item} from "@/types/itemsTypes";
import {
    Command,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {CommandEmpty} from "cmdk";
import DataTable from "@/components/itemUpgradeComponent/DataTable";

interface Props {
    items: Item[];
    bazaar: BazaarResponse;
}

export default function ItemInfo({items, bazaar}: Props) {

    const [listOpen, setListOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    return (
        <>
            <Command className="h-fit w-full mt-4 border border-gray-800 bg-gray-800 text-white">
                <CommandInput
                    className="w-full"
                    placeholder="Type an item..."
                    onFocus={() => setListOpen(true)}
                    onBlur={() => setListOpen(false)}
                />
                {listOpen &&
                    <CommandList className="bg-gray-800 border border-gray-800  [&::-webkit-scrollbar]:w-0">
                        <CommandEmpty className="text-center m-2">
                            No results found.
                        </CommandEmpty>
                        <CommandGroup heading="Items">
                            {items.map((item, index) => (
                                <CommandItem
                                    key={index}
                                    onMouseDown={() => {
                                        setSelectedItem(item);
                                        setListOpen(false);
                                    }}
                                    className="text-white"
                                >
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                }
            </Command>
            {selectedItem !== null &&
                <DataTable
                    item={selectedItem}
                    bazaar={bazaar}
                />
            }
        </>
    );
}