import { Link } from "react-router";
import { styled } from "styled-components";

const StyledNav = styled.nav`
    width: 25%;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    text-align: center;
    /*background-color: #d174c9;*/
    padding-left: 0;

    @media screen and (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
const StyledLi = styled.li`
    width: 50%;
    padding: 2vh 0;
    margin: 2vw auto;
    background-color: #d788d0;
    border-radius: 5%;
    text-decoration: none;

    @media screen and (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        padding: 1% .5%;
        margin: 1% .5%;
        display: grid;
        align-items: center;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/Education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/Employment`}>Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/LeadershipActivities`}>Leadership and Activities</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/Projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/Skills`}>Skills</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}