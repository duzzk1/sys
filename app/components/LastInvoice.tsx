import Image from "next/image";
import storeIcon from "@/app/images/storeIcon.png"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "next/link";
import { ChevronRight, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"

const LastInvoice = (props: {
    titulo: string;
    valor: string;
    number: string;
}) => {
    return (
        <div className="flex sm:flex-row flex-col border rounded-xl p-3 bg-gray-300 w-full h-36 justify-center items-center gap-4">
            <div className="flex flex-col text-wrap text-justify items-center justify-center" >
                <p className="text-center text-nowrap">{props.titulo}</p>
                <p className="text-center">001</p>
                <p className='text-green-600 after:content-[] text-center'>R${props.valor}</p>
            </div>
            <div className="flex items-center justify-center sm:justify-end text-center font-semibold text-xs cursor-pointer sm:hover:-translate-x-2 hover:translate-x-0 transition-all duration-600 w-full">
                <Link href={'/UnderConstruct'} className="flex items-center text-center">
                <TooltipProvider delayDuration={200}>
                        <Tooltip>
                            <TooltipTrigger>
                                <Badge variant="secondary">
                                    <Info className="h-4 w-4" />
                                </Badge>      
                            </TooltipTrigger>
                            <TooltipContent side="left" sticky="always" updatePositionStrategy="optimized">
                                <p>Informações</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </Link>
            </div>
        </div>
    );
}

export default LastInvoice;
