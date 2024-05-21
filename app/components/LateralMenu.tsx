'use client'
import { useState } from "react";
import Image from 'next/image'
import Logo from '@/app/images/logo.svg'
import Link from "next/link";
import { Home } from "@mui/icons-material";
import { LibraryBooks } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { Store } from "@mui/icons-material";
const LateralMenu = () => {


    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const textClass = !isOpenMenu ? 'absolute opacity-0 transition-all duration-3000 uppercase text-white' : 'absolute opacity-1 transition-all duration-1000 -ml-7 uppercase text-white'
    const iconClass = !isOpenMenu ? 'absolute left-6 text-white' : 'absolute left-6 text-white'
    return (
        <div className={!isOpenMenu ? 'fixed flex flex-col items-center max-w-20 h-screen transition-all duration-1000 bg-indigo-950 z-50' : 'flex fixed flex-col items-center max-w-52 h-full transition-all duration-1000 rounded-r bg-indigo-950 z-50'} onMouseEnter={() => { setIsOpenMenu(true) }} onMouseLeave={() => { setIsOpenMenu(false) }}>
            <div className="flex flex-col">
                <Image
                    src={Logo}
                    alt="Description of your image"
                    width={68}
                    height={68}
                    className="block w-full h-40"
                />
                <div className="w-full h-[1px] bg-white" />
            </div>

            <nav className="flex mt-10">
                <ul className="flex flex-col gap-20 w-full h-full items-center justify-center">
                    <li className='flex w-full justify-center items-center bg-white'>
                        <Link href='/' className="w-full">
                            <Home className={iconClass} />
                            <span className={textClass}>home</span>
                        </Link>
                    </li>
                    <li className='flex w-full justify-center items-center bg-white'>
                        <Link href='/UnderConstruct' className="w-full">
                            <LibraryBooks className={iconClass} />
                            <span className={textClass}>Library</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-full h-[1px] bg-white absolute bottom-32" />
            <div className="absolute bottom-20 w-full flex-col gap-20 ">
                <Link href='/UnderConstruct' className="w-full">
                    <Store className={iconClass} />
                    <span className={!isOpenMenu ? 'absolute opacity-0 transition-all duration-800 ml-5 uppercase text-white' : 'absolute opacity-1 transition-all duration-1000 ml-20 uppercase text-white'}>Store</span>
                </Link>
            </div>
        </div>
    );
}

export default LateralMenu;