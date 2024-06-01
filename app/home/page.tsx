import SearchInput from "@/app/components/SearchInput";
import WelcomeHeader from "@/app/components/WelcomeHeader";
import WelcomeContainer from "@/app/components/WelcomeContainer";
import Divider from "@/app/components/Divider";
import LastInvoices from "@/app/components/LastInvoices";
import Relatories from "@/app/components/Relatories";
import Contact from "@/app/components/Contact";

const Home = () => {
    return (
        <div className="container h-full">
            <div className="w-full h-full border ml-12">
                <WelcomeHeader />
                <SearchInput />
                <Divider />            
                <WelcomeContainer />    
                <Divider />
                <Relatories />
                <Divider />
                <LastInvoices />
                <Divider />
                <Contact />
                <Divider />
            </div>
        </div>
    );
}

export default Home;