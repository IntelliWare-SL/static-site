import {Button, Col, Container, Row} from "react-bootstrap";
import Tile from "../common/Tile";
import React from "react";
import {Link} from "react-router-dom";

const WhatWeDoSection = () => {
  return (
    <section className="what-we-do-section bg-white py-5">
      <Container className="py-5">
        <Row>
          <Col sm={12} md={6} className="flex pe-4">
            <Row sm={12} className="gap-4">
              <Tile title="Efficient Building" icon={
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_9_30)">
                    <path d="M6.17505 4.22498H8.12505V6.17498H6.17505V4.22498Z" fill="#50504F"/>
                    <path d="M6.17505 8.125H8.12505V10.075H6.17505V8.125Z" fill="#50504F"/>
                    <path d="M6.17505 12.025H8.12505V13.975H6.17505V12.025Z" fill="#50504F"/>
                    <path d="M6.17505 15.925H8.12505V17.875H6.17505V15.925Z" fill="#50504F"/>
                    <path d="M10.075 4.22498H12.025V6.17498H10.075V4.22498Z" fill="#50504F"/>
                    <path d="M17.875 12.025H19.825V13.975H17.875V12.025Z" fill="#50504F"/>
                    <path d="M17.875 8.125H19.825V10.075H17.875V8.125Z" fill="#50504F"/>
                    <path d="M10.075 8.125H12.025V10.075H10.075V8.125Z" fill="#50504F"/>
                    <path d="M17.875 15.925H19.825V17.875H17.875V15.925Z" fill="#50504F"/>
                    <path d="M10.075 12.025H12.025V13.975H10.075V12.025Z" fill="#50504F"/>
                    <path d="M17.875 19.825H19.825V21.775H17.875V19.825Z" fill="#50504F"/>
                    <path d="M10.075 15.925H12.025V17.875H10.075V15.925Z" fill="#50504F"/>
                    <path
                      d="M24.7 23.725H23.725V5.19995C23.725 4.94137 23.6223 4.69337 23.4393 4.51052C23.2566 4.32768 23.0085 4.22495 22.75 4.22495H15.925V1.29995C15.925 1.04137 15.8223 0.79337 15.6393 0.610522C15.4566 0.427675 15.2085 0.324951 14.95 0.324951H3.24995C2.99137 0.324951 2.74337 0.427675 2.56052 0.610522C2.37768 0.79337 2.27495 1.04137 2.27495 1.29995V23.725H1.29995C1.04137 23.725 0.79337 23.8277 0.610522 24.0106C0.427675 24.1933 0.324951 24.4414 0.324951 24.7C0.324951 24.9585 0.427675 25.2066 0.610522 25.3893C0.79337 25.5723 1.04137 25.675 1.29995 25.675H24.7C24.9585 25.675 25.2066 25.5723 25.3893 25.3893C25.5723 25.2066 25.675 24.9585 25.675 24.7C25.675 24.4414 25.5723 24.1933 25.3893 24.0106C25.2066 23.8277 24.9585 23.725 24.7 23.725ZM4.22495 2.27495H13.975V20.8C13.975 21.0585 14.0777 21.3066 14.2606 21.4893C14.4433 21.6723 14.6914 21.775 14.95 21.775C15.2085 21.775 15.4566 21.6723 15.6393 21.4893C15.8223 21.3066 15.925 21.0585 15.925 20.8V6.17495H21.775V23.725H12.025V20.8C12.025 20.5414 11.9222 20.2933 11.7394 20.1106C11.5565 19.9277 11.3085 19.825 11.05 19.825H7.14995C6.89137 19.825 6.64337 19.9277 6.46052 20.1106C6.27768 20.2933 6.17495 20.5414 6.17495 20.8V23.725H4.22495V2.27495ZM10.075 23.725H8.12495V21.775H10.075V23.725Z"
                      fill="#50504F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_9_30">
                      <rect width="26" height="26" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              }/>
              <Tile title="Urban Planning" icon={
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_9_44)">
                    <path d="M7.3125 5.6875H8.9375V7.3125H7.3125V5.6875Z" fill="#50504F"/>
                    <path d="M7.3125 8.9375H8.9375V10.5625H7.3125V8.9375Z" fill="#50504F"/>
                    <path d="M7.3125 12.1875H8.9375V13.8125H7.3125V12.1875Z" fill="#50504F"/>
                    <path d="M7.3125 15.4375H8.9375V17.0625H7.3125V15.4375Z" fill="#50504F"/>
                    <path d="M10.5625 5.6875H12.1875V7.3125H10.5625V5.6875Z" fill="#50504F"/>
                    <path d="M17.0625 12.1875H18.6875V13.8125H17.0625V12.1875Z" fill="#50504F"/>
                    <path d="M17.0625 8.9375H18.6875V10.5625H17.0625V8.9375Z" fill="#50504F"/>
                    <path d="M10.5625 8.9375H12.1875V10.5625H10.5625V8.9375Z" fill="#50504F"/>
                    <path d="M17.0625 15.4375H18.6875V17.0625H17.0625V15.4375Z" fill="#50504F"/>
                    <path d="M10.5625 12.1875H12.1875V13.8125H10.5625V12.1875Z" fill="#50504F"/>
                    <path d="M17.0625 18.6875H18.6875V20.3125H17.0625V18.6875Z" fill="#50504F"/>
                    <path d="M10.5625 15.4375H12.1875V17.0625H10.5625V15.4375Z" fill="#50504F"/>
                    <path
                      d="M3.79164 4.32556C2.89417 4.32556 2.16663 5.05311 2.16663 5.95056V10.2839H3.24995V5.95056C3.24995 5.65141 3.49247 5.40888 3.79164 5.40888H16.7917V4.32556H3.79164Z"
                      fill="#50504F"/>
                    <path
                      d="M3.79164 20.5755C3.49247 20.5755 3.24995 20.3331 3.24995 20.0339V14.6172H2.16663V20.0339C2.16663 20.9314 2.89417 21.6589 3.79164 21.6589H9.20834V20.5755H3.79164Z"
                      fill="#50504F"/>
                    <path
                      d="M17.1746 21.9725L4.01961 8.81753C3.8081 8.60607 3.46523 8.60607 3.25367 8.81753L0.15859 11.9127C-0.0528634 12.1241 -0.0528634 12.467 0.15859 12.6786L13.3136 25.8335C13.4151 25.9351 13.5529 25.9922 13.6965 25.9922C13.8401 25.9922 13.9779 25.9351 14.0794 25.8335L17.1745 22.7384C17.3861 22.5269 17.3861 22.184 17.1746 21.9725ZM13.6965 24.6846L1.30748 12.2956L3.63666 9.9664L16.0257 22.3555L13.6965 24.6846Z"
                      fill="#50504F"/>
                    <path
                      d="M23.8334 20.5757H15.7084V21.6589H21.6667V24.3672C21.6667 24.6665 21.9093 24.909 22.2084 24.909H23.8334C25.03 24.909 26.0001 23.939 26.0001 22.7422C26.0001 21.5457 25.03 20.5757 23.8334 20.5757ZM23.8334 23.8257H22.75V21.6589H23.8334C24.4317 21.6589 24.9167 22.144 24.9167 22.7422C24.9167 23.3407 24.4317 23.8257 23.8334 23.8257Z"
                      fill="#50504F"/>
                    <path
                      d="M23.8333 4.32556H21.125V5.40888H23.8333C24.4317 5.40888 24.9167 5.89389 24.9167 6.4922V22.7422H26V6.4922C26 5.29559 25.03 4.32556 23.8333 4.32556Z"
                      fill="#50504F"/>
                    <path d="M9.90883 15.3175L8.28369 16.9426L9.04972 17.7086L10.6749 16.0835L9.90883 15.3175Z"
                          fill="#50504F"/>
                    <path d="M7.74221 13.1509L6.11707 14.776L6.88309 15.542L8.50822 13.9168L7.74221 13.1509Z"
                          fill="#50504F"/>
                    <path d="M12.0744 17.4841L10.4493 19.1092L11.2154 19.8753L12.8405 18.2502L12.0744 17.4841Z"
                          fill="#50504F"/>
                    <path d="M14.2419 19.652L12.6167 21.2771L13.3827 22.0431L15.0079 20.4179L14.2419 19.652Z"
                          fill="#50504F"/>
                    <path d="M5.57412 10.9841L3.94897 12.6092L4.715 13.3753L6.34014 11.75L5.57412 10.9841Z"
                          fill="#50504F"/>
                    <path
                      d="M23.3644 1.20988L22.6157 0.461304C21.9823 -0.143351 20.9855 -0.143351 20.3521 0.461304L12.1155 8.6979C11.904 8.90941 11.904 9.25228 12.1155 9.46384L14.3618 11.7101C14.4631 11.8122 14.6011 11.8693 14.7448 11.8688C14.8884 11.8688 15.0261 11.8117 15.1277 11.7101L23.3644 3.4735C23.3646 3.47325 23.3648 3.473 23.3652 3.47274C23.9898 2.84767 23.9894 1.83454 23.3644 1.20988ZM22.599 2.70707L14.7448 10.5612L13.2644 9.08085L21.1186 1.22719C21.3232 1.03173 21.6453 1.03173 21.8499 1.22719L22.599 1.97525C22.599 1.97535 22.5991 1.9754 22.5993 1.9755C22.8012 2.17756 22.8011 2.5051 22.599 2.70707Z"
                      fill="#50504F"/>
                    <path
                      d="M14.5708 10.8136L12.2329 11.5942L13.0135 9.25255L11.9843 8.90967L10.8609 12.2794C10.8425 12.3346 10.8331 12.3925 10.8331 12.4507C10.8332 12.7499 11.0757 12.9923 11.3749 12.9922C11.4323 12.9924 11.4892 12.9837 11.5439 12.9662L14.9137 11.8428L14.5708 10.8136Z"
                      fill="#50504F"/>
                    <path d="M19.6202 1.95837L18.8541 2.72439L21.1005 4.97077L21.8666 4.20475L19.6202 1.95837Z"
                          fill="#50504F"/>
                    <path d="M19.5 11.9089H11.375V12.9923H19.5V11.9089Z" fill="#50504F"/>
                    <path d="M21.6667 11.9089H20.5834V12.9923H21.6667V11.9089Z" fill="#50504F"/>
                    <path d="M23.8333 11.9089H22.75V12.9923H23.8333V11.9089Z" fill="#50504F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_9_44">
                      <rect width="26" height="26" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              }/>
              <Tile title="Build Management" icon={
                <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_9_74)">
                    <path
                      d="M27.9981 24.9357L27.9792 24.4471C27.9696 24.1975 27.7823 24.0044 27.5638 24.0151C27.344 24.026 27.1735 24.2371 27.1831 24.4867L27.2021 24.9791C27.2022 24.9822 27.2023 24.9851 27.2026 24.9881C27.2077 25.0791 27.1803 25.1659 27.1253 25.2323C27.0707 25.2983 26.9968 25.3347 26.9172 25.3347H24.586V16.985L25.187 17.2261C26.2227 17.6416 26.9374 18.7147 27.0088 19.9608L27.0748 21.6764C27.0845 21.9259 27.2702 22.1199 27.4903 22.1084C27.7102 22.0976 27.8806 21.8865 27.8709 21.6368L27.8048 19.9167C27.8046 19.9138 27.8044 19.9108 27.8043 19.9078C27.714 18.2975 26.7908 16.9101 25.4524 16.3732L24.3396 15.9268C24.333 15.9237 24.327 15.9198 24.3202 15.9171L20.9965 14.5836C20.996 14.5833 20.9954 14.5831 20.9949 14.5829C20.9825 14.578 20.9702 14.5739 20.9578 14.5702C20.9515 14.5684 20.9452 14.5672 20.9389 14.5656C20.7189 14.501 20.4806 14.5728 20.3184 14.7571L20.2158 14.8739L19.3387 14.3742L19.3385 13.5015C19.6036 13.2943 19.8532 13.0473 20.0798 12.7717C20.0825 12.7684 20.0852 12.7652 20.0879 12.7619C20.6601 12.0623 21.0826 11.1815 21.2263 10.3064C21.2302 10.2833 21.2339 10.2601 21.2373 10.237C21.2409 10.2131 21.2442 10.1892 21.2473 10.1653C21.2526 10.1253 21.2572 10.0854 21.2612 10.0455C21.2623 10.036 21.2634 10.0263 21.2644 10.0168C21.2684 9.97345 21.2718 9.93019 21.2744 9.88711H21.4398C21.9534 9.88711 22.3713 9.41276 22.3713 8.8297V7.64452C22.3713 7.58848 22.367 7.53291 22.3593 7.47802C22.4179 7.35691 22.4518 7.21773 22.4518 7.06942V6.56409C22.4518 6.17988 22.2268 5.85501 21.9205 5.75457V5.68324C21.9205 5.64009 21.92 5.59701 21.9191 5.55418C21.8921 4.34802 21.4749 3.20543 20.7445 2.33701C20.0781 1.54479 19.2064 1.04332 18.2677 0.906432C18.2533 0.877253 18.2378 0.849069 18.2217 0.821382C18.2175 0.814304 18.2131 0.807476 18.2089 0.800461C18.1925 0.773642 18.1754 0.74763 18.1574 0.722426C18.1543 0.718019 18.1512 0.713487 18.1481 0.709142C18.1259 0.678784 18.1026 0.649606 18.0781 0.621732C18.0773 0.620801 18.0764 0.619932 18.0755 0.618939C18.0517 0.591996 18.0267 0.56642 18.001 0.54196C17.998 0.539228 17.9951 0.536434 17.9923 0.533704C17.9391 0.484287 17.8821 0.440521 17.8219 0.40259C17.8165 0.399175 17.8111 0.395761 17.8057 0.392409C17.7757 0.374281 17.7452 0.357272 17.714 0.342187C17.7123 0.341441 17.7107 0.340821 17.7091 0.340013C17.6801 0.326232 17.6504 0.314188 17.6204 0.303137C17.6122 0.300097 17.6041 0.297178 17.5959 0.294385C17.5639 0.283583 17.5318 0.273713 17.4989 0.266014C17.4971 0.26558 17.4952 0.265332 17.4933 0.264959C17.462 0.257758 17.43 0.252543 17.3977 0.248322C17.3888 0.247142 17.3801 0.246149 17.3711 0.245217C17.3368 0.241679 17.3021 0.239258 17.2671 0.239258H16.8911C16.8561 0.239258 16.8216 0.241679 16.7872 0.245217C16.7782 0.246149 16.7693 0.247204 16.7604 0.248322C16.7284 0.25248 16.6965 0.257758 16.6651 0.264898C16.6631 0.265332 16.6613 0.26558 16.6593 0.266014C16.6265 0.273713 16.5943 0.283521 16.5625 0.294322C16.5542 0.297117 16.546 0.300097 16.5378 0.303137C16.5079 0.314188 16.4782 0.326232 16.4493 0.339951C16.4477 0.340759 16.4459 0.34138 16.4443 0.342187C16.413 0.357272 16.3826 0.374281 16.3527 0.392347C16.3471 0.395699 16.3416 0.399175 16.3361 0.40259C16.307 0.420965 16.2784 0.440459 16.2506 0.461629C16.2506 0.46169 16.2505 0.461752 16.2504 0.461814C16.2212 0.484163 16.1932 0.508313 16.1659 0.533641C16.1629 0.536372 16.1601 0.539229 16.1572 0.542022C16.1314 0.56642 16.1065 0.591935 16.0827 0.618814C16.0818 0.619808 16.0809 0.620739 16.08 0.621732C16.0555 0.649544 16.0323 0.678722 16.0102 0.709017C16.0069 0.713425 16.0039 0.717957 16.0007 0.722426C15.9827 0.747568 15.9656 0.77358 15.9494 0.800336C15.9451 0.807352 15.9406 0.81418 15.9364 0.82132C15.9203 0.848945 15.9048 0.877192 15.8905 0.906369C14.9518 1.04325 14.08 1.54479 13.4137 2.33687C13.0578 2.76008 12.7769 3.24865 12.5786 3.77763L10.2706 1.32329C9.79691 0.819581 9.05573 0.820699 8.58334 1.32597L6.07974 4.00322L6.0793 3.69022C6.07909 3.51081 6.01734 3.34227 5.90539 3.21562C5.79367 3.08917 5.64541 3.01957 5.48769 3.01957C5.48742 3.01957 5.48709 3.01957 5.48682 3.01957L3.60994 3.02255C3.28378 3.02311 3.01871 3.32476 3.0191 3.69519L3.02423 7.27068L0.387256 10.0906C0.14767 10.3468 0.0103488 10.6935 0.000559727 11.067C-0.00922935 11.4405 0.109661 11.7959 0.335302 12.0677C0.560943 12.3397 0.866373 12.4956 1.19538 12.5067C1.208 12.5072 1.22053 12.5074 1.23305 12.5074C1.54821 12.5074 1.84665 12.3731 2.07699 12.1267L2.96998 11.1717L2.97387 14.3428C2.97419 14.5924 3.15248 14.7945 3.37232 14.7945C3.37248 14.7945 3.3727 14.7945 3.37287 14.7945C3.59293 14.7941 3.77111 14.5913 3.77078 14.3415L3.7658 10.3207L9.43045 4.26304L11.7062 6.68316V7.06936C11.7062 7.09556 11.7076 7.1215 11.7097 7.14726C11.7101 7.15204 11.7104 7.15682 11.7109 7.16161C11.7215 7.27465 11.7512 7.38243 11.7985 7.47952C11.791 7.53385 11.7868 7.5889 11.7868 7.64447V8.82964C11.7868 9.41269 12.2046 9.88704 12.7183 9.88704H12.8831C12.8857 9.93174 12.8892 9.97657 12.8934 10.0216C12.8946 10.0342 12.8961 10.047 12.8974 10.0596C12.9012 10.0969 12.9055 10.1343 12.9103 10.1718C12.9132 10.1943 12.9164 10.2168 12.9197 10.2393C12.9235 10.266 12.9279 10.2929 12.9324 10.3197C12.9416 10.3753 12.952 10.4309 12.9634 10.4865C12.9655 10.4967 12.9674 10.5068 12.9696 10.517C12.9775 10.5543 12.986 10.5916 12.995 10.6288C12.9968 10.6363 12.9986 10.6438 13.0005 10.6513C13.0713 10.9418 13.1712 11.2303 13.2954 11.5101C13.2968 11.513 13.2981 11.516 13.2995 11.519C13.3491 11.6304 13.4027 11.7402 13.4597 11.8483C13.4673 11.8625 13.4748 11.8768 13.4823 11.891C13.4977 11.9197 13.5134 11.9482 13.5294 11.9765C13.5414 11.9979 13.5536 12.0192 13.5659 12.0404C13.5798 12.0643 13.5934 12.0883 13.6076 12.112C13.6328 12.1543 13.6587 12.1962 13.6851 12.2378C13.6964 12.2555 13.708 12.273 13.7194 12.2906C13.739 12.3208 13.759 12.3509 13.7791 12.3807C13.7902 12.3969 13.8012 12.4132 13.8124 12.4293C13.8398 12.469 13.8678 12.5083 13.8964 12.5472C13.9005 12.5528 13.9043 12.5584 13.9085 12.5639C13.9398 12.6063 13.9719 12.648 14.0043 12.6893C14.0157 12.7039 14.0274 12.7183 14.039 12.7327C14.0618 12.7612 14.0849 12.7894 14.1083 12.8173C14.1213 12.8328 14.1342 12.8483 14.1472 12.8636C14.1753 12.8964 14.2038 12.9287 14.2325 12.9607C14.2533 12.9837 14.2744 13.0062 14.2955 13.0288C14.3131 13.0477 14.3307 13.0666 14.3487 13.0852C14.3704 13.1077 14.3923 13.1298 14.4144 13.1518C14.4261 13.1634 14.438 13.175 14.4497 13.1865C14.5689 13.3029 14.6923 13.4114 14.8193 13.5107L14.8192 14.374L13.9425 14.8739L13.8396 14.7568C13.741 14.6448 13.6143 14.5742 13.4807 14.5506C13.4659 14.548 13.451 14.546 13.436 14.5444C13.421 14.5431 13.4059 14.5422 13.3909 14.5419C13.3758 14.5416 13.3607 14.5419 13.3456 14.5428C13.3043 14.5453 13.263 14.5528 13.2223 14.5645C13.2145 14.5664 13.2067 14.5681 13.199 14.5705C13.1868 14.5741 13.1722 14.579 13.1615 14.5833L11.6654 15.1836L11.6615 11.9664C11.661 11.5515 11.3635 11.2146 10.9983 11.2146C10.998 11.2146 10.9977 11.2146 10.9974 11.2146L7.88071 11.2195C7.70358 11.2198 7.5371 11.2984 7.41204 11.4408C7.28697 11.5831 7.21817 11.7723 7.21844 11.9734L7.22528 17.5098C7.22473 17.5105 7.22418 17.5113 7.22359 17.5121C7.21281 17.526 7.20259 17.5403 7.19197 17.5544C7.17502 17.577 7.15796 17.5993 7.14144 17.6224C7.13106 17.6368 7.12115 17.6518 7.11098 17.6663C7.09484 17.6895 7.0786 17.7124 7.06297 17.736C7.05296 17.751 7.04344 17.7665 7.03359 17.7817C7.01835 17.8053 7.00286 17.8287 6.98805 17.8528C6.97847 17.8682 6.96945 17.8841 6.96009 17.8997C6.9456 17.9238 6.93095 17.9479 6.91689 17.9724C6.90776 17.9884 6.89912 18.0049 6.89021 18.0209C6.87654 18.0456 6.8627 18.0701 6.84952 18.0952C6.84093 18.1115 6.83289 18.1282 6.82447 18.1444C6.81157 18.1699 6.79844 18.195 6.78597 18.2206C6.77777 18.2375 6.77006 18.2549 6.76208 18.272C6.75015 18.2975 6.73801 18.3228 6.72653 18.3487C6.71849 18.3667 6.71106 18.3851 6.70323 18.4034C6.6924 18.4285 6.68141 18.4537 6.67102 18.4792C6.66342 18.4979 6.65642 18.517 6.6491 18.5358C6.63919 18.5614 6.62908 18.5867 6.61962 18.6125C6.61251 18.6318 6.60594 18.6515 6.59911 18.6711C6.59013 18.6966 6.58095 18.722 6.57247 18.7478C6.5658 18.768 6.55973 18.7885 6.55334 18.8089C6.54534 18.8344 6.5371 18.8597 6.52949 18.8854C6.52337 18.9062 6.51785 18.9274 6.51205 18.9483C6.50493 18.9739 6.49755 18.9993 6.49089 19.0252C6.48536 19.0466 6.48043 19.0682 6.47518 19.0898C6.46895 19.1155 6.46244 19.141 6.45664 19.167C6.45178 19.1887 6.44751 19.2107 6.44297 19.2327C6.43756 19.2585 6.43188 19.2845 6.42689 19.3106C6.42264 19.3331 6.41902 19.3558 6.41509 19.3784C6.4106 19.4042 6.40585 19.4299 6.40174 19.4558C6.39808 19.4793 6.39507 19.503 6.39179 19.5266C6.38823 19.5519 6.38434 19.5773 6.38123 19.6027C6.37822 19.6269 6.37592 19.6513 6.37336 19.6757C6.37067 19.7008 6.36767 19.7259 6.36538 19.7512C6.36314 19.7759 6.3616 19.8007 6.3598 19.8255C6.3581 19.8486 6.35597 19.8716 6.3546 19.8947L3.7939 19.8988C3.78494 19.8988 3.77766 19.8905 3.77766 19.8804L3.77433 17.152C3.774 16.9023 3.59572 16.7002 3.37588 16.7002C3.37571 16.7002 3.37549 16.7002 3.37533 16.7002C3.15527 16.7006 2.9771 16.9034 2.97742 17.1532L2.98076 19.8816C2.98141 20.3902 3.34607 20.8034 3.7939 20.8034C3.79429 20.8034 3.79467 20.8034 3.795 20.8034L6.31943 20.7994L6.16008 24.9357C6.14241 25.2721 6.24862 25.6055 6.45172 25.8512C6.65555 26.0978 6.94326 26.2393 7.24097 26.2393H26.9172C27.2149 26.2393 27.5025 26.0978 27.7063 25.8512C27.9096 25.6055 28.0157 25.2721 27.9981 24.9357ZM21.5743 8.82964C21.5743 8.91388 21.514 8.98241 21.4398 8.98241H21.2807V7.91092H21.5743V8.82964ZM16.5517 1.44696C16.5521 1.44535 16.5528 1.44386 16.5531 1.44225C16.5678 1.37731 16.5962 1.3197 16.634 1.27277C16.6349 1.27159 16.6358 1.27041 16.6368 1.26929C16.6488 1.25476 16.6617 1.24135 16.6755 1.22906C16.677 1.22763 16.6788 1.22627 16.6804 1.2249C16.7082 1.20094 16.7391 1.18182 16.7722 1.1681C16.7747 1.16704 16.7771 1.16593 16.7797 1.16499C16.7956 1.15891 16.812 1.15413 16.8288 1.15065C16.8318 1.15003 16.8349 1.1496 16.8379 1.1491C16.8553 1.14606 16.873 1.14401 16.891 1.14401H17.2671C17.2852 1.14401 17.3029 1.14606 17.3203 1.1491C17.3232 1.1496 17.3264 1.15003 17.3293 1.15065C17.3461 1.15413 17.3626 1.15885 17.3784 1.16499C17.381 1.16599 17.3834 1.1671 17.3861 1.16816C17.4191 1.18182 17.4499 1.20094 17.4777 1.22484C17.4793 1.22627 17.4811 1.22769 17.4827 1.22912C17.4964 1.24135 17.5093 1.2547 17.5212 1.26916C17.5223 1.27041 17.5232 1.27165 17.5243 1.27289C17.5621 1.31982 17.5903 1.37731 17.605 1.44218C17.6053 1.4438 17.606 1.44523 17.6064 1.44684C17.6129 1.47701 17.6168 1.50843 17.6168 1.54082V3.06706C17.6168 3.28589 17.4599 3.46394 17.2671 3.46394H16.8911C16.6984 3.46394 16.5415 3.28589 16.5415 3.06706V1.54082C16.5415 1.50843 16.5452 1.47713 16.5517 1.44696ZM5.28272 3.92445L5.28404 4.85404L3.81989 6.41981L3.81633 3.92681L5.28272 3.92445ZM12.3112 4.78518C12.3037 4.83163 12.2962 4.87806 12.2898 4.92486C12.2862 4.95106 12.2831 4.97727 12.28 5.00352C12.2747 5.04618 12.2694 5.08875 12.265 5.13165C12.2614 5.16759 12.259 5.2036 12.2561 5.23961C12.2534 5.27345 12.2501 5.30709 12.248 5.34105C12.2437 5.41207 12.2405 5.48309 12.239 5.55418C12.238 5.59707 12.2375 5.64016 12.2375 5.6833V5.75457C12.2367 5.75482 12.236 5.75524 12.2352 5.75549C12.2109 5.76357 12.1875 5.77344 12.1642 5.78418C12.1568 5.78765 12.1494 5.79125 12.1421 5.79497C12.1217 5.80541 12.1016 5.81664 12.0822 5.82913C12.0794 5.83098 12.0763 5.8323 12.0735 5.83415L9.70207 3.3124C9.54852 3.14919 9.30958 3.14944 9.15646 3.31328L1.53055 11.4683C1.44595 11.5589 1.33597 11.607 1.21911 11.6026C1.1029 11.5987 0.995053 11.5436 0.915318 11.4475C0.835585 11.3515 0.793584 11.226 0.79703 11.0941C0.80053 10.9621 0.849038 10.8397 0.933639 10.7492L9.12972 1.98439C9.21333 1.895 9.32074 1.85023 9.42815 1.85023C9.53517 1.85023 9.64225 1.89463 9.72576 1.98345L12.3181 4.74018C12.3156 4.7552 12.3137 4.77023 12.3112 4.78518ZM12.7183 8.98248C12.6441 8.98248 12.5837 8.91395 12.5837 8.8297V7.91097H12.8773V8.98248H12.7183ZM12.5032 6.86561V6.6271H12.636C12.8561 6.6271 13.0345 6.42459 13.0345 6.17479V5.68317C13.0345 5.64773 13.0348 5.6124 13.0356 5.57708C13.0373 5.50817 13.0408 5.4392 13.0454 5.37029C13.0467 5.35273 13.0485 5.33527 13.0499 5.31771C13.0541 5.26463 13.0591 5.21162 13.0653 5.15865C13.0672 5.1414 13.0695 5.12421 13.0717 5.10695C13.0789 5.05096 13.0871 4.99513 13.0964 4.93951C13.0985 4.92704 13.1004 4.91456 13.1026 4.90208C13.1145 4.83392 13.1278 4.76601 13.143 4.69853C13.143 4.69814 13.1431 4.69777 13.1431 4.6974C13.2888 4.04935 13.5779 3.45153 13.99 2.96153C14.4703 2.39051 15.0814 2.00643 15.7445 1.85086V3.06681C15.7445 3.78446 16.2588 4.36826 16.891 4.36826H17.2671C17.8992 4.36826 18.4135 3.7844 18.4135 3.06681V1.85097C19.0765 2.00655 19.6877 2.39064 20.168 2.96164C20.7615 3.66719 21.1006 4.59604 21.1225 5.57714C21.1232 5.6124 21.1235 5.64773 21.1235 5.68317V6.17479C21.1235 6.42459 21.3019 6.6271 21.5221 6.6271H21.6549V6.86561H12.5032ZM13.6893 9.96185C13.6886 9.9549 13.688 9.94795 13.6873 9.94093C13.6837 9.903 13.6808 9.86525 13.6787 9.82763C13.6783 9.82162 13.6779 9.81559 13.6776 9.80956C13.6754 9.76618 13.6743 9.72296 13.6743 9.68007V7.91097H20.4837V9.67064C20.4837 9.71396 20.4826 9.75766 20.4804 9.8015C20.4801 9.80653 20.4797 9.81155 20.4794 9.81658C20.4773 9.85507 20.4744 9.89374 20.4707 9.93254C20.47 9.93938 20.4694 9.9462 20.4687 9.95303C20.4643 9.99556 20.4591 10.0382 20.4529 10.081C20.4528 10.0813 20.4528 10.0815 20.4528 10.0817C20.3115 11.0492 19.7016 12.082 18.9542 12.701C18.9489 12.7054 18.9435 12.7099 18.9381 12.7143C18.9145 12.7337 18.8904 12.7522 18.8665 12.7707C18.8533 12.7808 18.8404 12.7913 18.8271 12.8012C18.8201 12.8064 18.8131 12.8113 18.806 12.8164C18.7817 12.8342 18.7573 12.852 18.7328 12.869C18.7315 12.8699 18.7304 12.871 18.7292 12.8719C18.5071 13.0252 18.2762 13.1403 18.0445 13.2058L18.0028 13.2176C17.1529 13.4575 16.9577 13.457 16.1047 13.2128C15.8752 13.1471 15.6466 13.0324 15.4265 12.8801C15.426 12.8797 15.4255 12.8793 15.4251 12.879C15.4162 12.8729 15.4077 12.8664 15.3988 12.8602C15.3728 12.8417 15.3468 12.8232 15.321 12.8037C15.3147 12.799 15.3084 12.7939 15.302 12.789C14.4769 12.1557 13.7969 11.0064 13.6893 9.96185ZM15.2104 15.1634C15.4547 15.0581 15.6162 14.7951 15.6162 14.4949L15.6163 13.9867C15.7134 14.0271 15.8114 14.0617 15.9099 14.09C16.3994 14.23 16.7292 14.2999 17.0595 14.2999C17.3859 14.2999 17.7129 14.2316 18.1953 14.0954L18.237 14.0837C18.3393 14.0548 18.4409 14.0189 18.5418 13.9769V14.4949C18.5418 14.7951 18.7033 15.0583 18.9477 15.1636L19.5861 15.5274C19.5785 15.534 19.5711 15.541 19.5634 15.5476C19.5457 15.5626 19.528 15.577 19.5102 15.5917C19.4767 15.6193 19.443 15.6464 19.4088 15.6728C19.3896 15.6876 19.3705 15.7022 19.3513 15.7165C19.3164 15.7424 19.2811 15.7677 19.2457 15.7924C19.2276 15.8049 19.2096 15.8178 19.1913 15.8301C19.148 15.8594 19.104 15.8873 19.0598 15.9147C19.0493 15.9211 19.0391 15.928 19.0286 15.9343C18.9737 15.9676 18.9182 15.9991 18.8621 16.0294C18.847 16.0375 18.8316 16.0449 18.8166 16.0529C18.775 16.0746 18.7334 16.0958 18.6913 16.1158C18.6711 16.1254 18.6506 16.1346 18.6303 16.1439C18.5921 16.1612 18.5538 16.178 18.5152 16.194C18.494 16.2029 18.4726 16.2117 18.4512 16.2201C18.4112 16.2359 18.3709 16.2509 18.3304 16.2652C18.3111 16.2721 18.2918 16.2793 18.2723 16.2858C18.219 16.3038 18.1652 16.3207 18.1112 16.3362C18.1047 16.338 18.0984 16.3403 18.0918 16.3421C18.0311 16.3592 17.9697 16.3746 17.9081 16.3886C17.8904 16.3926 17.8726 16.3959 17.8548 16.3997C17.8106 16.409 17.7662 16.4179 17.7215 16.4257C17.6995 16.4295 17.6774 16.433 17.6553 16.4364C17.6137 16.4428 17.5722 16.4486 17.5304 16.4536C17.5079 16.4564 17.4854 16.4591 17.4628 16.4614C17.4186 16.4659 17.3741 16.4695 17.3295 16.4724C17.3102 16.4738 17.2908 16.4755 17.2714 16.4764C17.2075 16.4797 17.1433 16.4817 17.0789 16.4817C17.0145 16.4817 16.9504 16.4797 16.8864 16.4764C16.8671 16.4755 16.8478 16.4738 16.8286 16.4724C16.7839 16.4695 16.7394 16.4659 16.695 16.4614C16.6725 16.4592 16.6501 16.4564 16.6276 16.4538C16.5858 16.4486 16.5441 16.4429 16.5025 16.4364C16.4804 16.433 16.4584 16.4297 16.4365 16.4257C16.3918 16.418 16.3473 16.4091 16.303 16.3997C16.2853 16.3959 16.2674 16.3926 16.2498 16.3886C16.1882 16.3746 16.1268 16.3592 16.066 16.3421C16.0596 16.3403 16.0534 16.3381 16.0471 16.3363C15.9929 16.3207 15.939 16.3038 15.8856 16.2858C15.8662 16.2793 15.8471 16.2721 15.8278 16.2653C15.7872 16.2509 15.7467 16.2359 15.7065 16.22C15.6852 16.2117 15.6641 16.2029 15.643 16.1942C15.6043 16.178 15.5657 16.1612 15.5274 16.1437C15.5072 16.1346 15.487 16.1254 15.467 16.1159C15.4244 16.0956 15.3823 16.0742 15.3403 16.0523C15.3257 16.0447 15.3109 16.0375 15.2963 16.0296C15.2399 15.9992 15.1843 15.9676 15.1291 15.9342C15.1193 15.9282 15.1097 15.9219 15.0999 15.9158C15.055 15.8881 15.0104 15.8596 14.9663 15.83C14.9485 15.8179 14.9309 15.8055 14.9131 15.793C14.8772 15.7681 14.8415 15.7426 14.8063 15.7162C14.7874 15.7022 14.7687 15.6879 14.75 15.6736C14.7154 15.6468 14.6811 15.6191 14.647 15.5912C14.6298 15.5769 14.6123 15.5627 14.5952 15.5481C14.5874 15.5415 14.5798 15.5344 14.572 15.5276L15.2104 15.1634ZM7.24097 25.3346C7.16134 25.3346 7.08741 25.2983 7.03278 25.2322C6.97787 25.1657 6.95042 25.0791 6.95556 24.988C6.95572 24.9851 6.95588 24.982 6.956 24.9791L7.14932 19.961C7.19197 19.2159 7.46481 18.5327 7.89854 18.0149C7.90269 18.0106 7.90707 18.0063 7.91106 18.0017C8.16618 17.7006 8.47571 17.4593 8.81368 17.2961C8.82074 17.2926 8.82785 17.2893 8.83495 17.286C8.8799 17.2648 8.92524 17.2445 8.97108 17.2261L9.57214 16.985V25.3346H7.24097ZM9.81857 15.9268L8.70561 16.3732C8.66383 16.3901 8.62249 16.4077 8.58159 16.4259C8.56857 16.4318 8.55588 16.4383 8.54298 16.4442C8.53285 16.449 8.5228 16.4538 8.51273 16.4585C8.49518 16.467 8.4774 16.4749 8.46002 16.4836C8.44082 16.4932 8.42207 16.5035 8.40303 16.5135C8.38235 16.5242 8.36147 16.5347 8.34107 16.5459C8.32182 16.5565 8.30295 16.5678 8.28392 16.5788C8.26418 16.5902 8.24416 16.6012 8.22464 16.6129C8.2067 16.6237 8.18915 16.6352 8.17137 16.6463C8.15125 16.659 8.1309 16.6713 8.111 16.6843C8.0935 16.6958 8.07644 16.708 8.05911 16.7198C8.04647 16.7286 8.03378 16.737 8.02126 16.7458L8.01557 12.1241L10.8648 12.1196L10.869 15.5034L9.83786 15.917C9.83114 15.9196 9.82508 15.9236 9.81857 15.9268ZM10.369 25.3346V16.6653L13.0049 15.6077L13.31 17.307C13.424 17.9426 13.7669 18.5052 14.2505 18.8506L16.6805 20.5865V25.3346H10.369ZM14.6749 18.085C14.3746 17.8706 14.1617 17.5211 14.0909 17.1264L13.9026 16.0772C13.9175 16.0914 13.9317 16.1066 13.9468 16.1205C14.8255 16.9403 15.9207 17.3862 17.0791 17.3862C17.4001 17.3862 17.7161 17.3513 18.0241 17.2844C18.8466 17.1056 19.6108 16.6933 20.2555 16.0772L20.0672 17.1264C19.9964 17.5211 19.7836 17.8704 19.4833 18.085L17.0791 19.8022L14.6749 18.085ZM23.789 25.3346H17.4775V20.5865L19.9076 18.8507C20.3913 18.5052 20.7341 17.9426 20.8481 17.307L21.1532 15.6077L23.789 16.6653V25.3346Z"
                      fill="#50504F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_9_74">
                      <rect width="28" height="26" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              }/>
              <Tile title="Efficient Building" icon={
                <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M17.5358 9.80079C17.4038 9.66889 17.1883 9.67456 17.0635 9.81322L13.0396 14.2842C12.166 15.2547 10.6573 15.2944 9.73406 14.3711L8.45728 13.0943C8.32189 12.959 8.09951 12.969 7.97693 13.1162L5.6341 15.9275C5.28876 16.3419 4.67286 16.3979 4.25845 16.0527C3.84404 15.7073 3.78806 15.0914 4.13339 14.677L6.47623 11.8656C7.33419 10.836 8.89095 10.7654 9.83859 11.7131L11.1153 12.9899C11.2473 13.1217 11.4628 13.1161 11.5876 12.9774L15.6114 8.50641C16.485 7.53586 17.9938 7.49617 18.917 8.41948L21.2022 10.7047C21.5836 11.0861 21.5836 11.7045 21.2022 12.0859C20.8207 12.4674 20.2024 12.4674 19.8209 12.0859L17.5358 9.80079Z"
                        fill="#50504F"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M12.6976 0C13.237 0 13.6743 0.437305 13.6743 0.976737V2.60463H23.1161C24.3748 2.60463 25.3952 3.625 25.3952 4.88369V15.9534C25.3952 18.6506 23.2086 20.8371 20.5115 20.8371H18.2499L21.3689 26.5554C21.6273 27.0289 21.4528 27.6223 20.9791 27.8805C20.5056 28.1389 19.9123 27.9644 19.654 27.4907L16.0247 20.8371H13.6743V25.0696C13.6743 25.609 13.237 26.0463 12.6976 26.0463C12.1582 26.0463 11.7208 25.609 11.7208 25.0696V20.8371H9.37045L5.74116 27.4907C5.48284 27.9644 4.88955 28.1389 4.41597 27.8805C3.9424 27.6223 3.7679 27.0289 4.02621 26.5554L7.14528 20.8371H4.88369C2.1865 20.8371 0 18.6506 0 15.9534V4.88369C0 3.625 1.02036 2.60463 2.27905 2.60463H11.7208V0.976737C11.7208 0.437305 12.1582 0 12.6976 0V0ZM8.81052 18.8836H8.77248H4.88369C3.26538 18.8836 1.95347 17.5716 1.95347 15.9534V4.88369C1.95347 4.70388 2.09924 4.55811 2.27905 4.55811H23.1161C23.2958 4.55811 23.4417 4.70388 23.4417 4.88369V15.9534C23.4417 17.5716 22.1297 18.8836 20.5115 18.8836H16.6226C16.61 18.8833 16.5974 18.8833 16.5846 18.8836H8.81052ZM17.0635 9.81317C17.1882 9.67452 17.4038 9.66885 17.5357 9.80075L19.8209 12.0859C20.2023 12.4673 20.8207 12.4673 21.2021 12.0859C21.5835 11.7044 21.5835 11.086 21.2021 10.7046L18.9169 8.41944C17.9937 7.49613 16.485 7.53581 15.6114 8.50637L11.5875 12.9773C11.4627 13.116 11.2472 13.1216 11.1153 12.9898L9.83853 11.713C8.89089 10.7654 7.33412 10.836 6.47617 11.8655L4.13333 14.677C3.788 15.0914 3.84398 15.7072 4.25839 16.0526C4.6728 16.3979 5.28869 16.3419 5.63404 15.9275L7.97687 13.1161C8.09944 12.969 8.32183 12.959 8.45722 13.0943L9.73399 14.3711C10.6572 15.2944 12.166 15.2547 13.0396 14.2842L17.0635 9.81317Z"
                        fill="#50504F"/>
                </svg>
              }/>
            </Row>
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column ps-4 justify-content-center">
            <h2 className="my-2 section-title">What we do</h2>
            <p className="section-subtitle my-3 py-2">
              At Reamer Made, we understand that construction can be a tough business - but it doesn't have to be. We
              are dedicated to helping you tell your story and branding yourself in the industry.
            </p>
            <Button variant="outline-primary" className="my-4 cta-btn-outline me-auto">
              <Link to="/about-us">Know More</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatWeDoSection;
