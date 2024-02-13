import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "../svg/menu-icon";
import BlueButton from "../buttons/btn-blue";

const MenuButton = styled.button`
    position: fixed;
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

    const transitionStyle = {
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: isOpen ? '1' : '0',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
    }

    return (
        <>
            <MenuButton onClick={toggleMenu} className="right-6 top-7 xl:top-6 xl:right-8"><MenuIcon width={30} height={30} strokeWidth={1} /></MenuButton>
            <Menu style={transitionStyle}>
                <ul>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/dashboard')} className='w-full max-w-xl h-24'>COVER LETTERS</BlueButton></li>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/profile')} className='w-full max-w-xl h-24'>MY PROFILE</BlueButton></li>
                    <li className="m-7 text-center"><BlueButton onClick={() => handleMenuButtonClick('/')} className='w-full max-w-xl h-24'>SIGN OUT</BlueButton></li>
                </ul>
            </Menu>
        </>
    );
}

export default MobileMenu;