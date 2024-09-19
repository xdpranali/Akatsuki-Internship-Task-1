import React from 'react'
import akatsuki from "../assets/images/akatsuki.png"


const Hero = () => {
   return (
    <div className="hero">
     <div className="container">
       <div className="left">
         <h1 className="h1">
          Welcome to <b style={{ color: '#EF0000' }}>Akatsuki Coding Club</b> <br />
          
        </h1>
        <h2 className="h2">
          Join the Future of Tech!
        </h2>
  
        <p className="h3" style={{ color: 'hsl(216, 15%, 52%)' }}>
         Learn, Code, and Innovate with like-minded <abbr title="Developers, Designers, and Tech Enthusiasts">a11y</abbr>
       </p>

       <div className="btn-group">
         <a href="#contact" className="btn btn-primary" style={{ backgroundColor: '#EF0000' }}>Join Us</a>
         <a href="#about" className="btn btn-secondary" style={{ backgroundColor: 'hsl(214, 20%, 69%)' }}>Learn More</a>
       </div>
     </div>

      <div className="right">
         <div className="pattern-bg"></div>
         <div className="img-box">
           <img src={akatsuki} alt="Julia Walker" className="hero-img" />
         </div>
       </div>
     </div>
 </div>
  )
 }

export default Hero