import styled from 'styled-components'

const Sidebar = styled.div`
    height: ${({height}) => height};
    background-color: ${({color}) => color};
`;

function StickyScrollLayout({ height='800px', backgroundColor, children }) {
    return (
        <Sidebar height={height} color={backgroundColor} className="overflow-auto w-full h-full">
            {children}
        </Sidebar>
    );
}

export default StickyScrollLayout;