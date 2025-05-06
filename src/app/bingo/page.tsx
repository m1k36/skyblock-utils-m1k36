'use server'

import {getBingo} from "@/accessLayer/AccessLayer.Bingo";
import Header from "@/components/pageComponent/Header";
import {ScrollArea} from "@/components/ui/scroll-area";
import React from "react";
import BingoInfo from "@/components/bingoComponent/BingoInfo";
import BingoGrid from "@/components/bingoComponent/BingoGrid";

export default async function Page() {
    const bingo = await getBingo();

    return (
        <>
            <Header
                pageTitle={"Current bingo event"}
            />
            <main className="h-[90vh] m-2">
                <ScrollArea
                    className="max-w-3xl w-full mx-auto p-8 h-full flex flex-col text-white bg-gray-900/70 rounded-lg content-center">
                    <div>
                        <h1 className="text-3xl font-bold w-ful">Skyblock Bingo event </h1>
                        <p className="text-gray-300 text-lg w-ful">
                            See information&#39;s about bingo event in Skyblock !
                        </p>
                        <div className="flex flex-col mt-8 text-white bg-gray-900 border-2 border-gray-900 rounded-lg">
                            <BingoInfo
                                name={bingo.name}
                                modifier={bingo.modifier}
                                start={bingo.start}
                                end={bingo.end}
                            />
                            <BingoGrid
                                goals={bingo.goals}
                            />
                        </div>
                    </div>
                </ScrollArea>
            </main>
        </>
    );
}