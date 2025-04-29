'use server'
import React from 'react';
import {getItems} from "@/accessLayer/AccessLayer.Items";
import {getBazaar} from "@/accessLayer/AccessLayer.Bazaar";
import ArmorInfo from "@/components/ArmorInfo";
import Header from "@/components/Header";

export default async function MayorPage() {
    const [items, bazaar] = await Promise.all([
        getItems(),
        getBazaar(),
    ]);

    return (
        <>
            <Header
                pageTitle={"Kuudra helper"}
            />
            <main className="h-[90vh] m-2">
                <ArmorInfo
                    items={items.items}
                    bazaar={bazaar}
                />
            </main>
        </>
    );
}