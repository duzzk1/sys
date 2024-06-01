import { NextPage } from 'next'
import Dashboard from '@/app/components/Dashboard'

interface Props {}

const Relatories: NextPage<Props> = ({}) => {
  return (
    <div className="container flex">
        <div className="flex flex-col w-3/4 gap-2">
            <div className='text text-center text-nowrap'>Hoje</div>
            <Dashboard type={'dia'} quantidade="3" valor='R$452,00'/>
        </div>
        <div className="flex flex-col w-3/4 gap-2">
            <div className='text text-center text-nowrap'>Ultimos 30 dias</div>
            <Dashboard type={'mes'} quantidade="23" valor='R$5.420,20'/>
        </div>
    </div>
    )
}

export default Relatories