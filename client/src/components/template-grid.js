import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import TemplateCard from "./template-card";
import GridListLayout from "../layouts/grid-list";
import TemplateContext from '../contexts/TemplateContext';
import { API_USER_TEMPLATES } from '../apiRoutes';
import ToastContext from "../contexts/ToastContext";

function TemplateGrid() {

    const { templates, setTemplates } = useContext(TemplateContext)
    const { showToast } = useContext(ToastContext)

    useEffect(() => {
        axios.post(API_USER_TEMPLATES)
        .then(function (response) {
            setTemplates(response.data)
        })
        .catch(function (error) {
            console.error(error);
            showToast("Error: Couldn't load templates from server", 'danger', 3000)
        });
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='p-5 h-full bg-gradient-to-b from-blue-600 overscroll-contain'>
            <GridListLayout gap={40} className='p-8'>
                <TemplateCard isListItem={false} />

                {templates.map(template => (
                    <TemplateCard key={template.id} template={template} />
                ))}
            </GridListLayout>
        </div>
    );
}
  
  export default TemplateGrid;