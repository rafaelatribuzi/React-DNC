import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ContactForm from "../components/ContactForm/ContactForm"




function Contact () {
    return (
        <>
        <Header />
        <Banner title='Contact' image='Contact.jpg' />
        <div className="container">
            
            <ContactForm/>
        </div>
        
        <Footer/>
        </>
    )
}
export default Contact