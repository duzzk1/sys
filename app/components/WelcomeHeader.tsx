import { Person } from "@mui/icons-material";
import Link from "next/link";

const WelcomeContainer = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold text-2xl text-purple-900">Olá, Duzzk</h2>
                <p className="text-sm">Aproveite seu dia!</p>
            </div>
            <div>
                <li className='flex w-full justify-center items-center'>
                    <Link href='/UnderConstruct' className="w-full">
                        <Person className='hover:opacity-55' />
                    </Link>
                </li>
            </div>
        </div>
    );
}

export default WelcomeContainer;