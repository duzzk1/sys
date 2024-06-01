import Link from "next/link";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const WelcomeHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h2 className="font-bold text-2xl text-purple-900">Olá, Cliente</h2>
                <p className="text-sm">Aproveite seu dia!</p>
            </div>
            <div>
                <li className='flex w-full justify-center items-center'>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger >
                            <Link href='/UnderConstruct' className="flex items-center justify-center">
                                <Avatar >
                                    <AvatarImage src="https://github.com/duzzk1.png" alt="@shadcn" />
                                    <AvatarFallback>PL</AvatarFallback>
                                </Avatar>
                            </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Perfil</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    
                </li>
            </div>
        </div>
    );
}

export default WelcomeHeader;