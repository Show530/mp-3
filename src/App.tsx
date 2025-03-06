import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Education from "./components/Education";
import Employment from "./components/Employment.tsx";
import LeadershipActivities from "./components/LeadershipActivities.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {styled} from "styled-components";

const StyledPageWrapper = styled.div`
    width: 80vw;
    background-color: pink;
    margin: auto;
    font-size: calc(1px + 1.2vw);
    font-family: Georgia, Garamond, serif;
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    padding: 2vw;
    height: 100vh;
    
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`;

function Root() {
    return(
        <>
            <StyledPageWrapper>
                <Header />
                <StyledContainer>
                    <Nav/>
                    <StyledMain>
                        <Routes>
                            <Route path={`/`} element={<Home/>}/>
                            <Route path={`/Education`} element={<Education/>} />
                            <Route path={`/Employment`} element={<Employment/>}/>
                            <Route path={`/LeadershipActivities`} element={<LeadershipActivities/>}/>
                            <Route path={`/Projects`} element={<Projects/>}/>
                            <Route path={`/Skills`} element={<Skills/>}/>
                        </Routes>
                    </StyledMain>
                </StyledContainer>
                <Footer/>
            </StyledPageWrapper>
        </>
    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
