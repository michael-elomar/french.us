'use client'
import { useState } from "react";
import { DivNavbarLogo, DivNavbar, DivNavbarLinks, HeaderLogo, Navlink, DivNavbarSign, Icon} from "./navbar_style";

const BarContent = () => (
    <>
        <p><Navlink>Brands</Navlink></p>
        <p><Navlink>Concepts</Navlink></p>
        <p><Navlink>Inspiration</Navlink></p>
    </>
);


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <DivNavbar>
            <DivNavbarLogo>
                <HeaderLogo src="/assets/logo.webp"/>
            </DivNavbarLogo>
            <DivNavbarLinks>
                <BarContent />
            </DivNavbarLinks>
            <DivNavbarSign>
                {toggleSearch && (
                    <input></input>
                )}
                <Icon onClick={() => setToggleSearch(prev => !prev)}><img src="/assets/search.svg"/></Icon>
                <Icon><img src="/assets/noun-person-7358557.svg"/></Icon>
                <Icon><img src="/assets/noun-shopping-7340929.svg"/></Icon>
            </DivNavbarSign>
        </DivNavbar>
    );
};

export default Navbar;