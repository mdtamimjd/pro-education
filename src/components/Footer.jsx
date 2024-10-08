import React from 'react'
import Footercss  from '../modules/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faPinterest, faGooglePlusG, faInstagram,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCalendarCheck,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faPhoneVolume,faMapLocationDot,faSquare} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer>
    <div className={Footercss.footer}>
          {/* Email box */}
          <div className={Footercss.emailContainer}>
            <div className={Footercss.emailBox}>
                <div className={Footercss.emailTextBox}>
                    <img src="/images/icon/email-mic.png" alt="" className={Footercss.emailImg} />
                    <h2 className={Footercss.emailHeader}>Subscribe to Newsletter</h2>
                </div>
                <div className={Footercss.formBox}>
                <form action="" className={Footercss.form}>
                    <input type="email" placeholder='Enter your email' name="userEamil" id="" className={Footercss.email} autoComplete='off' />
                    <input type="submit" value="Submit" className={Footercss.submit} />
                </form>
                </div>
                </div>
            </div>
        <div className={Footercss.footerBox}>
          

            {/* Info address part */}
            <div className={Footercss.footerItemContainer}>
                <div className={Footercss.info}>
                    <div><img src="/images/icon/lite-logo.5b27143a.png" alt="" className={Footercss.infoLogo} /></div>
                    <p className={Footercss.hPra}>Sedut perspiciatis unde omnis iste natus error sitlutem acc usantium doloremque denounce with illo inventore veritatis</p>
                    <span className={Footercss.iconContainer}>
                        <FontAwesomeIcon icon={faFacebookF} className={Footercss.iconBar} />
                        <FontAwesomeIcon icon={faTwitter} className={Footercss.iconBar} />
                        <FontAwesomeIcon icon={faPinterest} className={Footercss.iconBar} />
                        <FontAwesomeIcon icon={faGooglePlusG} className={Footercss.iconBar} />
                        <FontAwesomeIcon icon={faInstagram} className={Footercss.iconBar} />
                    </span>
                </div>
                <div className={Footercss.address}>
                    <div className={Footercss.text_header}>Address <i></i></div>
                    <div className={Footercss.addressBox}>
                        <div className={Footercss.addressItem}>
                        <FontAwesomeIcon icon={faMapLocationDot} className={Footercss.addressIcon} /> 
                        <p>374 William S Canning Blvd, River MA 2721, USA</p>
                        </div>
                        <div className={Footercss.addressItem}>
                            <FontAwesomeIcon icon={faPhoneVolume} className={Footercss.addressIcon} />
                            <a href="" className={Footercss.linkBtnA}>(978)887-1287</a>
                        </div>
                        <div className={Footercss.addressItem}>
                            <FontAwesomeIcon icon={faEnvelope} className={Footercss.addressIcon} />
                            <a href="" className={Footercss.linkBtnA}>education22@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className={Footercss.courses}>
                    <div className={Footercss.text_header}>Courses <i></i> </div>
                        <div className={Footercss.coursesDiv}>
                        <li className={Footercss.coursesLi}><FontAwesomeIcon icon={faSquare} className={Footercss.coursesListIcon} />  <a href="" className={Footercss.linkBtnA}>Courses</a></li>
                        <li className={Footercss.coursesLi}><FontAwesomeIcon icon={faSquare} className={Footercss.coursesListIcon} /> <a href="" className={Footercss.linkBtnA}> Course Two</a></li>
                        <li className={Footercss.coursesLi}><FontAwesomeIcon icon={faSquare} className={Footercss.coursesListIcon} /> <a href="" className={Footercss.linkBtnA}> Single Course</a></li>
                        <li className={Footercss.coursesLi}><FontAwesomeIcon icon={faSquare} className={Footercss.coursesListIcon} /> <a href="" className={Footercss.linkBtnA}> Profile</a></li>
                        <li className={Footercss.coursesLi}><FontAwesomeIcon icon={faSquare} className={Footercss.coursesListIcon} /> <a href="" className={Footercss.linkBtnA}> Login</a><span className={Footercss.back}>/</span><a href="" className={Footercss.linkBtnA}>Register</a></li>
                        </div>
                </div>
                <div className={Footercss.recentPost}>
                    <div className={Footercss.text_header}>Recent Posts <i></i> </div>
                    <div className={Footercss.postContaine}>
                        <div className={Footercss.postItem}>
                            <div><img src="/images/post1.2b3ef030.jpg" alt="" className={Footercss.postImages} /></div>
                            <div>
                                <p className={Footercss.praH4}>High school program starting soon 2025</p>
                                <p className={Footercss.pra}><FontAwesomeIcon icon={faCalendarCheck} className={Footercss.tomato} /> October 15, 2020</p>
                            </div>
                        </div>
                        <div className={Footercss.postItem}>
                            <div><img src="/images/post2.6f3cfdef.jpg" alt="" className={Footercss.postImages} /></div>
                            <div>
                                <p className={Footercss.praH4}>Shutdown of schools extended to Aug 31</p>
                                <p className={Footercss.pra}><FontAwesomeIcon icon={faCalendarCheck} className={Footercss.tomato} /> October 20, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            {/* footer bottom part*/}
            <div className={Footercss.copyRigth}>
                <p>© 2022 All Rights Reserved. Designed By <a className={Footercss.copyRigthText}>MdTamim</a></p>
                <ul className={Footercss.copyRigthUl}>
                    <li><a href="">Event</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>

    </div>
    </footer>
  )
}

export default Footer
