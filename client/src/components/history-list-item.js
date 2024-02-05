function HistoryListItem({ company, position, dateCreated, className }) {
    return (
        <div className={`text-slate-900 shadow-xl relative my-2 p-5 bg-slate-100 flex rounded-lg ${className}`}>
            <div className="flex-initial w-full">
                <p className="text-sm font-bold">{company}</p>
                <p className="text-sm italic">{position}</p>
                <p className="text-xs mt-2">{dateCreated}</p>
            </div>
            <div className="flex-initial w-1/6 relative">
                <button className="w-7 h-7 bg-transparent absolute right-0 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <svg  className="ml-1" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </button>
                <button className="w-7 h-7 bg-transparent absolute right-0 mt-9 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <svg className="ml-1" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"/>
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        <path d="M10 11v6"/>
                        <path d="M14 11v6"/>
                    </svg>
                </button>
            </div>
        </div>
    );
  }
  
  export default HistoryListItem;