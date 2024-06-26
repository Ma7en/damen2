/* eslint-disable no-unused-vars */
// import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
    /* &:link,
    &:visited {
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
        font-size: 2.5rem;
        color: var(--black);
        transition: var(--main-transition);
        svg {
            color: var(--green);
            transition: var(--main-transition);
        }
    } */
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {} */
`;

function Logo() {
    return (
        <>
            <StyledLogo to="/home" className="logo">
                <img
                    src="/images/logo/Damen Cash colored English.svg"
                    alt="Damen logo"
                />
            </StyledLogo>

            {/* <StyledLogo to="/home" className="logo">
                <FaHeartbeat />
                <span>medcare.</span>
            </StyledLogo> */}

            {/* <a href="#" className="logo">
                <img src="./assets/images/logo.svg" alt="Damen logo" />
            </a> */}
        </>
    );
}

export default Logo;
