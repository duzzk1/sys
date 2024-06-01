'use client'
import { Search } from "@mui/icons-material";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect, SetStateAction } from "react";

const SearchInput = () => {    
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue: SetStateAction<string>) => {
        setSearchInput(searchValue)
    }
    
    const clearOnSend = () => {
        const searchInput = document.getElementById('searchInput') as HTMLElement;
        if (searchInput instanceof HTMLInputElement) {
          searchInput.value = '';
        }
        setSearchInput('');
    }

    const visible = !searchInput ? 'hidden' : ''

    return (
        <div className="container">
            <div className="flex flex-col relative w-full h-20 justify-center items-center content-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input id='searchInput' onChange={(e) => searchItems(e.target.value)} name='searchInput' type="text" className="outline-none focus:hadow-none p-2 text-purple-900 placeholder:text-purple-900 placeholder:opacity-40 bg-gray-300" placeholder="Como emitir notas fiscais?"/>
                    <Button type="submit" onClick={clearOnSend}>
                        <Search id="fieldSearch" className="cursor-pointer text-white"/>
                    </Button>
                </div>
                <div className={`${visible} relative flex flex-col border w-60 right-8 h-60 rounded-md bg-indigo-950 text-white text-center justify-center`}>{`${searchInput}`}</div>
            </div>
        </div>

    );
}

export default SearchInput;