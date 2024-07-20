import Image from "next/image";
import Logo from "@/assets/logo.png";
import AppStore from "@/assets/app-store.png";
import GoogolePlay from "@/assets/google-play.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="first-footer-row">
        <div className="first-footer-col">
          <div className="logo-with-name">
            <Image src={Logo} alt="Logo" className="logo" />
            <h3>Comicz</h3>
          </div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.facebook.com/MTDXGil" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.youtube.com/@MTDGamer" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>

            <li className="social-item">
              <a href="https://www.instagram.com/mtdx_gil" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.tiktok.com/@mintyz1314" target="_blank">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>
        <div className="second-footer-col">
          <h4>Download the app</h4>
          <ul className="download-store">
            <li>
              <a href="#">
                <Image src={AppStore} alt="App Store" fill />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src={GoogolePlay} alt="Google Play" fill />
              </a>
            </li>
          </ul>
          <div className="contact">
            <h4>Contact us</h4>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>tienkhonggo2510@gmail.com</span>
          </div>
        </div>
        <div className="third-footer-col">
          <h3>Sign up</h3>
          <p>Get notified about new change to Comicz!</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
          <p>
            By subscribing you agree with our{" "}
            <span className="term-and-conditions">Term and Conditions</span>
          </p>
        </div>
      </div>
      <div className="second-footer-row">
        <hr />
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <span>Terms and Conditions</span>
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </div>
          <span>&#169; Copyright by Minty</span>
        </div>
      </div>
    </footer>
  );
}
