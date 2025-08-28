'use client'

import {Goal} from "@/types/bingoType";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {MinecraftText} from "@/components/AppsComponent/mayorComponent/MinecraftText";
import {Progress} from "@/components/ui/progress";

interface BingoGridProps {
    goals: Goal[]
}

export default function BingoGrid({goals}: BingoGridProps) {
    const rowLength = Math.sqrt(goals.length);

    const ProgressBar = ({goal}: { goal: Goal }) => {
        if (!goal.tiers) {
            return
        }
        const nextTierIndex = goal.tiers.findIndex(tier => tier > (goal.progress || 0));
        const maxValue = nextTierIndex !== -1 ? goal.tiers[nextTierIndex] : goal.tiers[goal.tiers.length - 1];
        const progressValue = ((goal.progress || 0) / maxValue) * 100;

        return (
            <>
                <div className="flex flex-row w-full items-center">
                    <Progress
                        value={progressValue}
                        className="w-1/2 border-black bg-gray-300 [&>*]:bg-green-400"
                    />
                    <p className="pl-4 text-lg text-left w-1/2">{(goal.progress || 0).toLocaleString("fr-FR")} / {maxValue.toLocaleString("fr-FR")}</p>
                </div>

                <div className="flex flex-col">
                    <MinecraftText
                        text={`§8Community Goals are collaborative - anyone with a Bingo profile can help to reach the goal!`}/>
                    <MinecraftText
                        text={`§8The more you contribute towards the goal, the more you will be rewarded!`}/>
                    {progressValue > 100 ?
                        <MinecraftText
                            text={`§aGOAL REACHED`}/>
                        :
                        <MinecraftText
                            text={`§cGOAL NOT REACHED YET`}/>
                    }
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col w-full items-center p-8 pl-4">
            {Array.from({length: rowLength}, (_, i) => (
                    <div key={i} className="flex flex-row">
                        {goals.slice(i * 5, (i + 1) * 5).map((goal, index) => (
                            goal.tiers ? (
                                <Dialog key={index}>
                                    <DialogTrigger className="rounded hover:bg-gray-700">
                                        <Image
                                            src="/img/Block_of_Emerald.png"
                                            alt={goal.name}
                                            width={50}
                                            height={50}
                                            className="m-2"
                                            objectFit="contain"
                                            objectPosition="center"
                                        />
                                    </DialogTrigger>
                                    <DialogContent
                                        className="flex flex-col mt-8 text-white bg-gray-900 border-2 border-gray-900 border-lg">
                                        <DialogHeader>
                                            <DialogTitle>{goal.name}</DialogTitle>
                                            <DialogDescription>Community Goal</DialogDescription>
                                        </DialogHeader>
                                        <MinecraftText text={goal.lore}/>
                                        <p className="mt-2 text-base">
                                            Goal Tier
                                            : {goal.tiers.findIndex(tier => tier > (goal.progress || 0)) !== -1 ? goal.tiers.findIndex(tier => tier > (goal.progress || 0)) + 1 : goal.tiers.length}
                                        </p>
                                        <ProgressBar goal={goal}/>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <Dialog key={index}>
                                    <DialogTrigger className="rounded hover:bg-gray-700">
                                        <Image
                                            src="/img/Paper.png"
                                            alt={goal.name}
                                            width={50}
                                            height={50}
                                            className="m-2"
                                            objectFit="contain"
                                            objectPosition="center"
                                        />
                                    </DialogTrigger>
                                    <DialogContent
                                        className="flex flex-col mt-8 text-white bg-gray-900 border-2 border-gray-900 border-lg">
                                        <DialogHeader>
                                            <DialogTitle>{goal.name}</DialogTitle>
                                            <DialogDescription>Personal Goal</DialogDescription>
                                        </DialogHeader>
                                        <MinecraftText text={goal.lore}/>
                                        <MinecraftText text={"Reward §6 1 Bingo Point"}/>
                                    </DialogContent>
                                </Dialog>
                            )
                        ))}
                    </div>
                )
            )}
        </div>
    )
}