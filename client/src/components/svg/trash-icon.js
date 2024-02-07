function TrashIcon({className, width=20, height=20, strokeWidth=2}) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"/>
            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            <path d="M10 11v6"/>
            <path d="M14 11v6"/>
        </svg>
    );
}

export default TrashIcon;