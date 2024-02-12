function MenuIcon({className, width=20, height=20, strokeWidth=2}) {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <line x1="0" y1="5" x2="40" y2="5" stroke="black" stroke-width="5"/>
            <line x1="0" y1="15" x2="40" y2="15" stroke="black" stroke-width="5"/>
            <line x1="0" y1="25" x2="40" y2="25" stroke="black" stroke-width="5"/>
        </svg>
    );
}

export default MenuIcon;