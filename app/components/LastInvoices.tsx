import { NextPage } from 'next'
import LastInvoice from './LastInvoice'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
interface Props {}

const LastInvoices: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full justify-center">
       <TooltipProvider delayDuration={100} >
          <Tooltip>
            <TooltipTrigger className="flex w-full justify-center">
              <Carousel className="container">
                <CarouselContent >
                  <CarouselItem>        
                    <LastInvoice titulo={'Nota fiscal'} valor={'2.400'} number={'0001'}/>
                  </CarouselItem>
                  <CarouselItem>
                    <LastInvoice titulo={'Nota fiscal'} valor={'25.000'} number={'0002'}/>        
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </TooltipTrigger>
            <TooltipContent>
              <SwipeRightIcon className='text-indigo-950'/>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>  
    )
}

export default LastInvoices