import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryListItem from "./history-list-item";
import { API_USER_HISTORY_COVER_LETTERS } from '../apiRoutes';

function HistoryList() {

    const [coverLetterHistory, setCoverLetterHistory] = useState([]);

    useEffect(() => {
        axios.post(API_USER_HISTORY_COVER_LETTERS, {
            userId: 1,
        })
        .then(function (response) {
            setCoverLetterHistory(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
    }, []); // Empty dependency array means this effect runs once on mount


    return (
        <div className='p-5 h-full bg-gradient-to-b from-green-600 overscroll-contain'>
            {coverLetterHistory.map(doc => (
                <HistoryListItem key={doc.id} company={doc.company} position={doc.position} dateCreated={doc.dateCreated} />
            ))}
        </div>
    );
}

export default HistoryList;