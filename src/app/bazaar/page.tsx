'use server';

import {getBazaar} from "@/accessLayer/AccessLayer.Bazaar";
import Header from "@/components/pageComponent/Header";
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import BazaarInfo from "@/components/bazaarComponent/BazaarInfo";

export default async function BazaarPage() {
    const bazaar = await getBazaar();

    return (
        <>
            <Header
                pageTitle={"Bazaar"}
            />
            <main className="h-[90vh] m-2">
                <ScrollArea
                    className="max-w-3xl w-full mx-auto p-8 h-full flex flex-col text-white bg-gray-900/70 rounded-lg content-center">
                    <div>
                        <h1 className="text-3xl font-bold w-ful">Skyblock bazaar info </h1>
                        <p className="text-gray-300 text-lg w-ful">
                            See information&#39;s about bazaar in Skyblock !
                        </p>
                        <BazaarInfo
                            bazaar={bazaar}
                        />
                    </div>
                </ScrollArea>
            </main>
        </>
    );
}