import BlueButton from "./buttons/btn-blue"

function TemplateCard({ name, isListItem=true }) {
    return (
        <div className="bg-slate-100 w-56 h-56 flex flex-col items-center shadow-lg rounded-lg">
            <div className='my-auto'>
                <p className='text-center text-slate-900 max-w-48 text-shadow-lg'>{name}</p>
            </div>
            {
                isListItem ? <BlueButton className='w-28 mb-5 block'>Generate</BlueButton> :
                    <BlueButton className='w-32 mb-5 block'>Create New</BlueButton>
            }
        </div>
    );
}
  
export default TemplateCard;