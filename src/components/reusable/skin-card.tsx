import { darkBlue, grayWhiter, white, whiteDarker } from "@/configs/colors";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string,
    image: any,
    id: string
}

export const SkinCard: React.FC<Props> = ({title, image, id}: Props) => {
    return(
        <Link href={`/skins/${id}`}>
            <div className="w-[250px] rounded-[20px] transition hover:rotate-3 hover:scale-95" style={{backgroundColor: whiteDarker}}>
                <div className="w-[250px] h-[300px] flex justify-center items-center rounded-[20px]" style={{backgroundColor: grayWhiter}}>
                    <Image priority className="w-full" src={image} alt={`minecraft skin, named ${title}`}/>
                </div>
                <div className="px-[20px] py-[5px]">
                    <h3 className="text-[20px] font-bold text-center" style={{color: darkBlue}}>{title}</h3>
                </div>
            </div>
        </Link>
    )
}