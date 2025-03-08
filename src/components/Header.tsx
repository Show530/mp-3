import { styled } from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router";

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
    const currentPath=useParams();

    let lastValue=Object.values(currentPath).pop() || "";
    lastValue = lastValue.charAt(0).toUpperCase() + lastValue.slice(1);
    if (lastValue === "") {
        lastValue = "Home";
    }
    else if (lastValue==="LeadershipActivities") {
        lastValue = "Leadership and Activities";
    }

    useEffect(()=>{
        document.title= lastValue + " | Resume";
    },[lastValue])

    return(
      <StyledHeader>
          <h1>Sophia Howson</h1>
          <p> {lastValue} </p>
      </StyledHeader>
    );
}