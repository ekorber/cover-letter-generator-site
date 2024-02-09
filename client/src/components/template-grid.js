import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import TemplateCard from "./template-card";
import GridListLayout from "../layouts/grid-list";
import TemplateContext from '../contexts/TemplateContext';

function TemplateGrid() {

    const { templates, setTemplates } = useContext(TemplateContext)

    useEffect(() => {
        axios.post('/user/template/list')
        .then(function (response) {
            setTemplates(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='p-5 h-full bg-gradient-to-b from-blue-600 overscroll-contain'>
            <GridListLayout gap={40} className='p-8'>
                <TemplateCard name={'New Template!'} isListItem={false} />

                {templates.map(template => (
                    <TemplateCard key={template.id} id={template.id} name={template.tname} />
                ))}
            </GridListLayout>
        </div>
    );
}
  
  export default TemplateGrid;