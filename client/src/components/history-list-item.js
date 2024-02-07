import DownloadIcon from "./svg/download-icon";
import TrashIcon from "./svg/trash-icon";

function HistoryListItem({ company, position, dateCreated, className }) {
    return (
        <div className={`text-slate-900 shadow-xl relative my-2 p-5 bg-slate-100 flex rounded-lg ${className}`}>
            <div className="flex-initial w-full">
                <p className="text-sm font-bold">{company}</p>
                <p className="text-sm italic">{position}</p>
                <p className="text-xs mt-2">{dateCreated}</p>
            </div>
            <div className="flex-initial w-1/6 relative">
                <button className="w-7 h-7 bg-transparent absolute -right-1 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <DownloadIcon className='ml-1' />
                </button>
                <button className="w-7 h-7 bg-transparent absolute -right-1 mt-9 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <TrashIcon className='ml-1' />
                </button>
            </div>
        </div>
    );
  }
  
  export default HistoryListItem;