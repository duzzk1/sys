import { Search } from "@mui/icons-material";
import unisoapIcon from "@/app/images/unisoapIcon.svg"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchInput = () => {
    return (
        <div className="flex justify-center w-full items-center z-0">
            <div className="flex flex-col relative w-full h-20 justify-center items-center content-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input id='searchInput' name='searchInput' type="text" className="outline-none focus:hadow-none p-2 text-purple-900 placeholder:text-purple-900 placeholder:opacity-40 bg-gray-300" placeholder="Como emitir notas fiscais?"/>
                    <Button type="submit">
                        <Search className="cursor-pointer text-white" />
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default SearchInput;