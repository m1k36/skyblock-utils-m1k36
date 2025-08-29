export const EPOCH_START_SKYBLOCK_TIME = 1560275700000;
export const SKYBLOCK_YEAR_LENGTH = 372;
export const ELECTION_END_SKYBLOCK_DAY = 88;
export const ELECTION_START_SKYBLOCK_DAY = 181;
export const CURRENT_YEAR = (
    ( Date.now() - EPOCH_START_SKYBLOCK_TIME ) / SKYBLOCK_YEAR_LENGTH / 20 / 60 / 1000
);
export const CURRENT_DAY = Math.round(
    (
        (Date.now() - EPOCH_START_SKYBLOCK_TIME) / 20 / 60 / 1000
    ) % SKYBLOCK_YEAR_LENGTH
);
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

export const app_arch: { title: string; link: string; }[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Mayor",
        link: "/apps/mayor",
    },
    {
        title: "Bingo",
        link: "/apps/bingo",
    },
    {
        title: "Shard",
        link: "/apps/shard",
    },
]


export const skyblock_shards = {}