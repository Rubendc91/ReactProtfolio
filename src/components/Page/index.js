import React from 'react';
import About from "../pages/about";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Resume from "../pages/resume";
import PageContent from '../PageContent';


function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === "About") {
            return <About />
        } else if (currentPage.name === "Portfolio") {
            return <Portfolio />
        } else if (currentPage.name === "Contact") {
            return <Contact />
        } else if (currentPage.name === "Resume") {
            return <Resume />
        } else {
            return <About />
        }
    }
    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}
export default Page;