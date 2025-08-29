import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Analytics} from "@vercel/analytics/react"
import Header from "@/components/pageComponent/Header";
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";

export const dynamic = "force-dynamic";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Skyblock utils",
    description: "A skyblock tools website by M1k36",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased` + "min-h-screen bg-background text-foreground h-screen"}
            >
                <Header />
                <main className="h-[90vh] m-2">
                    <ScrollArea
                        className="max-w-3xl mx-auto p-8 space-y-6 h-full flex flex-col text-white bg-gray-900/70 rounded-lg content-center">
                        {children}
                    </ScrollArea>
                </main>
                <Analytics/>
            </body>
        </html>
    );
}
