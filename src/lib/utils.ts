import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import {
    CURRENT_YEAR, ELECTION_END_SKYBLOCK_DAY,
    ELECTION_START_SKYBLOCK_DAY,
    EPOCH_START_SKYBLOCK_TIME,
    SKYBLOCK_YEAR_LENGTH
} from "@/lib/constant";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatTimeLeftWithDays(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${days}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export function getTimeFromYearDay(year: number, day: number) {
    return new Date(
        EPOCH_START_SKYBLOCK_TIME +
        (year * SKYBLOCK_YEAR_LENGTH * 20 * 60 * 1000) +
        (day * 20 * 60 * 1000)
    ).getTime() - Date.now();
}

export function getTimeLeftEndElection() {
    return getTimeFromYearDay(
        Math.round(CURRENT_YEAR),
        ELECTION_END_SKYBLOCK_DAY,
    );
}

export function getTimeLeftStartElection() {
    return getTimeFromYearDay(
        Math.round(CURRENT_YEAR),
        ELECTION_START_SKYBLOCK_DAY,
    );
}

export function getTimeLeftSpecialMayor(year: number) {
    return getTimeFromYearDay(
        year,
        ELECTION_END_SKYBLOCK_DAY,
    );
}