'use server'
import React from 'react'
import {getMayors} from "@/dal/accessLayer/AccessLayer.Mayor";
import MayorInfo from "@/components/AppsComponent/mayorComponent/MayorInfo";
import {toArray} from "uri-js/dist/esnext/util";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {CURRENT_YEAR} from "@/lib/utils";
import ElectionTimer from "@/components/AppsComponent/mayorComponent/ElectionTimer";
import SpecialMayorTimer from "@/components/AppsComponent/mayorComponent/SpecialMayorTimer";

export default async function MayorPage() {

    const election = await getMayors();
    const specialMayors = [
        {name: "Derpy", year: CURRENT_YEAR + 24 - (CURRENT_YEAR - 392) % 24},
        {name: "Jerry", year: CURRENT_YEAR + 24 - (CURRENT_YEAR - 400) % 24},
        {name: "Scorpius", year: CURRENT_YEAR + 24 - (CURRENT_YEAR - 408) % 24}
    ].sort((a, b) => a.year - b.year);

    return (
        <>
            <h1 className="text-3xl font-bold">Skyblock elections </h1>
            <p className="text-gray-300 text-lg">
                See information&#39;s about elections in Skyblock !
            </p>
            <ElectionTimer/>
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
                            {election.mayor.minister &&
                                <MayorInfo
                                    name={election.mayor.minister.name}
                                    perks={toArray(election.mayor.minister.perk)}
                                    mayorKey={election.mayor.minister.key}
                                    votes={election.mayor.election.candidates.find((candidate) => candidate.name === election.mayor.minister.name)?.votes}
                                />
                            }
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
                    <AccordionContent className="bg-gray-900 border-2 border-gray-900 rounded-lg p-4">
                        <SpecialMayorTimer
                            specialMayors={specialMayors}
                        />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    );
}