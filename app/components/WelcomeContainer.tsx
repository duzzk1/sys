import Image from "next/image";
import storeIcon from "@/app/images/storeIcon.png"
import Link from "next/link";
const WelcomeContainer = () => {
    return (
        <div className="container flex z-1 border border-purple-900 transition-all duration-500 rounded-xl w-full h-28  bg-indigo-950 items-center justify-between">
            <div className="block">
                <p className="relative bottom-3 font-bold text-2xl text-white">Bem vindo</p>
                <p className="relative text-sm tracking-widest text-white">Bora emitir suas notas carai</p>
            </div>
            <div className="w-20">
                <Link href={'/UnderConstruct'}>
                    <Image src={storeIcon} width={300} height={300} alt="image notes" />
                </Link>
            </div>
        </div>
    );
}

export default WelcomeContainer;