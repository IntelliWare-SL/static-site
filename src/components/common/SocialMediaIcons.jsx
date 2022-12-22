import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const SocialMediaIcons = ({customClasses}) => {
  return (
    <div className="social-media-icons d-inline-block">
      <div className={"icon-container d-flex pt-1 pb-1 pb-md-2 px-2 px-md-3 " + customClasses}>
        <a target='_blank' href="https://www.facebook.com/reamermade/">
          <FaFacebookF/>
        </a>
        <a target='_blank' href="https://www.linkedin.com/company/reamermade/about/">
          <FaLinkedinIn/>
        </a>
        <a target='_blank' href="https://www.instagram.com/reamermade/">
          <FaInstagram/>
        </a>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
