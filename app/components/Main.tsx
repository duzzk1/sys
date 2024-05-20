import Image from "next/image";
import underDev from "@/app/images/no-signal.svg"
const Main = () => {
    return (
        <div className="flex flex-col w-screen ml-20 p-20 justify-center items-center">
            <Image src={underDev} width={400} height={400} alt="under development" />
            <h1 className="font-bold text-2xl">Página em construção!</h1>
        </div>
    );
}

export default Main;