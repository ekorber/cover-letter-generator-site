import styled from 'styled-components'

const Layout = styled.div`
    height: ${({height}) => height};
`;

function StickyScrollLayout({ height, className, children }) {
    return (
        <Layout height={height} className={`overflow-auto w-full h-full ${className}`}>
            {children}
        </Layout>
    );
}

export default StickyScrollLayout;