import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { NextPage } from 'next'
import LastInvoice from './LastInvoice'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from "@/components/ui/tooltip"
import SwipeLeft from '@mui/icons-material/SwipeLeft'
interface Props {}

const CarouselContainer: NextPage<Props> = ({}) => {
  return (
    <div className="container flex flex-col items-center">
        <Carousel className='w-full'>
            <CarouselContent>
            <CarouselItem >        
                <LastInvoice titulo={'Nota fiscal'} valor={'2.400'} number={'0001'}/>
            </CarouselItem>
            <CarouselItem>
                <LastInvoice titulo={'Nota fiscal'} valor={'25.000'} number={'0002'}/>        
            </CarouselItem>
            </CarouselContent>
        </Carousel>
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger>
                    <SwipeLeft />
                </TooltipTrigger>
                <TooltipContent side='bottom'>
                <p>Arraste</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
  </div>
  )
}

export default CarouselContainer