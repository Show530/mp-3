import { styled } from 'styled-components';
import MarginedH2 from "./styles/MarginedH2";
import StyledP from "./styles/StyledP";

const StyledTr = styled.tr`
    width: 50%;
`;

const StyledTableH3 = styled.h3`
    text-align: center;
`;

const StyledTd = styled.td`
    vertical-align: top;
    width: 15%;
`;


export default function Skills() {
    return (
        <>
            <MarginedH2>Skills</MarginedH2>
            <StyledP>Here is a list of skills I've gained from my classes, work, and general activities! See the rest of the
                resume for any specific experience, but these are a sample of some skills gained.</StyledP>
            <table>
                <thead>
                    <tr>
                        <StyledTd><StyledTableH3>Languages/Technical Skills</StyledTableH3></StyledTd>
                        <StyledTd><StyledTableH3>Soft Skills</StyledTableH3></StyledTd>
                    </tr>
                </thead>
                <tbody>
                    <StyledTr>
                        <StyledTd>
                            <ul>
                                <li>C</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Python</li>
                                <li>LatEx</li>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>VS Code</li>
                                <li>WebStorm</li>
                                <li>Windows Terminal</li>
                                <li>Git</li>
                                <li>React</li>
                                <li>Django</li>
                            </ul>
                        </StyledTd>
                        <StyledTd>
                            <ul>
                                <li>Communication</li>
                                <li>Leadership</li>
                                <li>Teamwork</li>
                                <li>Adaptability</li>
                                <li>Creativity</li>
                                <li>Critical thinking</li>
                                <li>Problem solving</li>
                                <li>Organization</li>
                                <li>Flexibility</li>
                                <li>Time management</li>
                                <li>Presentation skills</li>
                                <li>Self-motivation</li>
                                <li>Teaching</li>
                                <li>Mentoring</li>
                                <li>Resilience</li>
                            </ul>
                        </StyledTd>
                    </StyledTr>
                </tbody>
            </table>
        </>
    );
}