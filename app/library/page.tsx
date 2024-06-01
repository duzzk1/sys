import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className='flex ml-20 p-10 justify-center'>
      <div className='flex px-6 text-center whitespace-nowrap border w-full p-1 rounded-md gap-2 overflow-x-auto'>
        <Button className="border p-1 min-w-32 overflow-hidden rounded-md bg-indigo-950 hover:bg-indigo-900">Nota fiscal - 13</Button>
        <Button className="border p-1 min-w-32 overflow-hidden rounded-md bg-indigo-950 hover:bg-indigo-900">Nota fiscal - 55</Button>
        <Button className="border p-1 min-w-32 overflow-hidden rounded-md bg-indigo-950 hover:bg-indigo-900">Nota fiscal - 62</Button>
        <Button className="border p-1 min-w-32 overflow-hidden rounded-md bg-indigo-950 hover:bg-indigo-900">Nota fiscal - 65</Button>
      </div>
    </div>
  )
}

export default Page