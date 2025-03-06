import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vw;
    background-color: #f68294;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

export default function Header() {
        return(
          <StyledHeader>
              <h1>Sophia Howson</h1>
              <p>My resume!</p>
          </StyledHeader>
        );
}