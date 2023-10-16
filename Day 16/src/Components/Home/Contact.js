import React from 'react'
import "./Home.css"

export default function Contact() {
  return (
    <div id="contact">
        <div className="homecontainer">
          <div className="row">
            <div className="col-lg-12 text-center text-style">
              <h1>
                <strong>Contact Me</strong>
               
              </h1>
              
              <hr />
              <br/>
            </div>
          </div>
          <div className="wrapper">
            <form method="post" className="ccform">
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-user fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Full Name"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-envelope fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-mobile-phone fa-2x" />
                </span>
                <input className="ccformfield" type="text" placeholder="Phone" />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-info fa-2x" />
                </span>
                <input
                  className="ccformfield"
                  type="text"
                  placeholder="Subject"
                  required=""
                />
              </div>
              <div className="ccfield-prepend">
                <span className="ccform-addon">
                  <i className="fa fa-comment fa-2x" />
                </span>
                <textarea
                  className="ccformfield"
                  name="comments"
                  rows={6}
                  placeholder="Message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="ccfield-prepend submit">
                <input className="ccbtn" type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

  )
}
