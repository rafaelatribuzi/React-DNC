import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Header from "../components/Header/Header"



function Projects () {
    return (
        <>
        <Header />
        <Banner title='Projects' image='Project.jpg' />
        <div className="container">
            
            <ProjectsList/>
        </div>
        
        <Footer/>
        </>
    )
}

export default Projects