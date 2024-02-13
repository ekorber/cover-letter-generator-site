import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import HistoryListItem from "./history-list-item";
import { API_USER_HISTORY_COVER_LETTERS } from '../apiRoutes';
import CoverLetterHistoryContext from '../contexts/CoverLetterHistoryContext';
import ToastContext from "../contexts/ToastContext";

function HistoryList() {

    const { coverLetterHistory, setCoverLetterHistory } = useContext(CoverLetterHistoryContext)
    const { showToast } = useContext(ToastContext)

    useEffect(() => {
        axios.post(API_USER_HISTORY_COVER_LETTERS)
        .then(function (response) {
            setCoverLetterHistory(response.data)
        })
        .catch(function (error) {
            console.error(error);
            showToast("Error: Couldn't load cover letters from server", 'danger', 3000)
        });
    }, []); // Empty dependency array means this effect runs once on mount


    return (
        <div className='p-5 h-full bg-gradient-to-b from-green-600 overscroll-contain'>
            {coverLetterHistory.length === 0 && <p className='text-slate-100 text-center italic mt-3 text-lg'>No cover letters generated yet!</p>}
            {coverLetterHistory.map(item => (
                <HistoryListItem key={item.id} coverLetterData={item} />
            ))}
        </div>
    );
}

export default HistoryList;