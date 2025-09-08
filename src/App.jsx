import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import StarCanvas from "./components/canvas/Stars";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { useState, Suspense, lazy } from "react";

// Lazy load heavy components
const LazyProjects = lazy(() => import("./components/sections/Projects"));
const LazyProjectDetails = lazy(() => import("./components/Dialog/ProjectDetails"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ErrorBoundary>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <Body>
            <ErrorBoundary>
              <StarCanvas />
            </ErrorBoundary>
            <AnimatePresence>
              <div>
                <ErrorBoundary>
                  <Hero />
                </ErrorBoundary>
                <Wrapper>
                  <ErrorBoundary>
                    <Skills />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Experience />
                  </ErrorBoundary>
                </Wrapper>
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyProjects openModal={openModal} setOpenModal={setOpenModal} />
                  </Suspense>
                </ErrorBoundary>
                <Wrapper>
                  <ErrorBoundary>
                    <Education />
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <Contact />
                  </ErrorBoundary>
                </Wrapper>
                <ErrorBoundary>
                  <Footer />
                </ErrorBoundary>

                {openModal.state && (
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <LazyProjectDetails
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                      />
                    </Suspense>
                  </ErrorBoundary>
                )}
              </div>
            </AnimatePresence>
          </Body>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
