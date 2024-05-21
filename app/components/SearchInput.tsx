import { Search } from "@mui/icons-material";
import unisoapIcon from "@/app/images/unisoapIcon.svg"
import Image from "next/image";

const SearchInput = () => {
    return (
        <div className="flex justify-center items-center z-0">
            <div className="flex flex-col relative w-full h-20 justify-center items-center content-center">
                <div className="flex gap-2 w-full border rounded-full h-12 bg-gray-300 bgtext-center justify-center items-center">
                    <input id='searchInput' name='searchInput' type="text" className="rounded-full focus:outline-none focus:hadow-none p-2 placeholder:text-purple-900 placeholder:opacity-40 bg-gray-300" placeholder="Como emitir notas fiscais?" />
                    <Search className="cursor-pointer text-purple-950" />
                </div>
            </div>
        </div>

    );
}

export default SearchInput;