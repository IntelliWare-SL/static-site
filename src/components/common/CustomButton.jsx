import {Link} from "react-router-dom";
import React from "react";

const CustomButton = ({filled = true, showIcon = true, link, text, customClasses = ""}) => {
  return (
    <Link to={link} className={"my-3 " + customClasses + filled ? " custom-btn" : " custom-btn-outline"}>
      {showIcon && <svg width="36" height="28" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.081 1.22783L29.1614 11.0059L19.3833 21.0864L9.30291 11.3082L19.081 1.22783Z"
              stroke="#FDF3EA" strokeWidth="1.5"/>
        <path
          d="M18.9738 8.0958L18.0535 9.02652L19.7221 10.6764L0.0153423 10.7854L0.0225838 12.0943L19.7294 11.9853L18.0789 13.6541L19.0094 14.5744L22.2308 11.317L18.9738 8.0958Z"
          fill="#FDF3EA"/>
      </svg>}
      <span className={showIcon && "with-spacing"}>{text}</span></Link>
  );
}

export default CustomButton;
