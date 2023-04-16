import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FcPhoneAndroid, FcSettings } from 'react-icons/fc'
import {
  FaMicrophone,
  FaCog,
  FaTabletAlt,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaCopyright,
} from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="land_page">
        <img src="smart_home.jpg" alt="norway" width="100%" />
        <div className={'navbar'}>
          <img src="logo.png" alt="small" height={80} width={80} />

          <div className="navbar_content">
            <a className={'active'} href="#home">
              Home
            </a>
            <a href="#about">About us</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
            <a href="#profile">profile</a>
          </div>
        </div>
        <h1>Smart Home</h1>
        <p>
          Discover the world of possibilities <br /> with smart home
        </p>
      </div>
      <div className="smobile">
        <img src="Smart_mobile.jpg" alt="norway" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="Live_future">
        <img src="lfuture.jpg" alt="norway" height={400} width={300} />
        <div className="content">
          <h1>Future world</h1>
          <ul>
            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <FaTabletAlt size={43} color="#9DD9F3" />
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>Smart Home Control</h3>
                <p>
                  Customize your surroundings with a tap of your smartphone
                </p>{' '}
              </span>
            </li>

            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <FaCog size={43} color="#9DD9F3" />
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>Intelligent Automation</h3>
                <p>Personalize your home schedule to suit your needs</p>{' '}
              </span>
            </li>

            <li
              style={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <FaMicrophone size={45} color="#9DD9F3" />
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>Voice-Activated Control</h3>
                <p>
                  Experience the ultimate level of convenience and control with
                  your voice.
                </p>{' '}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <br />

      <section className="grid-container">
        <div className="left-container">
          <div className="home_makeover">
            <h1>Smart Remote Home</h1>
            <p>
              Transform Your Home with Smart Nodes Customizable and
              User-Friendly Smart Home Products, Safety, and Comfort for a
              modern and efficient lifestyle.
            </p>
            {/* <p>
        Upgrade Your Home with Smart Node  Customizable and User-Friendly
        Smart Home Products
      </p> */}
            <div className="img_row">
              <div className="img-container">
                <img src="light_control.png" alt="norway" />
                <figcaption> light-control</figcaption>
              </div>
              <div className="img-container">
                <img src="smart-switch.png" alt="norway" />
                <figcaption> smart-switch</figcaption>
              </div>
              <div className="img-container">
                <img src="security.png" alt="norway" />
                <figcaption> security</figcaption>
              </div>
              <div className="img-container">
                <img src="smart_curtain.png" alt="norway" />
                <figcaption> smart-curtain</figcaption>
              </div>
              <div className="img-container">
                <img src="smart-speaker.png" alt="norway" />
                <figcaption> speaker</figcaption>
              </div>
              <div className="img-container">
                <img src="smart-tv.png" alt="norway" />
                <figcaption> smart-remote</figcaption>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="smhome">
            <img src="sm_home.jpg" alt="norway" />
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section className="hiw">
        <div className="hiw_img">
          <img src="hiw.png" alt="norway" />
        </div>

        <div className="hiwcontent">
          <h1>How it works</h1>

          <ul>
            <li>
              {/* <FaTabletAlt size={43} color="#9DD9F3" /> */}
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>
                  Step 1: Choose the automata theme
                </h3>
                <p>
                  Identify which areas of your home you want to automate, such
                  as lighting, security, or temperature control.
                </p>
              </span>
            </li>

            <li>
              {/* <FaCog size={43} color="#9DD9F3" /> */}
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>
                  Step 2: Buy Smart Home Devices
                </h3>
                <p>
                  Purchase smart home devices from trusted brands that are
                  compatible with your automation preferences.
                </p>
              </span>
            </li>

            <li>
              {/* <FaMicrophone size={45} color="#9DD9F3" /> */}
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>
                  Step 3: Schedule Installation
                </h3>
                <p>
                  Arrange for professional installation or set up the devices
                  yourself, depending on your comfort level.
                </p>
              </span>
            </li>

            <li>
              {/* <FaCog size={43} color="#9DD9F3" /> */}
              <span style={{ marginLeft: '0.5rem' }}>
                <h3 style={{ fontSize: '25px' }}>
                  Step 4: Connect to Your Home Network
                </h3>
                <p>
                  Use the app or website to connect the devices to your home
                  Wi-Fi network.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* <section className='bfooter'> */}
      <div className="ed-img">
        <div className="img1">
          <img src="smar_tover.jpg" alt="norway" />
        </div>
        <div className="img2">
          <img src="smart_over.jpg" alt="norway" width="85%" />
        </div>
      </div>
      {/* </section> */}

      <section className="footer-section" style={{ display: 'flex' }}>
        <div className="content">
          <h1>About us</h1>

          <ul>
            <li>
              <a href="#company">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3> About Company</h3>
                </span>
              </a>
            </li>

            <li>
              <a href="#products">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3>Products</h3>
                </span>
              </a>
            </li>

            <li>
              <a href="#blog">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3>blog</h3>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1>Help</h1>

          <ul>
            <li>
              <a href="#support">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3> Support</h3>
                </span>
              </a>
            </li>

            <li>
              <a href="#faqs">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3>FAQs</h3>
                </span>
              </a>
            </li>

            <li>
              <a href="#contact">
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3>Contact</h3>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="content">
          <h1>Contact us</h1>

          <ul style={{ marginBottom: '10px' }}>
            <li style={{ marginTop: '18px' }}>
              <a href="#call" style={{ display: 'flex', alignItems: 'center' }}>
                <FaPhoneAlt />
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3> +91 6302853787</h3>
                </span>
              </a>
            </li>

            <li style={{ marginTop: '18px' }}>
              <a
                href="#email"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaEnvelope />
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3> e-mail</h3>
                </span>
              </a>
            </li>

            <li style={{ marginTop: '18px' }}>
              <a
                href="#twitter"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <FaTwitter />
                <span style={{ marginLeft: '0.5rem' }}>
                  <h3>tweet</h3>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: 'whitesmoke',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <hr
          style={{
            border: '2px solid black',
            width: '70%',
            marginLeft: '15rem',
          }}
        />
        <div style={{ display: 'flex', margin: '10px' }}>
          <span style={{ marginLeft: '32rem', display: 'flex' }}>
            <FaCopyright size={25} />
            <p style={{ marginBottom: '30px', marginLeft: '10px' }}>
              {' '}
              2023 HA All rights reserved. Privacy Policy Terms of Use
            </p>
          </span>
        </div>
        {/* copyright */}
      </footer>
    </main>
  )
}
