import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.width}%;
`;

function SplitLayout({split=50, className, children}) {
  return (
    <div className={`flex ${className}`}>
      <Container width={split}>
        {children[0]}
      </Container>
      <Container width={100-split}>
        {children[1]}
      </Container>
    </div>
  );
}

export default SplitLayout;