import PrimaryButton from "../buttons/btn-primary";

function TemplateCard({ name, showButtons=true }) {
    return (
        <div className="bg-slate-100 w-56 h-56 flex flex-col items-center shadow-lg rounded-lg">
            <div className='my-auto'>
                <p className='text-center text-slate-900 max-w-48 text-shadow-lg'>{name}</p>
            </div>
            <PrimaryButton className='w-28 mb-5 block'>Generate</PrimaryButton>
        </div>
    );
}
  
export default TemplateCard;