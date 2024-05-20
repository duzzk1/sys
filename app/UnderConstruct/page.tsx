import Image from "next/image";
import underDev from "@/app/images/no-signal.svg"
const UnderConstruct = () => {
    return (
        <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200">
            <Image src={underDev} width={200} height={200} alt="under development" />
            <h1 className="font-bold text-xl">Página em construção!</h1>
        </div>
    );
}

export default UnderConstruct;