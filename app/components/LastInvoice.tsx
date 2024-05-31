import { Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import Link from "next/link";

const LastInvoice = (props: {
    titulo: string;
    valor: string;
    number: string;
}) => {
    return (
        <div className="flex">
            <div className="flex flex-col border rounded-xl p-3 bg-gray-300 w-full h-36 justify-center items-center gap-4">
                <div className="flex flex-col text-wrap text-justify items-center justify-center" >
                    <p className="text-center text-nowrap">{props.titulo}</p>
                    <p className="text-center">{props.number}</p>
                    <p className='text-green-600 after:content-[] text-center'>R${props.valor}</p>
                </div>
                <TooltipProvider delayDuration={200}>
                    <div className="flex flex-col items-center justify-center sm:justify-end text-center font-semibold text-xs cursor-pointer sm:hover:-translate-y-2 hover:translate-x-0 transition-all duration-600 w-full">
                        <Link href={'/invoices?invoiceNumber='+props.number} className="flex items-center text-center">
                            <Tooltip>
                                <TooltipTrigger>
                                    <Badge variant="secondary">
                                        <Info className="h-4 w-4" />
                                    </Badge>      
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Informações</p>
                                </TooltipContent>
                            </Tooltip>
                        </Link>
                    </div>
                </TooltipProvider>
            </div>
        </div>
    );
}

export default LastInvoice;
