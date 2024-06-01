'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import GetInvoiceByNumber from "@/api/GetInvoiceByNumber";

const Invoices = () => {
    const searchParams = useSearchParams();
    const invoiceNumber = searchParams.get('invoiceNumber');
    const invoice = GetInvoiceByNumber(invoiceNumber);
    
return (
    < Suspense fallback={
        <Alert className="flex h-screen flex-col justify-center items-center">
            <AlertTitle>Aguarde!</AlertTitle>
            <AlertDescription>
                Carregando nota fiscal.
            </AlertDescription>
        </Alert>
    }>
    {   
        invoice.then(
            res =>  
                <div key={res._id} className="flex flex-col w-screen h-screen justify-center items-center bg-gray-200">
                    <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl">{res.title}</h1>
                    <p>R${res.value}</p>
                    </div>
                <h1 className="font-bold text-xl">Página da nota {res.number}</h1>
            </div>
        )
    }
    </Suspense>
    );
};

export default Invoices;