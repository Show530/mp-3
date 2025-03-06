import MarginedH2 from "./styles/MarginedH2";
import MarginedH3 from "./styles/MarginedH3";
import MarginedUl from "./styles/MarginedUl";
import MyCalculator from "./MyCalculator";

export default function Projects() {
    return (
        <>
            <MarginedH2>Projects</MarginedH2>
            <MarginedH3>Tetris Machine Learning AI model | Boston, MA</MarginedH3>
            <MarginedUl>
                <li>Designed a custom reward function to optimize agent performance, evaluating game states for
                    effectiveness and
                    aligning with Tetris strategies.
                </li>
                <li>Implemented exploration strategies to balance exploitation of known policies and discovery of novel
                    gameplay
                    approaches.
                </li>
                <li>Trained neural networks using temporal difference learning with replay buffers, leveraging
                    supervised learning
                    techniques for game trajectory data.
                </li>
            </MarginedUl>
            <MarginedH3>Web Penetration Testing lab | Boston, MA</MarginedH3>
            <MarginedUl>
                <li>Identified and exploited vulnerabilities like SQL Injection, cross-site scripting, and cross-site
                    request forgery in a
                    simulated web application to test security defenses using Python, MySQL, HTML, and JavaScript.
                </li>
                <li>Exploited authentication vulnerabilities (e.g., brute-force, hash reversal, XOR encryption) to gain
                    unauthorized
                    admin access in web applications.
                </li>
                <li>Developed automated scripts using Python and Docker to bypass security mechanisms and test password
                    storage
                    flaws in 6 separate accounts.
                </li>
            </MarginedUl>
            <MarginedH3>Java Script Calculator</MarginedH3>
            <MyCalculator/>
        </>
    );
}