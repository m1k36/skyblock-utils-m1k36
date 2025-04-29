'use server'
import React from 'react'
import Header from "@/components/Header";
import {getMayors} from "@/accessLayer/AccessLayer.Mayor";
import MayorInfo from "@/components/MayorInfo";
import {toArray} from "uri-js/dist/esnext/util";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {ScrollArea} from "@/components/ui/scroll-area";

export default async function MayorPage() {
    const election = await getMayors();
    const currentYear: number = election.mayor.election.year;
    const specialMayors = [
        {name: "Jerry", year: currentYear + 24 - (currentYear - 392) % 24},
        {name: "Scorpius", year: currentYear + 24 - (currentYear - 400) % 24},
        {name: "Derpy", year: currentYear + 24 - (currentYear - 408) % 24}
    ]

    return (
        <>
            <Header
                pageTitle={"Mayor stats"}
            />
            <main className="h-[90vh] m-2">
                <ScrollArea className="max-w-3xl mx-auto p-8 space-y-6 h-full flex flex-col text-white bg-gray-900/70 rounded-lg content-center">
                    <h1 className="text-3xl font-bold">Skyblock elections </h1>
                    <p className="text-gray-300 text-lg">
                        See information&#39;s about elections in Skyblock !
                    </p>
                    <Accordion type="multiple">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h2 className="text-xl font-bold">Mayor & Minister</h2>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <MayorInfo
                                        name={election.mayor.name}
                                        perks={election.mayor.perks}
                                        mayorKey={election.mayor.key}
                                        votes={election.mayor.election.candidates.find((candidate) => candidate.name === election.mayor.name)?.votes}
                                    />
                                    <MayorInfo
                                        name={election.mayor.minister.name}
                                        perks={toArray(election.mayor.minister.perk)}
                                        mayorKey={election.mayor.minister.key}
                                        votes={election.mayor.election.candidates.find((candidate) => candidate.name === election.mayor.minister.name)?.votes}
                                    />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <h2 className="text-xl font-bold">Last election</h2>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    {election.mayor.election.candidates.map((candidate, index) => (
                                        <MayorInfo
                                            key={index}
                                            name={candidate.name}
                                            perks={candidate.perks}
                                            mayorKey={candidate.key}
                                            votes={candidate.votes}
                                        />
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        {election.current &&
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <h2 className="text-xl font-bold">Current election</h2>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        {election.current.candidates.map((candidate, index) => (
                                            <MayorInfo
                                                key={index}
                                                name={candidate.name}
                                                perks={candidate.perks}
                                                mayorKey={candidate.key}
                                                votes={candidate.votes}
                                            />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        }
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <h2 className="text-xl font-bold">Special mayor</h2>
                            </AccordionTrigger>
                            <AccordionContent>
                                {specialMayors.map((specialMayor, index) => (
                                    <div key={index}>
                                        <h3 className="font-semibold text-base"><span
                                            className="font-bold">{specialMayor.name}</span> : Year {specialMayor.year}
                                        </h3>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </ScrollArea>
            </main>
        </>
    );
}