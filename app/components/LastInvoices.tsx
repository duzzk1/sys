import { NextPage } from 'next'
import CarouselContainer from './CarouselContainer';
interface Props {}

const LastInvoices: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full justify-center">
          <CarouselContainer />
    </div>  
    )
}

export default LastInvoices