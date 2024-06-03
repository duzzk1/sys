import GetAllLayouts from '@/api/getAllLayouts';
import { Button } from '@/components/ui/button'
import { NextPage } from 'next'

interface Props {}

const CarouselLayout: NextPage<Props> = ({}) => {

    const layouts = GetAllLayouts();
  return (
    <div className='flex px-6 text-center whitespace-nowrap border w-full p-1 rounded-md gap-2 overflow-x-auto justify-center'>
    {
        layouts.then(layouts => 
            layouts.map((layout:{title:string, description:string | null}) => (
                <Button className="border p-1 min-w-32 overflow-hidden rounded-md bg-indigo-950 hover:bg-indigo-900">{layout.title}</Button>
            )))
    }
    </div>
  )
}

export default CarouselLayout