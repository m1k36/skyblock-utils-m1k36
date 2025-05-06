'use client'
import React from 'react'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {AlignJustify} from 'lucide-react';

interface Props {
    pageTitle: string;
}

export default function Header({pageTitle}: Props) {
    return (
        <>
            <header className="flex items-center w-full justify-between px-4 py-3 text-white bg-gray-900">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost">
                            <AlignJustify/>
                            Menu
                        </Button>
                    </SheetTrigger>
                    <SheetTitle className="text-lg font-semibold tracking-tight text-white">
                        {pageTitle}
                    </SheetTitle>
                    <SheetContent side="left" className="text-white bg-gray-900 border-gray-900">
                        <nav className="flex flex-col space-y-4 m-6 mt-10">
                            <Link href="/public" className="text-2xl font-medium hover:underline">Home</Link>
                            <Link href="/mayor" className="text-2xl font-medium hover:underline">Mayor</Link>
                            <Link href="/items-upgrade" className="text-2xl font-medium hover:underline">Items upgrade</Link>
                            <Link href="/bazaar" className="text-2xl font-medium hover:underline">Bazaar</Link>
                            <Link href="/bingo" className="text-2xl font-medium hover:underline">Bingo</Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    );
}