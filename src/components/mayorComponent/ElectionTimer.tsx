'use client'
import React, {useEffect, useState} from 'react'
import {COLOR_MAP, formatTimeLeftWithDays, getTimeLeftEndElection, getTimeStartEndElection,} from "@/lib/utils";

export default function ElectionTimer() {

    const [timeLeftEndElection, setTimeLeftEndElection] = useState(0);
    const [timeLeftStartElection, setTimeLeftStartElection] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTimeLeftEndElection(getTimeLeftEndElection());
            setTimeLeftStartElection(getTimeStartEndElection());
        }, 1000);
    }, [])

    return (
        <>
            {timeLeftEndElection < timeLeftStartElection ?
                <p className="text-lg"><span className={COLOR_MAP['6']}>Time left: </span><span
                    className={COLOR_MAP['a']}>{formatTimeLeftWithDays(timeLeftEndElection)}</span></p>
                :
                <p className="text-lg"><span className={COLOR_MAP['6']}>Start in: </span><span
                    className={COLOR_MAP['a']}>{formatTimeLeftWithDays(timeLeftStartElection)}</span></p>
            }
        </>
    );
}