'use server'
import React from 'react';
import {getItems} from "@/accessLayer/AccessLayer.Items";
import {getBazaar} from "@/accessLayer/AccessLayer.Bazaar";
import Header from "@/components/pageComponent/Header";
import ItemInfo from "@/components/itemUpgradeComponent/ItemInfo";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Item} from "@/types/itemsTypes";

export default async function ItemUpgradePage() {
    const [items, bazaar] = await Promise.all([
        getItems(),
        getBazaar(),
    ]);

    /* ----------------------------------------------------------------- */
    /* Filter items, remove duped items and sort them in alphabetical order */
    const filteredItems = items.items.filter(item => item.upgrade_costs);
    const temp: Item[] = [];
    filteredItems.map(item => {
        let duped = false;
        temp.map(tempItem => {
            if (item.name === tempItem.name) {
                duped = true;
            }
        });
        if (!duped) {
            temp.push(item)
        }
    })
    temp.sort((a, b) => a.name.localeCompare(b.name));
    /* ----------------------------------------------------------------- */

    return (
        <>
            <Header
                pageTitle={"Items upgrade"}
            />
            <main className="h-[90vh] m-2">
                <ScrollArea
                    style={{}}
                    className="max-w-3xl w-full mx-auto p-8 h-full flex flex-col text-white bg-gray-900/70 rounded-lg content-center">
                    <div>
                        <h1 className="text-3xl font-bold w-ful">Skyblock items upgrade info </h1>
                        <p className="text-gray-300 text-lg w-ful">
                            See information&#39;s about items upgrade in Skyblock !
                        </p>
                        <ItemInfo
                            items={temp}
                            bazaar={bazaar}
                        />
                    </div>

                </ScrollArea>
            </main>
        </>
    );
}