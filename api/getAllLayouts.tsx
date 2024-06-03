import axios from 'axios';


async function GetAllLayouts() {

    const response = await axios.get(`http://localhost:3001/layouts`);
    return response.data;
};


export default GetAllLayouts;