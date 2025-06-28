import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="container">
        <header>
          <nav>
            <a class="logo" href="#">
              <img src="./Logo (1).png" alt="" />
            </a>
          </nav>
          <nav>
            <ul class="nav-links">
              <li class="a">
                <a href="#">Home</a>
              </li>
              <li class="a">
                <a href="#">Features</a>
              </li>
              <li class="a">
                <a href="#">Community</a>
              </li>
              <li class="a">
                <a href="#">Blog</a>
              </li>
              <li class="a">
                <a href="#">Pricing</a>
              </li>
              <li class="register">
                <a class="button" href="#">
                  Register Now <i class="fa-solid fa-arrow-right fa-beat"></i>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main>
        <section class="section-1">
          <div class="container1">
            <div class="text">
              <p>
                Lessons and insights <span>from 8 years</span>
              </p>
              <p>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <a className="button-1">Register</a>
            </div>
            <div>
              <img class="programm" src="./Illustration.svg" alt="programm" />
            </div>
          </div>
        </section>
        <div class="container">
          <section class="section-2">
            <div class="text-1">
              <p>Our Clients</p>
              <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="imges">
              <ul className="Logos">
                <li>
                  <img src="./Logo.svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (1).svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (2).svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (3).svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (4).svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (5).svg" alt="Logo" />
                </li>
                <li>
                  <img src="./Logo (2).svg" alt="Logo" />
                </li>
              </ul>
            </div>
          </section>
          <section className="section-3">
            <div className="text-2">
              <p>Manage your entire community in a single system</p>
            </div>
            <div className="cards">
              <div className="card">
                <img src="./Icon (3).svg" alt="Icon" />
                <h3>Membership Organisations</h3>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="card">
                <img src="./Icon (1).svg" alt="Icon" />
                <h3>National Associations</h3>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="card">
                <img src="./Icon (2).svg" alt="Icon" />
                <h3>Clubs And Groups</h3>
                <p>
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </section>
          <section className="section-4">
            <div className="flex">
              <div className="left">
                <img src="./rafiki.svg" alt="" />
              </div>
              <div className="right">
                <h1>The unseen of spending three years at Pixelgrade</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <a className="button">Learn More</a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
