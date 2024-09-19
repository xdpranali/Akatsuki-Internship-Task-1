import React from 'react';
import akatsuki from "../assets/images/akatsuki.png"

const Navbar = () => {
  return (
    <header>
    <div className="container">
      <nav class="navbar">
        <a href="#">
        <img src= {akatsuki} alt="SimpleBlog Logo" width="150" />
        </a>

        <div className="btn-group">
          <button className="theme-btn theme-btn-mobile light">
            <ion-icon name="moon" class="moon"></ion-icon>
            <ion-icon name="sunny" class="sun"></ion-icon>
          </button>

          <button className="nav-menu-btn">
            <ion-icon name="menu-outline"></ion-icon>
          </button>
        </div>

        <div class="flex-wrapper">
          <ul class="desktop-nav">
            <li>
              <a href="#" className="nav-link">Home</a>
            </li>

            <li>
              <a href="#" className="nav-link">Events</a>
            </li>

            <li>
              <a href="#" className="nav-link">About Us</a>
            </li>

            <li>
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="mobile-nav">
          <button className="nav-close-btn">
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="wrapper">
            <p className="h3 nav-title">Main Menu</p>

            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">About Me</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="h3 nav-title">Topics</p>

            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Database</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Accessibility</a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">Web Performance</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
}

export default Navbar;
