import axios from 'axios';



async function GetInvoiceByNumber(invoiceNumber:string | null) {

    const response = await axios.get(`http://localhost:3001/invoice/${invoiceNumber}`);; 
    return response.data;
};


export default GetInvoiceByNumber;