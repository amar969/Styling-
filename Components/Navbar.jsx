import React from "react";
import styled from "styled-components";

function Navbar(){

    const NavBarWrapper = styled.header`
    height: 120px;
    background-color: #000;
    position: relative;
    `

    const Logo = styled.div`
        height: 60px;
        position: absolute; 
        top: 20px;
        left: 30px;
    `

    const ResourceLink = styled.div`
        font-weight: 300;
        font-family: san-serif;
        position:absolute;
        top: 24px;
        right: 40px;
        letter-spacing: 1px;
    `

    const Button = styled.button`
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        padding: 15px 30px;
        border-radius: 2px;
        color: #fff;
        background: #00bcd4;
        border: 0px;
        text-align: center;

        @media all and (max-width: 820px){
            padding: 10px 5px;
            font-size: 10px;
        }

        @media all and (max-width: 620px){
            display: none;
        }
    `

    const A = styled.a`
    text-decoration: none;
    color: #fff;
    margin-left: 50px;
    cursor: pointer;

    @media all and (max-width: 620px){
        margin-left: 20px;
    }
    `
    return(
        <>
            <NavBarWrapper>
                <Logo>
                    <img height="60px" src="logo192.png" alt="logg.png"/> 
                </Logo>
                <ResourceLink>
                    <Button>TRY NOW</Button>
                    <A>About us</A>
                    <A>FAQ</A>
                    <A>Login</A> 
                </ResourceLink>
            </NavBarWrapper>
        
        </>
    )
}

export {Navbar}