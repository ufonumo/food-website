import React from 'react'
import { FaTimes } from 'react-icons/fa';
import styled, {css} from 'styled-components/macro';
import MenuData from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';



const DropdownContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index:999;
    display: grid;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    background: #cd853f;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const CloseIcon = styled(FaTimes) `
    color: #000d1a;
`
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100px);
    text-align: center;
    margin-top: 8rem;

    @media (max-width: 480px){
        grid-template-rows: repeat(4, 60px);

    }
`
const BtnWrap = styled.div `
    display: flex;
    justify-content: center;
`

const DropdownLink = styled(Link)`
    display: flex;
    text-align: center;
    justify-content: center;
    transition: .3s ease-in-out;
    font-size: 1.7rem;
    text-decoration: none;
    cursor: pointer;
    color: #fff;

    &:hover{
        color: #000d1a;
    }
`

export default function Dropdown({isOpen, toggle}) {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon toggle={toggle}>  
             <CloseIcon  />     
            </Icon>

                <DropdownWrapper>
                    <DropdownMenu>
                        {MenuData.map(( item,index ) =>(
                            <DropdownLink to={item.Link} key={index}>{item.title}</DropdownLink>
                        ))}
                    </DropdownMenu>
                    <BtnWrap>
                        <Button primary="true"  round='true' to='/contact'>
                            Contact Us
                        </Button>
                    </BtnWrap>
                </DropdownWrapper>
        </DropdownContainer>
    )
}
