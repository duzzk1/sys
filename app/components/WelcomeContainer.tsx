import Image from "next/image";
import storeIcon from "@/app/images/storeIcon.png"
import Link from "next/link";
const WelcomeContainer = () => {
    return (
        <div className="flex z-1 border border-purple-900 hover:bg-gray-100 transition-all duration-500 rounded-xl w-full h-28 p-3 bg-gray-300 items-center justify-between">
            <div className="block">
                <p className="relative bottom-3 font-bold text-2xl text-purple-900">Bem vindo</p>
                <p className="relative text-sm tracking-widest">Bora emitir suas notas carai</p>
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