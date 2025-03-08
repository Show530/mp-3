import { styled } from "styled-components";
import { useState } from "react";

const StyledInputsDiv = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

const StyledLabel = styled.label`
    margin-right: 1vw;
`;

const StyledFirstInput = styled.input`
    border:  #f68294 solid 0.2vw;
    background-color: antiquewhite;
    margin-right: 2vw;

    @media screen and (max-width: 900px) {
        width: 50%;
        margin: auto;
    }
`;

const StyledSecondInput = styled.input`
    border:  #f68294 solid 0.2vw;
    background-color: antiquewhite;

    @media screen and (max-width: 900px) {
        width: 50%;
        margin: auto;
    }
`;

const StyledButtonsDiv = styled.div`
    padding-top: 0.5vw;
    text-align: center;
`;

const StyledButton = styled.button`
    margin-right: 1vw;
    border:  #f68294 solid 0.2vw;
    background-color: antiquewhite;
    border-radius: 15%;
`;

const StyledOutput = styled.output`
    padding-top: 0.5vw;
    text-align: center;
    margin-bottom: 1vw;
`;

export default function MyCalculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [outputNumber, setOutputNumber] = useState(0);

    let outputtedElement= document.getElementById("output");

    function display(result: number) {
        if(outputtedElement != null) {

            // outputtedElement.innerHTML = String(result);
            setOutputNumber(result);
            // color red
            if (result < 0) {
                outputtedElement.style.color = "red";
            }
            // color black
            else {
                outputtedElement.style.color = "black";
            }

        }
    }

    function addition() {
        const result= firstNumber + secondNumber;

        display(result);
    }

    function subtraction() {

        const result = firstNumber - secondNumber;

        display(result);
    }

    function multiplication() {

        const result = firstNumber * secondNumber;

        display(result);
    }

    function division() {

        const result = firstNumber / secondNumber;

        display(result);
    }

    function powerFunc() {

        let result = 1;

        if (firstNumber === 0 && secondNumber === 0) {
            let result = 0;
            display(result);
        }
        else {
            for (let i = 1; i <= secondNumber; i++) {
                result *= firstNumber;
            }
            display(result);
        }

    }

// reset calc - 3 fields
    function resetCalc() {
        if (outputtedElement != null) {
            setOutputNumber(0);
            // outputtedElement.innerHTML = '';
            setFirstNumber(0);
            setSecondNumber(0);
        }
    }

    return (
        <>
            <StyledInputsDiv>
                <StyledLabel htmlFor="first-number">First number: </StyledLabel>
                <StyledFirstInput type="number"
                                  value={firstNumber}
                                  onChange={(e) => setFirstNumber(Number(e.target.value))}/>
                <StyledLabel htmlFor="second-number">Second number: </StyledLabel>
                <StyledSecondInput type="number"
                                   value={secondNumber}
                                   onChange={(e) => setSecondNumber(Number(e.target.value))}/>
            </StyledInputsDiv>
            <StyledButtonsDiv>
                <StyledButton onClick={addition}> +</StyledButton>
                <StyledButton onClick={subtraction}> -</StyledButton>
                <StyledButton onClick={multiplication}> *</StyledButton>
                <StyledButton onClick={division}> /</StyledButton>
                <StyledButton onClick={powerFunc}> **</StyledButton>
                <StyledButton onClick={resetCalc}> Clear</StyledButton>
            </StyledButtonsDiv>
            <StyledOutput id="output">{outputNumber}</StyledOutput>
        </>
    );

}