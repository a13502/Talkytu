import * as React from "react";
import "./footer.css";
 import {
  address,
  phone,
  mail,
  youtube,
  LinkedIn,
  Twitter,
  Instagram,
  talkytu
 } from './assets/Icons';


 
function footer(){
  return (
    <main className="MainWrapper">
      <header >
        <nav className="NavWrapper">
          <section className="SectionWrapper">
            <div className="ImageAndText">
              <img className="Icon" src={talkytu} alt="Feature highlight" />
              <p className="TextDescription">Opt to be paired with a tutor by accessing the questionnaire through the 'Get a match'.</p>
              <div className="SocialMediaIcons">
                <img className="Icon" src={Instagram} alt="Instagram" />
                <img className="Icon" src={Twitter} alt="Twitter(X)" />
                <img className="Icon" src={LinkedIn} alt="LinkedIn" />
                <img className="Icon" src={youtube} alt="YouTube" />
              </div>
            </div>
            <div className="InfoLinks">
              <aside className="QuickLinks">
                <h2>Quick Links</h2>
                <ul>
                  <li>About Us</li>
                  <li>Become a Tutor</li>
                </ul>
              </aside>
              <aside className="SupportInfo">
                <h2>Support</h2>
                <div className="SupportDetails">
                  <img className="Icon" src={mail} alt="Email" />
                  <span>talkytu@gmail.com</span>
                </div>
                <div className="SupportDetails">
                  <img className="Icon" src={phone} alt="Phone" />
                  <span>+91 1234567890</span>
                </div>
                <div className="Address">
                  <img className="Icon" src={address} alt="Location" />
                  <span>Ahmedabad, India</span>
                </div>
              </aside>
              <aside className="ActionLinks" style={{color: "white"}}>
                <h2>Get Involved</h2>
                <ul>
                  <li>Create Account</li>
                  <li>Become a Tutor</li>
                  <li>Find Tutor</li>
                </ul>
              </aside>
            </div>
          </section>
        </nav>
        

 <section className="StyledSection" />
        <footer className="Footer">
          <span>© 2023 Talkytu. All rights reserved.</span>
          <div className="LegalLinks Footer">
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </footer>
      </header>
    </main>
  );
};



export default footer;
