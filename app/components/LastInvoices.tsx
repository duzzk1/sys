import { NextPage } from 'next'
import LastInvoice from './LastInvoice'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Props {}

const LastInvoices: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full justify-center">
        <Carousel className="flex sm:mx-10 sm:w-max w-44">
          <CarouselContent >
            <CarouselItem >        
              <LastInvoice titulo={'Nota fiscal'} valor={'2.400'} number={'0001'}/>
            </CarouselItem>
            <CarouselItem>
              <LastInvoice titulo={'Nota fiscal'} valor={'25.000'} number={'0001'}/>        
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>  
    )
}

export default LastInvoices