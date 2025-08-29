'use client'
import React, {useEffect, useState} from 'react'
import {
    formatTimeLeftWithDays,
    getTimeLeftEndElection,
    getTimeLeftStartElection,
} from "@/lib/utils";
import {
    COLOR_MAP,
    CURRENT_DAY,
    ELECTION_END_SKYBLOCK_DAY,
    ELECTION_START_SKYBLOCK_DAY
} from "@/lib/constant";

export default function ElectionTimer() {

    const [timeLeftEndElection, setTimeLeftEndElection] = useState(0);
    const [timeLeftStartElection, setTimeLeftStartElection] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTimeLeftEndElection(getTimeLeftEndElection());
            setTimeLeftStartElection(getTimeLeftStartElection());
        }, 1000);
    }, [])

    return (
        <>
            {CURRENT_DAY > ELECTION_END_SKYBLOCK_DAY && CURRENT_DAY < ELECTION_START_SKYBLOCK_DAY ?
                <p className="text-lg"><span className={COLOR_MAP['6']}>Start in: </span><span
                    className={COLOR_MAP['a']}>{formatTimeLeftWithDays(timeLeftStartElection)}</span></p>
                :
                <p className="text-lg"><span className={COLOR_MAP['6']}>Time left: </span><span
                    className={COLOR_MAP['a']}>{formatTimeLeftWithDays(timeLeftEndElection)}</span></p>
            }
        </>
    );
}