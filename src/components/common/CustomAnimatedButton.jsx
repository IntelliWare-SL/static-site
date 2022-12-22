import { Link } from 'react-router-dom'
import React from 'react'

const CustomAnimatedButton = ({
    filled = true,
    showIcon = true,
    link,
    text,
    customClasses = '',
}) => {
    return (
        <Link to={link} className="my-3 button-container">
            <div className="button">
                <div className="" style={{ position: 'relative' }}>
                    <svg
                        className="arrow"
                        width="37"
                        height="12"
                        viewBox="0 0 37 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M31.4592 0.420829L29.9332 1.96409L32.7 4.69984L0.02349 4.88063L0.0354974 7.0509L32.7121 6.87011L29.9754 9.63724L31.5183 11.1632L36.8598 5.762L31.4592 0.420829Z" />
                    </svg>

                    <svg
                        className="box"
                        width="36"
                        height="36"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.6295 1.33793L36.0528 18.2388L19.152 35.6621L1.72864 18.7612L18.6295 1.33793Z"
                            stroke="#FDF3EA"
                            stroke-width="1.5"
                        />
                    </svg>
                </div>
                <div>
                    <span className="button-text with-spacing">{text}</span>
                </div>
            </div>
        </Link>
    )
}

export default CustomAnimatedButton
