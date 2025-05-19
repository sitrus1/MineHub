import Link from "next/link"
import React from "react"
import logo from '@/img/logo.png'
import Image from "next/image"
import { getChapters } from "@/hooks/getChapters"
import { white, whiteDarker } from "@/configs/colors"

type chapterT = {
    name: string,
    id: string
}

export const Header: React.FC = async () => {
    const chapters = await getChapters()
    return (
        <header className={`z-[999] fixed left-0 right-0 top-0 py-[12px] border-b backdrop-blur-[10px]`} style={{ backgroundColor: "#ffffff45", borderColor: white }}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href={'/'}>
                        <Image priority width={'200'} src={logo} alt="" />
                    </Link>
                    <ul className="flex items-center gap-[32px]">
                        {
                            chapters.map((chapter: chapterT) => (
                                <li key={chapter.id} className={`font-medium text-shadow-md transition opacity-80 hover:opacity-100`} style={{ color: white }}>
                                    <Link href={`/${chapter.id}`}>
                                        {chapter.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}