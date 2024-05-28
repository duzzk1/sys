import { NextPage } from 'next'
import LastInvoice from './LastInvoice'

interface Props {}

const LastInvoices: NextPage<Props> = ({}) => {
  return (
    <div className="flex w-full gap-2">
        <LastInvoice titulo={'Nota fiscal 0001'} valor={'2.400'}/>        
        <LastInvoice titulo={'Nota fiscal 0002'} valor={'25.000'}/>        
    </div>  
    )
}

export default LastInvoices