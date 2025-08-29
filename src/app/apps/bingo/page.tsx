'use server'

import {getBingo} from "@/dal/accessLayer/AccessLayer.Bingo";
import React from "react";
import BingoInfo from "@/components/AppsComponent/bingoComponent/BingoInfo";
import BingoGrid from "@/components/AppsComponent/bingoComponent/BingoGrid";

export default async function Page() {
    const bingo = await getBingo();

    return (
        <>
            <h1 className="text-3xl font-bold w-ful">Skyblock Bingo event </h1>
            <p className="text-gray-300 text-lg w-ful">
                See information&#39;s about bingo event in Skyblock !
            </p>
            <div className="flex flex-col p-4 pt-6 mt-8 bg-gray-900 text-white border-1 rounded-lg">
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
        </>
    );
}