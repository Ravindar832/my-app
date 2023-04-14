
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FcPhoneAndroid, FcSettings } from 'react-icons/fc'
import { FaMicrophone, FaCog, FaTabletAlt } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="land_page">
        <img src="smart_home.jpg" alt="norway" width={'100'}/>
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
          Discover the world of possibilities <br/> with smart home
        </p>
      </div>
      <div className="smobile">
        <img src="Smart_mobile.jpg" alt="norway" />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

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

      <br/>
      <br/>
      <br/>

      <section className="grid-container">
        <div className="left-container">
          <div className="home_makeover">
            <h1>Smart Remote Home</h1>
            <p>
              Transform Your Home with Smart Node<br/>s Customizable and
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

      <br/>
      <br/>
      <br/>

      {/* about us  */}
      <div className="about_us">
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          labore ea quae, tempore nisi ratione! Labore, quod ullam, odit laborum
          sapiente quaerat qui perspiciatis eos necessitatibus maiores vel
          officia velit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Pariatur labore ea quae, tempore nisi ratione! Labore, quod
          ullam, odit laborum sapiente quaerat qui perspiciatis eos
          necessitatibus maiores vel officia velit.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur labore ea quae, tempore nisi
          ratione! Labore, quod ullam, odit laborum sapiente quaerat qui
          perspiciatis eos necessitatibus maiores vel officia velit.
        </p>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="products">
        <h1>products site navigation/products</h1>
        <p>with img</p>
      </div>

      <br/>
      <br/>
      <br/>
      <div className="about_brands">
        <p>about brands and smart_home </p>
      </div>
      <div className="name">
        <p>hello ravindar</p>
      </div>
      <br/>
      <br/>
      <div className="contact">
        <h3>support</h3>
        <a href="#email">contacts</a>
      </div>
      <br/>
      <br/>
      <div className="copyrights">
        <h1>copyrights</h1>
      </div>
    </main>
  )
}
