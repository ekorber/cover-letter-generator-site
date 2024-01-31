import styled from 'styled-components'

const LeftSplitLayout = styled.div`
    display: grid;
    grid-template-areas: 'sidebar content content content content';
`;

const RightSplitLayout = styled.div`
    display: grid;
    grid-template-areas: 'content content content content sidebar';
`;

const Content = styled.div`
    grid-area: content;
`;

const Sidebar = styled.aside`
    grid-area: sidebar;
`;

export function LeftSidebarSplitLayout({children}) {
  return (
    <LeftSplitLayout>
      <Sidebar>
        {children[0]}
      </Sidebar>
      <Content>
        {children[1]}
      </Content>
    </LeftSplitLayout>
  );
}

export function RightSidebarSplitLayout({children}) {
  return (
    <RightSplitLayout>
      <Content>
        {children[0]}
      </Content>
      <Sidebar>
        {children[1]}
      </Sidebar>
    </RightSplitLayout>
  );
}