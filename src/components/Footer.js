import './Footer.css';
import {FaFacebook, FaInstagram} from 'react-icons/fa'
export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="col1 col-4 footer-column">
                    <div className='iteams'>
                        <dl>
                            <dt style={{paddingBottom:"20px"}}>Organization</dt>
                            <dd>About Us</dd>
                            <dd>Our Vision</dd>
                            <dd>Gallery</dd>
                        </dl>
                    </div>
                </div>
                <div className="col2 col-4 footer-column">
                    <div className='iteams'>
                        <dl>
                            <dt style={{paddingBottom:"20px"}}>Our Work</dt>
                            <dd>Healthcare</dd>
                            <dd>Education</dd>
                            <dd>Genaral</dd>
                            <dd>Covid Care</dd>
                        </dl>
                    </div>
                </div>
                
                <div className="col3 col-4 footer-column">
                    <div className='iteams'>
                        <dl>
                            <dt style={{paddingBottom:"20px"}}>Follow US</dt>
                            <dd >
                                <a style={{padding:'10px'}} href='https://www.facebook.com/rjbagadia.charitabletrust'><FaFacebook style={{fontSize:'25px', backgroundColor:'Blue', color:'white', borderRadius:'50%'}}></FaFacebook></a>

                                <a href='https://www.instagram.com/rjbct/?hl=en'><FaInstagram style={{fontSize:'25px', color:'black', background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius:'10%'}}></FaInstagram></a>
                                
                            </dd>
                        </dl>
                    </div>
                </div>

            </div>
        
        </>
    )
}