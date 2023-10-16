import React from 'react'
import "./Faq.css"

export default function Faq() {
  
  return (
    <div>
   <div className="faq">
   <h1><br/>FAQ</h1><br/>
  <input id="faq-a" type="checkbox" />
  <label htmlFor="faq-a">
    <p className="faq-heading">How do I purchase Brainitz?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     <br />
      <br />
      You can purchase an individual account or a site license by emailing us at
      welcome@brainitz.com One of our staff will be in touch shortly to set-up
      your account. We accept credit card, purchase order, or check. Learn more
      on our pricing page.
      We also offer professional development trainings that include the
      opportunity to pursue credit while also receiving a discounted license. If
      you have more questions, please feel free to submit a request!
    </p>
  </label>
  <input id="faq-b" type="checkbox" />
  <label htmlFor="faq-b">
    <p className="faq-heading">
      Do you have professional development trainings available?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
  
      <br />
      <br />
      Yes, we have professional development trainings available almost every
      month. Teachers can take our online course that will train you on the
      theory and practice of putting lessons online, often called flipped or
      blended learning. These trainings also include in depth instruction on how
      to use Brainitz.
      Online training start at $45, include a 1 year subscription Brainitz, and
      come with 1 hour of advancement credit available through Adams State
      University or $55. For dates on upcoming trainings, email us at
      welcome@brainitz.com. If you have more questions, please feel free to
      submit a request!
    </p>
  </label>
  <input id="faq-c" type="checkbox" />
  <label htmlFor="faq-c">
    <p className="faq-heading">Does Brainitz accept purchase orders?</p>
    <div className="faq-arrow" />
    <p className="faq-text">
     
      <br />
      <br />
      Yes, Brainitz accepts purchase order for site licenses. Please set the PO,
      including a description of the order to welcome@brainitz.com and we will
      invoice you for the amount. Once we send the invoice, someone will be in
      touch to set up your Brainitz account.
      You can learn more about our licensing structure on our pricing page. If
      you have more questions, please feel free to submit a request!
    </p>
  </label>
  <input id="faq-d" type="checkbox" />
  <label htmlFor="faq-d">
    <p className="faq-heading">
      What are the technical requirements for Brainitz?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      To get setup with Brainitz, instructors will need a computer with working
      Internet connection and a web browser.
      Students will need any device with a web browser, ranging from smartphones
      to tablets and personal computer, as well as an Internet or cellular
      connection.
      For the be st experience, we recommend using the latest version of Google
      Chrome, but it should work on a recent version of any major browser. If
      you have any more questions, please feel free to submit a request!{" "}
    </p>
  </label>
  <input id="faq-e" type="checkbox" />
  <label htmlFor="faq-e">
    <p className="faq-heading">Can I add a PowerPoint to Brainitz</p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      Yes, you can add a PowerPoint to Brainitz. The easiest way is to record
      your PowerPoint presentation using a screen capture program like
      www.screencast-o-matic.com You can view our tutorial on how to do this
      here.
      This will allow you to record your PowerPoint as a video with your voice
      describing the slides. You will then be able to upload the video on
      Brainitz and create an interactive video lesson. If you have any more
      questions, please feel free to submit a request!
    </p>
  </label>
  <input id="settings" type="checkbox" />
  <input id="faq-f" type="checkbox" />
  <label htmlFor="faq-f">
    <p className="faq-heading">
      Did my student really get logged out and lose their progress?
    </p>
    <div className="faq-arrow" />
    <p className="faq-text">
       <br />
      <br />
      If a student does not answer a question in 5 minutes after it pops up the
      student will be ‘timed out’ and they will lose their progress from the
      last previously answered question
      This feature is built in to discourage students from playing a video
      lesson and walking away. Students must stay engaged with the video lesson
      to avoid being timed out. If you have more questions, please feel free to
      submit a request!
    </p>
  </label>
</div>

</div>
  )
}
