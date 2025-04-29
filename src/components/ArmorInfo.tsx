'use client'
import React from 'react';
import {BazaarResponse} from "@/types/bazaarTypes";
import {Item} from "@/types/itemsTypes";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

interface Props {
    items: Item[];
    bazaar: BazaarResponse;
}

export default function ArmorInfo({items, bazaar}: Props) {
    console.log(items);
    console.log(bazaar);
    // const [isFiltered, setIsFiltered] = useState(false);
    // const [crimsonArmor, setCrimsonArmor] = useState<Item[]>([]);
    // const [auroraArmor, setAuroraArmor] = useState<Item[]>([]);
    // const [terrorArmor, setTerrorArmor] = useState<Item[]>([]);
    // const [hollowArmor, setHollowArmor] = useState<Item[]>([]);
    // const [fervorArmor, setFervorArmor] = useState<Item[]>([]);
    //
    // useEffect(() => {
    //     const handleFilter = () => {
    //         const crimson: Item[] = []
    //         const aurora: Item[] = []
    //         const terror: Item[] = []
    //         const hollow: Item[] = []
    //         const fervor: Item[] = []
    //
    //         items.forEach(item => {
    //             if (item.category && [Category.Boots, Category.Helmet, Category.Chestplate, Category.Leggings].includes(item.category)) {
    //                 if (item.name.includes("Crimson")) {
    //                     crimson.push(item);
    //                 } else if (item.name.includes("Aurora")) {
    //                     aurora.push(item);
    //                 } else if (item.name.includes("Terror")) {
    //                     terror.push(item);
    //                 } else if (item.name.includes("Hollow")) {
    //                     hollow.push(item);
    //                 } else if (item.name.includes("Fervor")) {
    //                     fervor.push(item);
    //                 }
    //             }
    //         });
    //
    //         setCrimsonArmor(crimson);
    //         setAuroraArmor(aurora);
    //         setTerrorArmor(terror);
    //         setHollowArmor(hollow);
    //         setFervorArmor(fervor);
    //         setIsFiltered(true);
    //     };
    //
    //     handleFilter();
    // }, [items]);


    return (
        <>
            <Card
                className="max-w-3xl mx-auto p-8 space-y-6 h-full flex flex-col text-white bg-gray-900/70 rounded-lg border-0 content-center">
                <CardTitle className="font-bold tracking-tight text-center text-3xl">
                    Kuudra armor helper
                </CardTitle>
                <CardContent className="space-y-4">
                    <div>
                        <p className="text-gray-300 text-lg">Get useful information on upgrading your armor through defferent tier !</p>
                    </div>
                    <Tabs defaultValue="Crimson" className="w-full">
                        <TabsList className="flex justify-center w-full">
                            <TabsTrigger value="Crimson">Crimson</TabsTrigger>
                            <TabsTrigger value="Aurora">Aurora</TabsTrigger>
                            <TabsTrigger value="Terror">Terror</TabsTrigger>
                            <TabsTrigger value="Hollow">Hollow</TabsTrigger>
                            <TabsTrigger value="Fervor">Fervor</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </CardContent>
            </Card>
            {/*
                isFiltered ?
                <section>
                    <div>
                        {crimsonArmor.map((item, index) => (
                            <p key={index}>{item.name}</p>
                        ))}
                    </div>
                </section>
                :
                <p>Loading ...</p>
                */
            }
        </>
    );
}