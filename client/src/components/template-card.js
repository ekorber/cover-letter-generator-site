function TemplateCard({ name, showButtons=true }) {
    return (
        <div className="bg-slate-100 w-56 h-56 flex items-center justify-items-center shadow-lg rounded-lg">
            <p className='text-center text-slate-900 mx-auto max-w-48 text-shadow-lg'>{name}</p>
        </div>
    );
}
  
export default TemplateCard;