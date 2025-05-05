'use client'
import React, {useEffect, useState} from 'react'
import {
    formatTimeLeftWithDays,
    getTimeLeftSpecialMayor,
} from "@/lib/utils";

interface SpecialMayorTimerProps {
    specialMayors: { name: string, year: number }[];
}

export default function SpecialMayorTimer({specialMayors}: SpecialMayorTimerProps) {

    const [specialMayorsTimer, setSpecialMayorsTimer] = useState<number[]>(
        specialMayors.map(specialMayor => getTimeLeftSpecialMayor(specialMayor.year+1))
    );

    useEffect(() => {
        setInterval(() => {
            setSpecialMayorsTimer(specialMayors.map(specialMayor => getTimeLeftSpecialMayor(specialMayor.year+1)));
        }, 1000);
    }, [specialMayors])

    return (
        <>
            {specialMayors.map((specialMayor, index) => (
                <div key={index} className="flex flex-row">
                    <h3 className="font-semibold text-base text-left w-1/2"><span
                        className="font-bold">{specialMayor.name}</span> :
                        Year {specialMayor.year}
                    </h3>
                    <p className="text-base text-gray-300 text-right w-1/2">{formatTimeLeftWithDays(specialMayorsTimer[index])}</p>
                </div>
            ))}
        </>
    );
}