import Image from "next/image";
import storeIcon from "@/app/images/storeIcon.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";



const LastInvoices = (props: {
    titulo: string;
    valor: string;
}) => {
    return (
        <div className="flex border rounded-xl p-3 bg-gray-300 items-center w-1/2 h-36 justify-between">
            <div className="text-wrap text-justify">
                <p>{props.titulo}</p>
                <p className="text-green-600">R${props.valor}</p>
            </div>
            <div className="w-1/4 flex items-center text-center font-semibold text-xs cursor-pointer hover:translate-x-2 transition-all duration-600">
                <Link href={'/UnderConstruct'} className="flex items-center text-center">
                    <span className="hidden md:block text-nowrap">Ver mais</span>
                    <ArrowForwardIosIcon/>
                </Link>
            </div>
        </div>
    );
}

export default LastInvoices;
