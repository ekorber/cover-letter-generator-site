import axios from "axios";
import DownloadIcon from "./svg/download-icon";
import TrashIcon from "./svg/trash-icon";
import { API_USER_HISTORY_COVER_LETTERS_DELETE } from "../apiRoutes";
import { useContext } from "react";
import CoverLetterHistoryContext from "../contexts/CoverLetterHistoryContext";
import { generateWordDocument } from "../utils/doc-generator";
import ToastContext from "../contexts/ToastContext";

function HistoryListItem({ coverLetterData, className }) {

    const { setCoverLetterHistory } = useContext(CoverLetterHistoryContext)
    const { showToast } = useContext(ToastContext)

    function deleteFromHistory() {
        axios.post(API_USER_HISTORY_COVER_LETTERS_DELETE, {id: coverLetterData.id})
        .then(function (response) {
            setCoverLetterHistory(prev => prev.filter(item => item.id !== coverLetterData.id))
        })
        .catch(function (error) {
            console.error(error);
            showToast("Error: Cover letter could not be deleted from server", 'danger', 3000)
        });
    }

    return (
        <div className={`text-slate-900 shadow-xl relative my-2 p-5 bg-slate-100 flex rounded-lg ${className}`}>
            <div className="flex-initial w-full">
                <p className="text-sm font-bold">{coverLetterData.company}</p>
                <p className="text-sm italic">{coverLetterData.position}</p>
                <p className="text-xs mt-2">{coverLetterData.dateCreated}</p>
            </div>
            <div className="flex-initial w-1/6 relative">
                <button onClick={() => generateWordDocument(coverLetterData.body, `Cover Letter - ${coverLetterData.company} - ${coverLetterData.position}.docx`)} 
                    className="w-7 h-7 bg-transparent absolute -right-1 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <DownloadIcon className='ml-1' />
                </button>
                <button onClick={deleteFromHistory} className="w-7 h-7 bg-transparent absolute -right-1 mt-9 rounded-lg hover:bg-emerald-600 hover:text-slate-100">
                    <TrashIcon className='ml-1' />
                </button>
            </div>
        </div>
    );
  }
  
  export default HistoryListItem;