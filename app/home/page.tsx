import { Search } from "@mui/icons-material";
import SearchInput from "../components/SearchInput";
import PhoneIcon from "@/app/images/phoneIcon.png"
import supportIcon from "@/app/images/supportIcon.svg"
import Image from "next/image";
import WelcomeHeader from "@/app/components/WelcomeHeader";
import WelcomeContainer from "@/app/components/WelcomeContainer";
import Divider from "@/app/components/Divider";
import LastInvoices from "../components/LastInvoices";

const Home = () => {
    return (
        <div className="flex flex-col w-full h-full items-center p-2 ml-20">
            <div className="w-full h-full">
                <WelcomeHeader />
                <SearchInput />
                <Divider />            
                <WelcomeContainer />    
                <Divider />
                <div className="flex w-full gap-2">
                    <LastInvoices titulo={'Nota fiscal 0001'} valor={'2.400'}/>        
                    <LastInvoices titulo={'Nota fiscal 0002'} valor={'25.000'}/>        
                </div>
            </div>
        </div>
    );
}

export default Home;