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

interface notasApiFakeProps {
    'titulo' : string
    'valor' : string,
}


const notasApiFake = [
    {
      'id' : 1,
      'titulo' : 'Instalação de internet',
      'valor' : '700,00',
      'number' : '000000001'
    },
    {
      'id' : 2,
      'titulo' : 'Conserto de telefone',
      'valor' : '234,90',
      'number' : '000000002'
    },
    {
      'id' : 3,
      'titulo' : 'Ajuste de senha de internet',
      'valor' : '50,00',
      'number' : '000000003'

    }
  ];

const CarouselContainer: NextPage<notasApiFakeProps> = () => {
  return (
    <div className="container flex flex-col items-center">
        <Carousel className='w-full'>
            <CarouselContent>
            {
            notasApiFake.map((nota) => (
                <CarouselItem key={nota.id}>
                    <LastInvoice titulo={nota.titulo} valor={nota.valor} number={(nota.number).toString().padStart(9, '0')}/>
                </CarouselItem>
            ))
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