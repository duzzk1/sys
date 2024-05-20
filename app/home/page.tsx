import { Search } from "@mui/icons-material";
import SearchInput from "../components/SearchInput";
import PhoneIcon from "@/app/images/phoneIcon.png"
import supportIcon from "@/app/images/supportIcon.svg"
import Image from "next/image";

const Home = () => {
    return (
        <div className="flex flex-col w-full h-full items-center p-2 ml-20">
            <div className="w-full h-full">
                <SearchInput />
                <div className="w-full h-[1px] bg-gray-400" />
                <div className="flex flex-col items-center text-center gap-20 mt-10">
                    <div className="flex flex-col items-center text-center gap-20">
                        <Image src={PhoneIcon} width={140} height={140} alt="PHONE ICON" className="animate-pulse"/>
                        <p className="w-1/2 text-center sm:text-justify">Imagine emitir notas fiscais em menos de 2 minutos, com segurança e confiabilidade. Isso é possível com o UniSoap, o sistema de emissão de notas fiscais tecnológico mais rápido e eficiente do mercado.</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-20  transition-all duration-1000">
                        <Image src={supportIcon} width={140} height={140} alt="SUPPORT ICON" className="animate-bounce"/>
                        <p className="w-1/2 text-center sm:text-justify">Nossa equipe de especialistas em emissões de notas fiscais está sempre pronta para ajudar. 95% dos clientes avaliam o suporte como ótimo ou excelente.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;