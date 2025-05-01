'use client'
import React from 'react';
import Header from "@/components/pageComponent/Header";
import {Button} from "@/components/ui/button";

export default function HomePage() {
    return (
        <>
            <Header
                pageTitle={"Home"}
            />
            <main className="h-[90vh] m-2">
                <section
                    className="max-w-3xl mx-auto p-8 space-y-6 flex flex-col mt-4 text-white bg-gray-900/70 rounded-lg content-center">
                    <h1 className="text-3xl font-bold">Welcome to my Website !</h1>
                    <div>
                        <p className="text-gray-300 text-lg">
                            Hi, I&#39;m M1k36 !
                        </p>
                        <p className="text-gray-300 text-lg">
                            This website is made with Next.js, and his here to help you with usefull features for
                            Hypixel Skyblock.
                        </p>
                        <p className="text-gray-300 text-lg">
                            Feel free to check it out !
                        </p>
                    </div>
                    <Button
                        variant="secondary"
                        size="lg"
                        className="w-full mt-2 bg-white text-black"
                        onClick={() => console.log("HEHEHA YOU SHOULD HAVE NEVER CLICK ON IT")}
                    >
                        Very useful button, trust :{'>'}
                    </Button>
                </section>
            </main>
        </>
    );
}
