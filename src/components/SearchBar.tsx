export function SearchBar() {
    return <div className="w-2/4">
        <div className="max-sm:hidden block w-96 flex border bg-slate-950 border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2">
            <input id="default-search" className="w-full bg-slate-950 text-white border-none outline-none" placeholder="Search" required />
            <button className="bg-slate-950 text-gray-300 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    </div>
}
