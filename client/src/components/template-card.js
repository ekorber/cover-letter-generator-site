import BlueButton from "./buttons/btn-blue"
import PurpleButton from "./buttons/btn-purple";
import RedButton from "./buttons/btn-red"
import EditIcon from "./svg/edit-icon";
import TrashIcon from "./svg/trash-icon";

function TemplateCard({ name, isListItem=true }) {
    return (
        <div className="bg-slate-100 w-56 h-56 flex flex-col items-center shadow-lg rounded-lg">
            <div className='my-auto'>
                <p className='text-center text-slate-900 max-w-48 text-shadow-lg'>{name}</p>
            </div>
            {
                isListItem ? (
                    <div className="flex flex-col gap-2 w-32 mb-5">
                        <BlueButton onClick={() => console.log('Generate')} className='h-10 block'>Generate</BlueButton>
                        <div className="flex flex-row gap-2">
                            <PurpleButton onClick={() => console.log('Edit')} className='w-full h-8'>
                                <EditIcon className='mx-auto' width={22} height={22} />
                            </PurpleButton>
                            <RedButton onClick={() => console.log('Delete')} className='w-full h-8'>
                                <TrashIcon className='mx-auto' width={20} height={20} />
                            </RedButton>
                        </div>
                    </div>
                    ) : (
                    <BlueButton className='w-32 mb-9 h-10 block'>Create New</BlueButton>
                    )
            }
        </div>
    );
}
  
export default TemplateCard;