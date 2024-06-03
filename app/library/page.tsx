import { NextPage } from 'next'
import CarouselLayout from "../components/CarouselLayout";
import LayoutButtons from "../components/LayoutButtons";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className='flex flex-col ml-20 p-10 justify-center gap-1'>
      <CarouselLayout />
      <LayoutButtons />
    </div>
  )
}

export default Page