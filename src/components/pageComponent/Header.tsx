'use client'
import React from 'react'
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {AlignJustify} from 'lucide-react';
import {app_arch} from "@/lib/constant";
import Logo from "@/components/pageComponent/logo";

export default function Header() {
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
                        <Logo />
                    </SheetTitle>
                    <SheetContent side="left" className="text-white bg-gray-900 border-gray-900">
                        <nav className="flex flex-col space-y-4 m-6 mt-10">
                            {
                                app_arch.map((item, index) => (
                                    <Link key={index} href={item.link} className="text-2xl font-medium hover:underline">{item.title}</Link>
                                ))
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    );
}