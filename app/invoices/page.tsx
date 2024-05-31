'use client'

import { useSearchParams } from 'next/navigation';

const notasApiFake = [
    {
      'id' : 1,
      'titulo' : 'Instalação de internet',
      'valor' : '700,00',
      'number' : '000000001'
    },
    {
      'id' : 2,
      'titulo' : 'Conserto de telefone',
      'valor' : '234,90',
      'number' : '000000002'
    },
    {
      'id' : 3,
      'titulo' : 'Ajuste de senha de internet',
      'valor' : '50,00',
      'number' : '000000003'

    }
  ];


const Invoices = () => {
    const searchParams = useSearchParams();
    const invoiceNumber = searchParams.get('invoiceNumber');
    
  
    const filteredNota = notasApiFake.filter((nota) => nota.number === invoiceNumber);

    return (
      <div className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200">
        {
          filteredNota.map((nota) => (
            <div key={nota.id} className='flex flex-col justify-center items-center'>
              <h1 className='text-2xl'>{nota.titulo}</h1>
              <p>{nota.valor}</p>
            </div>
          ))
        }
        {
            filteredNota.map((nota) => (
                <h1 key={nota.id} className="font-bold text-xl">Página da nota {nota.number}</h1>
            ))
        }
      </div>
    );
  };
export default Invoices;