import { styled } from "styled-components";
import MarginedH3 from "./styles/MarginedH3";
import MarginedUl from "./styles/MarginedUl";
import StyledP from "./styles/StyledP";

const DatesH4 = styled.h4`
    margin-bottom: 1vw;
`;

export default function Education() {
    return (
        <>
            <h2>Education</h2>
            <MarginedH3>Boston University, College of Arts and Sciences</MarginedH3>
            <h4>B.A. in Computer Science</h4>
            <DatesH4>January 2022 - May 2025</DatesH4>
            <MarginedUl>
                <li>Cumulative GPA: 3.82, Dean’s List (7 semesters)</li>
            </MarginedUl>
            <h4>Courses</h4>
            <MarginedUl>
                <li>Data Structures and Algorithms</li>
                <li>Discrete Math</li>
                <li>Computer Systems</li>
                <li>Geometric Algorithms</li>
                <li>Probability in Computing</li>
                <li>Intro to Information Security</li>
                <li>Software Engineering</li>
                <li>Intro to Databases</li>
                <li>Intro to Algorithms</li>
                <li>Intro to Artificial Intelligence</li>
                <li>Distributed Systems</li>
                <li>Theory of Computation</li>
                <li>Mobile App Development</li>
                <li> Full Stack Development</li>
            </MarginedUl>
            <MarginedH3>Academy of Information Technology</MarginedH3>
            <h4>High School Diploma</h4>
            <DatesH4>September 2017 - June 2021</DatesH4>
            <StyledP>4 years of education with a focus on computer science and business in the form of elective courses.</StyledP>
        </>
    );
}