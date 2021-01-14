import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import MenuData from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
    height: 60px;
    ${'' /* background: red; */}
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    font-weight: 700;
    position: fixed;
    width: 100%;
`;

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 500;
    cursor: pointer;
    padding: 0 1rem;
    text-decoration: none;
`

const MenuBars = styled(FaBars)`
    display: none;

    @media(max-width: 768px){
        display: block;
        height: 40px;
        color:#fff;
        width: 30px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50px, 25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media (max-width: 768px){
        display: none
    }
    
    `;

const NavMenuLinks = styled(Link)`
   ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media (max-width: 768px){
        display: none
    };
`


export default function Navbar({toggle}) {
    return (
        <Nav>
            <Logo to='/'>WEANER'S FOOD</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {MenuData.map((item, index) =>(
                    <NavMenuLinks to={item.Link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}
