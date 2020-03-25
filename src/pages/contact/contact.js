import React from "react";
import "./contact-styles.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Welcome to my first React Project!</h2>
      <h3>Welcome to the Faux Store!</h3>
      <p>
        I do apologize but this is not a real store. There is no one to contact
        and the checkout portion will not take your credit card for any
        payments.
      </p>
      <br />
      <p>
        This is an application I created while learning how to write React
        Applications. It took me quite a while to build this and I am still not
        done learning or tinkering with this. Please feel free to play around
        and have fun with this. I know I have!
      </p>
      <br />
      <p>
        You could always call 1-800-
        <span className="ghost-busters">GHOSTBUSTERS</span> if you really need
        to contact someone...
      </p>
    </div>
  );
};
export default ContactPage;
