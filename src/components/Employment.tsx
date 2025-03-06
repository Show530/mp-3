import MarginedH2 from "./styles/MarginedH2";
import MarginedH3 from "./styles/MarginedH3";
import MarginedUl from "./styles/MarginedUl";

export default function Employment() {
    return (
        <>
            <MarginedH2>Employment</MarginedH2>
            <MarginedH3>Relevant Employment</MarginedH3>
            <h4>Intro to CS II Course Staff | Boston, MA</h4>
            <h4>January 2023 - Present</h4>
            <h5>Teaching Assistant / Course Assistant / Grader</h5>
            <MarginedUl>
                <li>Instructed and mentored 250+ students one-on-one, providing personalized feedback to reinforce key data structure concepts, and enhancing problem-solving skills.</li>
                <li>Led and taught 2 weekly lab sections with 20 students each answering and addressing student questions about core concepts, clarifying complex topics, and fostering collaborative learning.</li>
                <li>Graded over 300 student submissions of weekly theoretical problem sets per semester, ensuring academic integrity and consistency.</li>
                <li>Instructed and mentored 250+ students in advanced topics of searching and sorting, recursion, algorithm analysis, linked lists, stacks, queues, trees, and hash tables in Java, providing personalized feedback reinforcing concepts.</li>
            </MarginedUl>
            <MarginedH3>Additional Work Experience</MarginedH3>
            <h4>Learn To Skate / Summer Camp | Randolph, NJ</h4>
            <h4>December 2019 - August 2023</h4>
            <h5>Lead Instructor</h5>
            <MarginedUl>
                <li>Taught skating skills to children and adults, adapting lessons to different skill levels from beginner to advanced.</li>
                <li>Developed personalized lesson plans for children with disabilities, focusing on individual needs.</li>
            </MarginedUl>
            <h4>Barnes and Noble | Livingston, NJ</h4>
            <h4>November 2021 - January 2022</h4>
            <h5>Bookseller</h5>
            <MarginedUl>
                <li>Practiced excellent customer service and collaborated with colleagues to enhance the work environment.</li>
                <li>Organized book displays and ensured the store remained clean and inviting.</li>
                <li>Fulfilled over 50 online book orders per week, maintaining accuracy and efficiency.</li>
            </MarginedUl>
        </>
    );
}