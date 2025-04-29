'use client'
import React, {JSX} from 'react'

interface MinecraftTextProps {
    text: string
    className?: string
}

const COLOR_MAP: Record<string, string> = {
    '0': 'text-black',
    '1': 'text-blue-900',
    '2': 'text-green-900',
    '3': 'text-cyan-800',
    '4': 'text-red-900',
    '5': 'text-purple-700',
    '6': 'text-yellow-500',
    '7': 'text-gray-400',
    '8': 'text-gray-600',
    '9': 'text-blue-600',
    'a': 'text-green-400',
    'b': 'text-cyan-400',
    'c': 'text-red-500',
    'd': 'text-pink-400',
    'e': 'text-yellow-300',
    'f': 'text-white',
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