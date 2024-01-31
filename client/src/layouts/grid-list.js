import styled from 'styled-components'

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${(props) => props.itemMinWidth}px, 1fr));
    gap: ${(props) => props.gap}px;
    width: 100%;
    padding: ${(props) => props.padding}px;
    justify-items: center;
`;

function GridList({ itemMinWidth=200, gap=10, padding=10, children }) {
    return (
      <List itemMinWidth={itemMinWidth} gap={gap} padding={padding}>
        {children}
      </List>
    );
  }
  
  export default GridList;