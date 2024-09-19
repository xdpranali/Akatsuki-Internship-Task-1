import React from 'react'
import author from '../assets/images/author.png'
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.png";
import blog3 from "../assets/images/blog-3.png";
import blog4 from "../assets/images/blog-4.png";
import blog5 from "../assets/images/blog-5.png";
import blog6 from "../assets/images/blog-6.png";
import blog7 from "../assets/images/blog-7.png";
import blog8 from "../assets/images/blog-8.png";
import blog9 from "../assets/images/blog-9.png";
import blog10 from "../assets/images/blog-10.png";

const Blog = () => {
  return (
    <div className="main" style={{ backgroundColor:'hsl(0, 0%, 97%)'}}>
    <div className="container">
      

      <div className="blog">
        <h2 className="h2">Latest Blog Post</h2>

        <div className="blog-card-group">
          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog1} alt="Building microservices with Dropwizard, MongoDB & Docker"
                width="250" className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Database
              </button>

              <h3>
                <a href="#" className="h3"style={{ color: 'hsl(218, 23%, 23%)'}}>
                  Building microservices with
                  Dropwizard, MongoDB & Docker
                </a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                This NoSQL database oriented to
                documents (by documents like JSON)
                combines some of the features from
                relational databases, easy to use and
                the multi-platform is the best option
                for scale up and have fault tolerance,
                load balancing, map reduce, etc.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia Walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2022-01-17">Jan 17, 2022</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT3M">3 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog2} alt="Fast web page loading on a $20 feature phone" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Web Performance
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Fast web page loading on a $20
                  feature phone</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                Feature phones are affordable (under
                $20-25), low-end devices enabling 100s
                of millions of users in developing
                countries to leverage the web. Think of
                them as a light version of a smart
                phone.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-12-10">Dec 10, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT2M">2 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog3} alt="Accessibility Tips for Web Developers" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Accessibility
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Accessibility Tips for Web
                  Developers</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                It's awesome to build sites that are
                inclusive and accessible to everyone.
                There are at least six key areas of
                disability we can optimize for: visual,
                hearing, mobility, cognition, speech and
                neural. Many tools and resources can
                help here, even if you're totally new to
                web accessibility.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-11-28">Nov 28, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT4M">4 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog4} alt="Dynamically Securing Databases using Hashicorp Vault"
                width="250" className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Database
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Dynamically Securing Databases
                  using Hashicorp Vault</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                Nowadays, it's hard to profoundly talk
                about security in the IT industry, since
                it has to be considered on so many
                different levels: from securing code
                chunks, securing containers, up to
                securing complex infrastructures and
                defining strong authorization and
                authentication policies across the
                enterprise.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-11-20">Nov 20, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT4M">4 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog5}
                alt="Adaptive Loading - Improving Web Performance on low-end devices" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Web Performance
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Adaptive Loading - Improving Web
                  Performance on low-end devices</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                Adaptive Loading: Do not just respond
                based on screen size, adapt based on
                actual device hardware. Any user can
                have a slow experience. In a world with
                widely varying device capabilities, a
                "one-size" fits all experience may not
                always work. Sites that delight users on
                high-end devices can be unusable on
                low-end ones, particularly on median
                mobile and desktop hardware and in
                emerging markets.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-11-10">Nov 10, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT3M">3 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog6}
                alt="Don't Develop Just for Yourself - A Developer's Checklist to Accessibility" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Accessibility
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Don't Develop Just for Yourself - A
                  Developer's Checklist to
                  Accessibility</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                We, as developers, tend to develop sites
                unconsciously for people like ourselves.
                If we don't actively pay attention, the
                sites are often accessible only for
                certain types of people: Sighted
                mouse-users, who have good fine motor
                skills and are good at using computers.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-10-25">Oct 25, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT7M">7 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog7}
                alt="Building a Restful CRUD API with Node JS, Express, and MongoDB" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Database
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Building a Restful CRUD API with
                  Node JS, Express, and MongoDB</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                Application Programming Interface is the
                abbreviation for API. An API is a
                software interface that enables two apps
                to communicate with one another. In
                other words, an API is a messenger that
                sends your request to the provider and
                then returns the response to you.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-10-15">Oct 15, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT5M">5 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog8} alt="Monitoring Performance with the PageSpeed Insights API"
                width="250" className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Web Performance
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>Monitoring Performance with the
                  PageSpeed Insights API</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                The PageSpeed Insights API provides free
                access to performance monitoring for web
                pages and returns data with suggestions
                for how to improve. The V5 API includes
                lab data from Lighthouse and real-world
                data from the Chrome User Experience
                Report (CrUX).
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-10-03">Oct 3, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT5M">5 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog9} alt="The best web accessibility tools for developers in 2021"
                width="250" className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Accessibility
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>The best web accessibility tools
                  for developers in 2021</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                The quality of the tools you use defines
                the speed with which you can diagnose
                and resolve problems. Each year the
                landscape changes dramatically in web
                technologies, and of late the tooling
                for accessibility is no exception.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-09-13">Sep 13, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT7M">7 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card" style={{ backgroundColor:'hsl(0, 0%, 100%) '}}>
            <div className="blog-card-banner">
              <img src={blog10}
                alt="How to connect a React frontend with a NodeJS/Express backend" width="250"
                className="blog-banner-img" />
            </div>

            <div className="blog-content-wrapper">
              <button className="blog-topic text-tiny" style={{ backgroundColor : 'hsl(216, 15%, 52%)' }}>
                Database
              </button>

              <h3>
                <a href="" className="h3" style={{ color: 'hsl(218, 23%, 23%)'}}>How to connect a React frontend
                  with a NodeJS/Express backend</a>
              </h3>

              <p className="blog-text" style={{ color: 'hsl(216, 15%, 52%)'}}>
                The MERN (MongoDB, Express, React,
                NodeJS) stack is very popular for making
                full stack applications, utilizing
                Javascript for both the backend and
                frontend as well as a document-oriented
                or non relational database (MongoDB),
                meaning that it's structured like JSON
                rather than a large excel sheet like SQL
                databases are.
              </p>

              <div className="wrapper-flex" style={{ color: 'hsl(216, 15%, 52%)'}}>
                <div className="profile-wrapper">
                  <img src={author} alt="Julia walker" width="50" />
                </div>

                <div className="wrapper">
                  <a href="#" className="h4">Julia Walker</a>

                  <p className="text-sm">
                    <time datetime="2021-09-21">Sep 21, 2021</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT4M">4 min</time>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn load-more" style={{ backgroundColor : 'hsl(216, 15%, 52%)', color:'white'}}>Load More</button> 
      </div>

      {/* <!--
        - ASIDE
      --> */}

      <div className="aside">
        <div className="topics">
          <h2 className="h2">Topics</h2>

          <a href="#" className="topic-btn">
            <div className="icon-box">
              <ion-icon name="server-outline"></ion-icon>
            </div>

            <p>Database</p>
          </a>

          <a href="#" className="topic-btn">
            <div className="icon-box">
              <ion-icon name="accessibility-outline"></ion-icon>
            </div>

            <p>Accessibility</p>
          </a>

          <a href="#" className="topic-btn">
            <div className="icon-box">
              <ion-icon name="rocket-outline"></ion-icon>
            </div>

            <p>Web Performance</p>
          </a>
        </div>

        <div className="tags">
          <h2 className="h2" style={{ color: 'hsl(216, 15%, 52%)'}}>Tags</h2>

          <div className="wrapper" style={{ backgroundColor: 'hsl(0, 0%, 100%)'}}>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#mongodb</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#nodejs</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#a11y</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#mobility</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#inclusion</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#webperf</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#optimize</button>
            <button className="hashtag" style={{ backgroundColor: 'hsl(214, 32%, 91%)', color: 'hsl(216, 15%, 52%)'}}>#performance</button>
          </div>
        </div>

        <div className="contact">
          <h2 className="h2" style={{ color: 'hsl(216, 15%, 52%)'}}>Let's Talk</h2>

          <div className="wrapper" style={{ backgroundColor: 'hsl(0, 0%, 100%)'}}>
            <p style={{ color: 'hsl(216, 15%, 52%)'}}>
              Do you want to learn more about how I can
              help your company overcome problems? Let us
              have a conversation.
            </p>

            <ul className="social-link">
              <li>
                <a href="#" className="icon-box discord">
                  <ion-icon name="logo-discord"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="icon-box twitter">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="icon-box facebook">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter" style={{ color: 'hsl(216, 15%, 52%)'}}>
          <h2 className="h2" >Newsletter</h2>

          <div className="wrapper" style={{ backgroundColor: 'hsl(0, 0%, 100%)'}}>
            <p style={{ color: 'hsl(216, 15%, 52%)'}}>
              Subscribe to our newsletter to be among the
              first to keep up with the latest updates.
            </p>

            <form action="#">
              <input type="email" name="email" placeholder="Email Address" required />

              <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'red'}}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog
