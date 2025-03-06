import {styled} from "styled-components";
import StyledP from "./styles/StyledP";

const StyledImg = styled.img`
    max-width: 500px;
    margin-bottom: 2vw;

    @media screen and (max-width: 900px) {
        display: block;
        margin: auto;
        max-width: 50%;
    }
`;

export default function Home() {
    return (
        <>
            <StyledImg src="/headshot.JPEG" alt="Headshot of me, Sophia Howson" id="headshot"/>
            <StyledP>My name is Sophia Howson. I'm a senior studying computer science at Boston University. I currently
                live in Boston, but I'm from New Jersey. In my free time I ice skate on a competitive team, craft,
                read books, and hang out with my friends!</StyledP>
            <StyledP>I am looking for post graduation opportunities as I finish my last semester of college.</StyledP>
            <StyledP>Here you can find the different sections of my resume such as my education, previous employments,
                and projects.</StyledP>
        </>
    );
}