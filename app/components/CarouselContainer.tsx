import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import LastInvoice from './LastInvoice'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
  } from "@/components/ui/tooltip"
import SwipeLeft from '@mui/icons-material/SwipeLeft'
import { Key } from 'react';
import GetAllInvoices from '@/api/GetAllInvoices';

const CarouselContainer = () => {
    const invoices = GetAllInvoices();
  return (
    <div className="container flex flex-col items-center">
        <Carousel className='w-full'>
            <CarouselContent>
            {
                invoices.then(invoices => 
                    invoices.map((nota: { id: Key | null | undefined; title: string; value: string; number: any; }) => (
                        <CarouselItem key={nota.id}>
                            <LastInvoice titulo={nota.title} valor={nota.value} number={nota.number}/>
                        </CarouselItem>
                    ))
                )
            }
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