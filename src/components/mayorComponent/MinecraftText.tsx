'use client'
import React, {JSX} from 'react'
import {COLOR_MAP} from "@/lib/utils";

interface MinecraftTextProps {
    text: string
    className?: string
}

export const MinecraftText: React.FC<MinecraftTextProps> = ({ text, className = '' }) => {
    const parts = text.split(/§([0-9a-f])/g)
    let currentColor = 'text-gray-400'
    const styledElements: JSX.Element[] = []

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            styledElements.push(
                <span key={i} className={currentColor}>
          {parts[i]}
        </span>
            )
        } else {
            currentColor = COLOR_MAP[parts[i]] || currentColor
        }
    }

    return <span className={className}>{styledElements}</span>
}