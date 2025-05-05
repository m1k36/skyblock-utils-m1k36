import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/* --- CONSTANT --- */
export const EPOCH_START_SKYBLOCK_TIME = 1560275700000;
export const SKYBLOCK_YEAR_LENGTH = 372;
export const ELECTION_END_SKYBLOCK_DAY = 88;
export const ELECTION_START_SKYBLOCK_DAY = 150;
export const CURRENT_YEAR = parseInt(((Date.now() - EPOCH_START_SKYBLOCK_TIME) / SKYBLOCK_YEAR_LENGTH / 20 / 60 / 1000).toFixed(0));
export const COLOR_MAP: Record<string, string> = {
  '0': 'text-black',
  '1': 'text-blue-900',
  '2': 'text-green-900',
  '3': 'text-cyan-800',
  '4': 'text-red-900',
  '5': 'text-purple-700',
  '6': 'text-yellow-500',
  '7': 'text-gray-400',
  '8': 'text-gray-600',
  '9': 'text-blue-600',
  'a': 'text-green-400',
  'b': 'text-cyan-400',
  'c': 'text-red-500',
  'd': 'text-pink-400',
  'e': 'text-yellow-300',
  'f': 'text-white',
}

/* --- FUNCTION --- */
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
  return new Date(EPOCH_START_SKYBLOCK_TIME + year * SKYBLOCK_YEAR_LENGTH * 20 * 60 * 1000 + day * 20 * 60 * 1000).getTime() - Date.now();
}

export function getTimeLeftEndElection(){
  return getTimeFromYearDay(CURRENT_YEAR, ELECTION_END_SKYBLOCK_DAY);
}

export function getTimeStartEndElection(){
  return getTimeFromYearDay(CURRENT_YEAR, ELECTION_START_SKYBLOCK_DAY);
}

export function getTimeLeftSpecialMayor(year: number) {
  return getTimeFromYearDay(year, ELECTION_END_SKYBLOCK_DAY);
}