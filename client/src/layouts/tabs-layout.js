import { useState } from "react";
import styled from "styled-components";

const TabList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 5px;
    justify-content: center;
    width: 100%;
`;

const TabListItem = styled.li`
    padding: 10px;
    cursor: pointer;
    border-width: 0px;
    border-color: rgb(30 41 59);
    color: rgb(30 41 59);

    &.active {
        border-bottom-width: 2px;
    }
`;

const TabContent = styled.div`
    margin-top: 30px;
`;

export function Tab({ children, label }) {
    return <>{children}</>;
};

export function Tabs({ children, className }) {
    const [currentTab, setCurrentTab] = useState(children[0].props.label)

    return (
        <div className={className}>
            <TabList>
                {children.map(tab => {
                    const label = tab.props.label

                    return (
                        <TabListItem key={label} onClick={() => setCurrentTab(label)} className={label === currentTab ? 'active' : ''}>
                            <button className='w-22 font-semibold text-center'>{label}</button>
                        </TabListItem>
                    )
                })}
            </TabList>
            <TabContent>
                {children.map(tab => {
                    if (tab.props.label === currentTab)
                        return <div key={tab.props.label}>{tab.props.children}</div>

                    return null
                })}
            </TabContent>
        </div>
    )
}

export default Tabs;