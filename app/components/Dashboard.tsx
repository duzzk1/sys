import { NextPage } from 'next'

interface Props {
    type:string
}

const DashboardDay = (props: {
    type: string;
    quantidade: string;
    valor: string;
}) => {
   
  return (
    <div className="flex flex-col border rounded-xl p-3 bg-gray-300 items-center w-full h-36 justify-center flex-wrap">
        <div className="flex flex-col text-wrap text-justify justify-center items-center gap-2">
            <p className='text-nowrap w-30'>Notas do {props.type}:</p>
            <p className='text-green-600 after:content-[]'>{props.quantidade}</p>
        </div>
        <p className='text-green-600 after:content-[]'>{props.valor}</p>

    </div>
    );
}

export default DashboardDay