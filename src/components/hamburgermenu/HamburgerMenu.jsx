import React, { useState } from "react";
import {
    StyledHamburgerMenuContainer,
    StyledBar1,
    StyledBar2,
    StyledBar3,
    StyledSpan,
} from "./HamburgerMenu.styled";

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };

    return (
        <StyledHamburgerMenuContainer
            onClick={handleHamburgerClick}
            menuOpen={menuOpen}
        >
            <StyledBar1 menuOpen={menuOpen} />
            <StyledBar2 menuOpen={menuOpen} />
            <StyledBar3 menuOpen={menuOpen} />
            {!menuOpen ? (
                <StyledSpan>Open menu</StyledSpan>
            ) : (
                <StyledSpan>Close menu</StyledSpan>
            )}
        </StyledHamburgerMenuContainer>
    );
};

export default HamburgerMenu;
