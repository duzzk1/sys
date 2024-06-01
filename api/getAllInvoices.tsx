import axios from 'axios';



async function GetAllInvoices() {

    const response = await axios.get(`http://localhost:3001/invoices`);; 
    return response.data;
};


export default GetAllInvoices;