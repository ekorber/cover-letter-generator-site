function HistoryListItem({ company, position, dateCreated, className }) {
    return (
        <div className={`text-white relative my-2 p-5 bg-red-700 flex rounded-lg ${className}`}>
            <div className="flex-initial w-full">
                <p className="text-sm font-bold">{company}</p>
                <p className="text-sm italic">{position}</p>
                <p className="text-xs mt-2">{dateCreated}</p>
            </div>
            <div className="flex-initial w-1/6 relative">
                <button className="w-7 h-7 bg-white text-black absolute right-0">Ex</button>
                <button className="w-7 h-7 bg-white text-black absolute right-0 mt-9">Dl</button>
            </div>
        </div>
    );
  }
  
  export default HistoryListItem;