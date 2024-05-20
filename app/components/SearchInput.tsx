import { Search } from "@mui/icons-material";
import unisoapIcon from "@/app/images/unisoapIcon.svg"
import Image from "next/image";

const SearchInput = () => {
    return (
        <div className="flex justify-center items-center z-0">
            <div className="flex flex-col relative w-full h-20 justify-center items-center content-center">
                <div className="flex gap-2 shadow-xl text-center justify-center items-center">
                    <input id='searchInput' name='searchInput' type="text" className="rounded p-2 placeholder:opacity-20" placeholder="Como emitir notas fiscais?" />
                    <Search className="cursor-pointer" />
                </div>
            </div>
        </div>

    );
}

export default SearchInput;