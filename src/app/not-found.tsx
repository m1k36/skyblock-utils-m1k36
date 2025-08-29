'use client'
import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";

export default function Custom404() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-2">
            <h1 className="text-5xl font-bold mb-2">404</h1>
            <p className="text-lg text-white mb-6">
                This page does not exist !
            </p>
            <Button
                variant="secondary"
                size="lg"
                className="w-full mt-2 bg-white text-black"
                onClick={() => {
                    if (router)
                        router.push("https://www.youtube.com/watch?v=oHC1230OpOg");
                }}
            >
                GO HOME NOW !!!
            </Button>
        </div>
    );
}