import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateCard from "./template-card";
import GridListLayout from "../layouts/grid-list";

function TemplateGrid() {

    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        axios.post('/users/templates', {
            userId: 1,
        })
        .then(function (response) {
            setTemplates(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='p-5 h-full bg-gradient-to-b from-blue-500 overscroll-contain'>
            <GridListLayout gap={40} className='p-8'>
                {templates.map(template => (
                    <TemplateCard key={template.id} name={template.name} />
                ))}

                <TemplateCard name={'New Template...'} isListItem={false} />    
            </GridListLayout>
        </div>
    );
}
  
  export default TemplateGrid;