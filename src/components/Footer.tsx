import { styled } from "styled-components";
import { Link } from "react-router";

const StyledFooter = styled.footer`
    padding: 1vw;
    text-align: center;
`;


export default function Footer() {
    return (
        <StyledFooter>
            <p>All rights reserved by Sophia Howson <Link to={`/credits`}>Credits</Link> &copy;</p>
        </StyledFooter>
    );
}