import {Link} from 'react-router-dom'

//ASSETS
import './Footer.css' 
import BrasilIcon from '../../assets/brasil.svg'
import UsaIcon from '../../assets/usa.svg'
import Logo from '../../assets/dnc-logo.svg'
import FacebookIcon from '../../assets/facebook.svg'
import TwitterIcon from '../../assets/twitter.svg'
import InstagramIcon from '../../assets/instagram.svg'
import LinkedinIcon from '../../assets/linkedin.svg'




function Footer () {
    return (
        <footer>
            <div className="container">
                <div className='d-flex jc-space-between mobile-fd-column'>
                    <div className='footer-logo-col'>
                        <img src={Logo} className='footer-logo'/>   
                        <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className='d-flex social-links'>
                            <a href="http://google.com" target='_blank'>
                                <img src={FacebookIcon}/>
                            </a>
                            <a href="http://google.com" target='_blank'>
                                <img src={TwitterIcon}/>
                            </a>
                            <a href="http://google.com" target='_blank'>
                                <img src={LinkedinIcon}/>
                            </a>
                            <a href="http://google.com" target='_blank'>
                                <img src={InstagramIcon}/>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>Pages</h3>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>Contact</h3>
                            <p className='gray-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className='gray-1-color'>suporte@escoladnc.com.br</p>
                            <p className='gray-1-color'>(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='gray-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <img src={BrasilIcon} height= '29px'/>
                        <img src={UsaIcon} height= '29px'/>
                    </div>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer