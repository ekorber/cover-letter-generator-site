import React, { useState, useEffect } from 'react';
import TemplateCard from "./template-card";
import GridListLayout from "../layouts/grid-list";

function TemplateGrid() {

    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        // Fetch cover letter template list from an API
        fetch('/users/1/templates')
            .then(response => response.json())
            .then(data => setTemplates(data))
            .catch(error => console.error('Error fetching list:', error));
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='p-5 h-full bg-gradient-to-b from-blue-500 overscroll-contain'>
            <GridListLayout gap={40} className='p-8'>
                {templates.map(template => (
                    <TemplateCard name={template.name} />
                ))}

                <TemplateCard name={'New Template...'} />    
            </GridListLayout>
        </div>
    );
}
  
  export default TemplateGrid;