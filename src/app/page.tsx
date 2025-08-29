'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <>
            <main className="h-[90vh]">
                <section
                    className="max-w-3xl mx-auto space-y-6 flex flex-col mt-4 text-white rounded-lg content-center">
                    <h1 className="text-3xl font-bold">Welcome to my Website !</h1>
                    <div>
                        <p className="text-gray-300 text-lg">
                            Hi, I&#39;m M1k36 !
                        </p>
                        <p className="text-gray-300 text-lg">
                            This website his here to help you with usefull features for
                            Hypixel Skyblock. I&#39;m currently working on it, so expect some new features soon !.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Feel free to check it out !
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-300 text-lg">
                            If you find any bugs, notice any weird behavior, or simply want to suggest something for the
                            website (UI improvements, features, etc.), feel free to message me on Discord: M1k36#7266
                        </p>
                    </div>
                </section>
                <section
                    className="max-w-3xl mx-auto pt-0 flex flex-col text-white rounded-lg content-center">
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full mt-2 bg-white text-black"
                        onClick={() => {
                            if (router)
                                router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                        }}
                    >
                        Very useful button, trust :{'>'}
                    </Button>
                </section>
            </main>
        </>
    );
}
