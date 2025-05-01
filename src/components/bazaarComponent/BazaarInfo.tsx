'use client';
import {Command, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {CommandEmpty} from "cmdk";
import React, {useState} from "react";
import {BazaarResponse, Product} from "@/types/bazaarTypes";
import ProductInfo from "@/components/bazaarComponent/ProductInfo";

interface BazaarInfoProps {
    bazaar: BazaarResponse;
}

export default function BazaarInfo({bazaar}: BazaarInfoProps) {
    const [listOpen, setListOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Product | null>(null);

    const formatKeyName = (input: string): string => {
        return input
            .toLowerCase()
            .split("_")
            .map((word, index) => {
                return index === 0
                    ? word.charAt(0).toUpperCase() + word.slice(1)
                    : word;
            })
            .join(" ");
    }

    return (
        <>
            <Command className="h-fit w-full mt-4 border border-gray-900 bg-gray-900 text-white">
                <CommandInput
                    className="w-full"
                    placeholder="Search an item..."
                    onFocus={() => setListOpen(true)}
                    onBlur={() => setListOpen(false)}
                />
                {listOpen &&
                    <CommandList className="bg-gray-900 border border-gray-900  [&::-webkit-scrollbar]:w-0">
                        <CommandEmpty className="text-center m-2">
                            No results found.
                        </CommandEmpty>
                        <CommandGroup heading="Items">
                            {Object.keys(bazaar.products).map((productKey, index) => (
                                <CommandItem
                                    key={index}
                                    onMouseDown={() => {
                                        setSelectedItem(bazaar.products[productKey]);
                                        setListOpen(false);
                                    }}
                                    className="text-white"
                                >
                                    {formatKeyName(bazaar.products[productKey].product_id)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                }
            </Command>
            {selectedItem ?
                <>
                    <ProductInfo
                        product={selectedItem}
                    />
                </> :
                <section
                    className="mt-4 mx-auto bg-gray-900 text-white p-4 rounded-lg shadow-md space-y-4 h-60 text-center flex flex-col items-center justify-center">
                    <h3 className="text-xl font-bold">No item selected</h3>
                    <p className="text-xs text-gray-400">Select an item to see informations about it</p>
                </section>
            }
        </>
    );
}