import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  return (
        <div className='flex flex-col w-full h-full items-center'>
            <div className='flex font-bold text-2xl'>Duvidas?</div>
            <div className='flex mt-4 text-xl'>Entre em contato</div>
            <div className='mt-8'>
                <Link href='/UnderConstruct' className='border border-purple-900 text-white rounded-lg hover:bg-indigo-950 bg-indigo-800 transition-all duration-500 p-3'>Contato</Link>
            </div>
        </div>
        )
}

export default Contact