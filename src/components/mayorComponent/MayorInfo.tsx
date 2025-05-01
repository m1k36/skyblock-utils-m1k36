'use client'
import React from 'react'
import {CandidatePerk} from "@/types/electionTypes";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {MinecraftText} from "@/components/mayorComponent/MinecraftText";
import {Star} from "lucide-react";

interface Props {
    mayorKey: string,
    name: string,
    perks: CandidatePerk[],
    votes?: number,
}

export default function MayorInfo({mayorKey, name, perks, votes}: Props) {
    return (
        <>
            <Card className="w-full mb-3 font-mono b-3 text-white bg-gray-900 border-2 border-gray-900" key={mayorKey}>
                <CardTitle className="font-semibold tracking-tight text-center text-3xl">
                    {name}
                </CardTitle>
                <CardContent className="space-y-4">
                    {votes &&
                        <div className="mb-8">
                            <h3 className="text-md font-bold">Number of votes :</h3>
                            <p className="text-base text-gray-300">{votes.toLocaleString("fr-FR")}</p>
                        </div>
                    }
                    {perks.map((perk, index) => (
                        <div key={index} className="border-b border-gray-700 pb-2 last:border-b-0">
                            <h3 className="text-md font-semibold flex">{perk.name} {perk.minister &&
                                <Star className="ml-2" style={{color: "orange", width: 20, height: 20}}/>}</h3>
                            <MinecraftText
                                text={perk.description}
                                className="text-base text-muted-foreground"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    );
}