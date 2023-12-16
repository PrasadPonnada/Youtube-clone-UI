import { SearchBar } from "./SearchBar";

export function AppBar() {
    return <div className="flex justify-between pt-1">
        <div className="flex items-center pl-2">
            Youtube
        </div>

        <div>
            <SearchBar />
        </div>

        <div className="flex items-center pr-2">
            SignIn
        </div>
    </div>
}
