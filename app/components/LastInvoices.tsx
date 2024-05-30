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
        <Carousel className="container">
          <CarouselContent >
            <CarouselItem>        
              <LastInvoice titulo={'Nota fiscal'} valor={'2.400'} number={'0001'}/>
            </CarouselItem>
            <CarouselItem>
              <LastInvoice titulo={'Nota fiscal'} valor={'25.000'} number={'0002'}/>        
            </CarouselItem>
          </CarouselContent>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <SwipeLeftIcon className='text-indigo-950 absolute bottom-20 left-0'/>
                <SwipeRightIcon className='text-indigo-950 absolute bottom-20 right-0'/>
              </TooltipTrigger>
              <TooltipContent className='relative left-[32rem] bottom-36'>
                <p>Arraste</p>
              </TooltipContent>
            </Tooltip>
           </TooltipProvider>
        </Carousel>
    </div>  
    )
}

export default LastInvoices