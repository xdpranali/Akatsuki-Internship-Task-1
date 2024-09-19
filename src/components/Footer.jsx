import React from 'react'
import akatsuki from "../assets/images/akatsuki.png"


const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="wrapper">
        <a href="#" className="footer-logo">
          <img src= {akatsuki} alt="SimpleBlog Logo" width="150" />
        </a>

        <p className="footer-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
          Empowering future developers through coding education and community support.
        </p>
      </div>

      <div className="wrapper">
        <p className="footer-title" style={{ color: 'hsl(218, 23%, 23%)'}}>Quick Links</p>

        <ul style={{ color: 'hsl(216, 15%, 52%)'}}>
          <li>
            <a href="#" className="footer-link">Events</a>
          </li>

          <li>
            <a href="#" className="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="wrapper">
        <p className="footer-title" style={{ color: 'hsl(218, 23%, 23%)'}}>Legal Stuff</p>

        <ul style={{ color: 'hsl(216, 15%, 52%)'}}>
          <li>
            <a href="#" className="footer-link">Privacy Notice</a>
          </li>

          <li>
            <a href="#" className="footer-link">Cookie Policy</a>
          </li>

          <li>
            <a href="#" className="footer-link">Terms Of Use</a>
          </li>
        </ul>
      </div>
    </div>

    <p className="copyright" style={{ color: 'hsl(216, 15%, 52%)'}}>
      &copy; 2024 <a href="#" style={{ color: '#EF0000'}}>Akatsuki Coding Club</a>. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer