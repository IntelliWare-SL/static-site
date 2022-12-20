import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const SocialMediaIcons = ({customClasses}) => {
  return (
    <div className="social-media-icons d-inline-block">
      <div className={"icon-container d-flex pt-1 pb-1 pb-md-2 px-2 px-md-3 " + customClasses}>
        <a href="https://facebook.com">
          <FaFacebookF/>
        </a>
        <a href="https://linkedin.com">
          <FaLinkedinIn/>
        </a>
        <a href="https://instagram.com">
          <FaInstagram/>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
