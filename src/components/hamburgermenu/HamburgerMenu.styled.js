import styled from "styled-components";

export const StyledSpan = styled.span`
        visibility: hidden;
        background: #6b6161;
        color: #fff;
        text-align: center;
        padding: .2em .6em;
        font-size: .9rem;
        border-radius: 5px;
       
        /* Position the tooltip text - see examples below! */
        position: absolute;
        left: 50px;
        top: 50px;
`;

export const StyledHamburgerMenuContainer = styled.div`
    border: 3px solid ${({ menuOpen }) => menuOpen ? "transparent" : "#333"};
    display: inline-block;
    cursor: pointer;
    padding: .25em;

    &:hover ${StyledSpan}{
        transition-delay: 1s;
        visibility: visible;
    }
`;

const StyledBar = styled.div`
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
  background: ${({ menuOpen }) => menuOpen ? "red" : "#333"};
`;

export const StyledBar1 = styled(StyledBar)`
    ${({ menuOpen }) => menuOpen && "-webkit-transform: rotate(-45deg) translate(-9px, 6px); transform: rotate(-45deg) translate(-9px, 6px);"};
`;

export const StyledBar2 = styled(StyledBar)`
opacity: ${({ menuOpen }) => menuOpen && "0"};
`;

export const StyledBar3 = styled(StyledBar)`
    ${({ menuOpen }) => menuOpen && "-webkit-transform: rotate(45deg) translate(-8px, -8px); transform: rotate(45deg) translate(-8px, -8px); "};
`;