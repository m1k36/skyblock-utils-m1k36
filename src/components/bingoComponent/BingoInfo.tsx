'use client'

import {COLOR_MAP} from "@/lib/utils";

interface BingoInfoProps {
    name: string;
    modifier: string;
    start: number;
    end: number;
}

export default function BingoInfo({name, modifier, start, end}: BingoInfoProps) {
    return (
        <div className="flex flex-col text-center">
            <h3 className="text-gray-300 text-2xl font-semibold w-full">
                {name}
            </h3>
            <p className="text-gray-400 text-base w-ful">
                Modifier : {modifier}
            </p>
            <div className="flex flex-row justify-center w-full">
                <p className="text-gray-300 text-base w-1/2">
                    <span className={COLOR_MAP['6']}>Start :</span> <span className={COLOR_MAP['a']}>{new Date(start).toLocaleDateString()} {new Date(start).toLocaleTimeString()}</span>
                </p>
                <p className="text-gray-300 text-base w-1/2">
                    <span className={COLOR_MAP['6']}>End :</span> <span className={COLOR_MAP['a']}>{new Date(end).toLocaleDateString()} {new Date(end).toLocaleTimeString()}</span>
                </p>
            </div>
        </div>
    )
}