import { NextPage } from 'next'
import Dashboard from './Dashboard'

interface Props {}

const Relatories: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full gap-2">
        <div className="flex flex-col w-full gap-2">
            <div className='text text-center text-nowrap'>Hoje</div>
            <Dashboard type={'dia'} quantidade="3" valor='R$452,00'/>
        </div>
        <div className="flex flex-col w-full gap-2">
            <div className='text text-center text-nowrap'>Ultimos 30 dias</div>
            <Dashboard type={'mes'} quantidade="23" valor='R$5.420,20'/>
        </div>
    </div>
    )
}

export default Relatories