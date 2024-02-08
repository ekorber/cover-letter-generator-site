import styled from 'styled-components'

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${(props) => props.itemminwidth}px, 1fr));
    gap: ${(props) => props.gap}px;
    justify-items: center;
`;

function GridListLayout({ itemMinWidth=200, gap=10, className, children }) {
  return (
    <List itemminwidth={itemMinWidth} gap={gap} className={`${className}`}>
      {children}
    </List>
  );
}

export default GridListLayout;