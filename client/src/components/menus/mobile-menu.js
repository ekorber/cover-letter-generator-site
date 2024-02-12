import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "../svg/menu-icon";
import BlueButton from "../buttons/btn-blue";

const MenuButton = styled.button`
    position: fixed;
    top: 27px;
    right: 22px;
    z-index: 100;
`;

const Menu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: rgb(226 232 240);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

    & ul {
        list-style: none;
        padding: 0;
        width: 100%;
    }
`;

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    function handleMenuButtonClick(route) {
        if (route === location.pathname) {
            toggleMenu()
        } else {
            navigate(route)
        }
    }

    return (
        <>
            <MenuButton onClick={toggleMenu}><MenuIcon width={30} height={30} strokeWidth={1} /></MenuButton>
            {isOpen && <Menu>
                <ul>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/dashboard')} className='w-full max-w-xl h-24'>COVER LETTERS</BlueButton></li>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/profile')} className='w-full max-w-xl h-24'>MY PROFILE</BlueButton></li>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/')} className='w-full max-w-xl h-24'>SIGN OUT</BlueButton></li>
                </ul>
            </Menu>}
        </>
    );
}

export default MobileMenu;