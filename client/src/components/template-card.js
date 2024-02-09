import { useContext, useState } from "react";
import axios from "axios";
import BlueButton from "./buttons/btn-blue"
import PurpleButton from "./buttons/btn-purple";
import RedButton from "./buttons/btn-red"
import EditIcon from "./svg/edit-icon";
import TrashIcon from "./svg/trash-icon";
import TemplateContext from "../contexts/TemplateContext";
import { API_USER_TEMPLATES_DELETE } from "../apiRoutes";
import Modal from "../layouts/modal";

function TemplateCard({ id, name, isListItem=true }) {

    const { setTemplates } = useContext(TemplateContext)
    const [isModalOpen, setModalOpen] = useState(false)

    function openModal(id) {
        setModalOpen(true)
    }

    function handleDeletion(id) {
        //Server submission here
        axios.post(API_USER_TEMPLATES_DELETE, {id})
        .then(function (response) {
            setTemplates((prevState) => prevState.filter(element => element.id !== id));
        })
        .catch(function (error) {
            console.error(error);
        });
    }

    return (
        <>
            <Modal isOpen={isModalOpen} defaultCloseButton={false} onClose={() => setModalOpen(false)} >
                <p className="p-3">Modal open! {id}</p>
            </Modal>

            <div className="bg-slate-100 w-56 h-56 flex flex-col items-center shadow-lg rounded-lg">
                <div className='my-auto'>
                    <p className='text-center text-slate-900 max-w-48 text-shadow-lg'>{name}</p>
                </div>
                {
                    isListItem ? (
                        <div className="flex flex-col gap-2 w-32 mb-5">
                            <BlueButton onClick={() => openModal(id)} className='h-10 block'>Generate</BlueButton>
                            <div className="flex flex-row gap-2">
                                <PurpleButton to={`/template-editor/${id}`} className='w-full h-8'>
                                    <EditIcon className='mx-auto' width={22} height={22} />
                                </PurpleButton>
                                <RedButton onClick={() => handleDeletion(id)} className='w-full h-8'>
                                    <TrashIcon className='mx-auto' width={20} height={20} />
                                </RedButton>
                            </div>
                        </div>
                        ) : (
                        <BlueButton to='/template-editor/new' className='w-32 mb-9 h-10 block'>Create New</BlueButton>
                        )
                }
            </div>
        </>
    );
}
  
export default TemplateCard;