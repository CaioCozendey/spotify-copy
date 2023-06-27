import Image from 'next/image'
import React from 'react'

export default function AlbumCards2() {
    return (
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10' >
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt="Capa do Album A Night At The Opera" />
            <strong className='font-semibold'> Daily Mix 1 </strong>
            <span className='text-sm text-zinc-400'> Wallows, COIN, girl in red and more </span>
        </a>
    );
}