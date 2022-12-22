import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import LargeTile from '../common/LargeTile'

const WhatWeDoSection = () => {
    return (
        <section className="services-section bg-white pt-2 pb-4 mb-4 px-4 px-md-3">
            <Container className="py-2 py-md-3 pb-md-4 px-0 px-md-2">
                <Row className="justify-content-start justify-content-lg-center justify-content-lg-between gap-0 px-0 mx-0">
                    <Col
                        sm={12}
                        lg={4}
                        className="py-2 py-md-3 large-tile px-0"
                    >
                        <h2 className="section-title mb-3">
                            Our <br />
                            Services
                        </h2>
                        <p className="section-subtitle mt-4 mb-3 pe-4">
                            Our marketing and design services are tailored to
                            help you succeed, whether you're an independent
                            contractor or working on a massive civil
                            construction project, we’re dedicated to helping you
                            tell your story. So whatever stage of construction
                            you're in, Reamer Made is here to help your business
                            grow.
                        </p>
                    </Col>
                    <LargeTile
                        title="Strategy"
                        icon={
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.0839 32.0029H3.27683C2.68895 32.0015 2.12554 31.7674 1.70984 31.3517C1.29415 30.936 1.05999 30.3726 1.05859 29.7847V13.8388C1.06693 13.2555 1.30414 12.6989 1.71909 12.2889C2.13404 11.8789 2.69349 11.6484 3.27683 11.6471H26.0839C26.6718 11.6485 27.2352 11.8826 27.6509 12.2983C28.0666 12.714 28.3007 13.2774 28.3021 13.8653V29.7847C28.3007 30.3726 28.0666 30.936 27.6509 31.3517C27.2352 31.7674 26.6718 32.0015 26.0839 32.0029ZM3.27683 12.7059C2.97427 12.7072 2.68408 12.8261 2.46768 13.0376C2.25129 13.249 2.12567 13.5364 2.11742 13.8388V29.7847C2.11742 30.0922 2.23957 30.3871 2.457 30.6045C2.67443 30.822 2.96933 30.9441 3.27683 30.9441H26.0839C26.3914 30.9441 26.6863 30.822 26.9037 30.6045C27.1211 30.3871 27.2433 30.0922 27.2433 29.7847V13.8388C27.2351 13.5364 27.1094 13.249 26.893 13.0376C26.6766 12.8261 26.3864 12.7072 26.0839 12.7059H3.27683Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M14.6815 28.0588C13.4521 28.0588 12.2502 27.6945 11.2277 27.0119C10.2052 26.3293 9.40791 25.359 8.93647 24.2236C8.46503 23.0882 8.34062 21.8385 8.57893 20.6324C8.81724 19.4263 9.40759 18.3179 10.2754 17.4471C11.1433 16.5763 12.2497 15.9822 13.455 15.7398C14.6603 15.4974 15.9103 15.6175 17.0474 16.0851C18.1844 16.5527 19.1574 17.3467 19.8434 18.3669C20.5295 19.3871 20.8979 20.5877 20.9021 21.8171C20.9042 22.6355 20.7448 23.4464 20.4332 24.2033C20.1216 24.9601 19.6638 25.6481 19.0861 26.2278C18.5083 26.8076 17.8219 27.2677 17.0661 27.5819C16.3103 27.8961 15.5 28.0581 14.6815 28.0588ZM14.6815 16.6765C13.6608 16.6765 12.6631 16.9791 11.8143 17.546C10.9656 18.113 10.304 18.9188 9.91315 19.8617C9.52232 20.8046 9.41979 21.8422 9.61853 22.8433C9.81727 23.8444 10.3084 24.7642 11.0297 25.4863C11.7511 26.2084 12.6703 26.7004 13.6712 26.9002C14.6722 27.0999 15.7099 26.9985 16.6531 26.6086C17.5964 26.2187 18.403 25.558 18.9708 24.7098C19.5386 23.8617 19.8422 22.8642 19.8433 21.8435C19.846 21.1634 19.7147 20.4894 19.4566 19.8601C19.1986 19.2308 18.819 18.6586 18.3396 18.1762C17.8601 17.6938 17.2902 17.3107 16.6625 17.0488C16.0348 16.7869 15.3616 16.6514 14.6815 16.65V16.6765Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M13.5314 24.7765C13.4445 24.776 13.359 24.7542 13.2825 24.7129C13.198 24.6679 13.1273 24.6008 13.0779 24.5188C13.0284 24.4367 13.0022 24.3428 13.002 24.247V19.3765C13.0022 19.2807 13.0284 19.1868 13.0779 19.1047C13.1273 19.0227 13.198 18.9556 13.2825 18.9106C13.3658 18.8688 13.4586 18.8498 13.5515 18.8554C13.6445 18.861 13.7343 18.891 13.812 18.9423L17.3961 21.3776C17.4672 21.4257 17.5255 21.4903 17.5661 21.5659C17.6067 21.6416 17.6283 21.7259 17.629 21.8118C17.6291 21.8985 17.608 21.9839 17.5674 22.0605C17.5267 22.1371 17.4679 22.2026 17.3961 22.2512L13.812 24.6865C13.7288 24.7424 13.6315 24.7736 13.5314 24.7765ZM14.0608 20.377V23.2465L16.1784 21.8118L14.0608 20.377Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M34.4109 10.7312C34.2907 10.735 34.1728 10.6977 34.0766 10.6255C33.9803 10.5534 33.9115 10.4506 33.8815 10.3341C33.3923 8.51602 32.2034 6.96545 30.5746 6.0211C28.9458 5.07675 27.0095 4.81539 25.1886 5.2941C25.0531 5.32963 24.9091 5.31003 24.788 5.23957C24.667 5.16912 24.5787 5.05357 24.5427 4.91822C24.5072 4.78274 24.5268 4.6387 24.5972 4.51764C24.6677 4.39658 24.7832 4.30838 24.9186 4.27234C25.9566 3.99377 27.0393 3.92249 28.1048 4.06258C29.1704 4.20267 30.1979 4.55137 31.1286 5.08875C32.0593 5.62614 32.875 6.34168 33.5291 7.19447C34.1831 8.04726 34.6627 9.02059 34.9404 10.0588C34.9759 10.1943 34.9563 10.3383 34.8858 10.4594C34.8154 10.5805 34.6998 10.6687 34.5645 10.7047C34.5153 10.7227 34.4633 10.7317 34.4109 10.7312Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M31.8701 11.4088C31.7506 11.4129 31.6332 11.3764 31.5371 11.3053C31.4409 11.2341 31.3717 11.1325 31.3407 11.0171C31.1895 10.4481 30.9276 9.91463 30.57 9.44702C30.2125 8.97941 29.7662 8.58687 29.2568 8.29185C28.7474 7.99683 28.1849 7.80513 27.6013 7.72769C27.0178 7.65026 26.4247 7.68862 25.856 7.84058C25.7886 7.85896 25.7181 7.86381 25.6488 7.85484C25.5795 7.84587 25.5126 7.82326 25.4521 7.78831C25.3915 7.75337 25.3385 7.70678 25.2961 7.65123C25.2536 7.59569 25.2226 7.53229 25.2048 7.4647C25.1693 7.32921 25.1889 7.18517 25.2593 7.06412C25.3298 6.94306 25.4453 6.85485 25.5807 6.81882C26.2839 6.63072 27.0173 6.58299 27.739 6.67834C28.4607 6.7737 29.1565 7.01027 29.7867 7.37456C30.417 7.73884 30.9693 8.2237 31.4122 8.80144C31.855 9.37919 32.1797 10.0385 32.3678 10.7418C32.4033 10.8772 32.3837 11.0213 32.3132 11.1423C32.2428 11.2634 32.1272 11.3516 31.9919 11.3876C31.9525 11.4005 31.9115 11.4076 31.8701 11.4088Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M29.3295 12.0865C29.21 12.0906 29.0926 12.0541 28.9964 11.9829C28.9003 11.9118 28.8311 11.8102 28.8001 11.6947C28.6734 11.2203 28.3637 10.8155 27.9388 10.5694C27.514 10.3232 27.0088 10.2557 26.5342 10.3818C26.4663 10.4026 26.3948 10.4095 26.3242 10.4022C26.2535 10.3948 26.185 10.3733 26.1229 10.3389C26.0607 10.3045 26.0061 10.258 25.9622 10.202C25.9184 10.1461 25.8863 10.0819 25.8678 10.0133C25.8494 9.94472 25.8449 9.8731 25.8546 9.80272C25.8644 9.73235 25.8883 9.66466 25.9248 9.6037C25.9613 9.54274 26.0096 9.48974 26.0671 9.44787C26.1245 9.406 26.1897 9.37612 26.2589 9.36C27.0051 9.16098 27.7998 9.26602 28.4687 9.65208C29.1376 10.0381 29.6261 10.6737 29.8271 11.4194C29.8455 11.4868 29.8504 11.5573 29.8414 11.6266C29.8324 11.6959 29.8098 11.7628 29.7749 11.8233C29.7399 11.8839 29.6933 11.9369 29.6378 11.9793C29.5822 12.0218 29.5188 12.0528 29.4512 12.0706L29.3295 12.0865Z"
                                    fill="#3D3D3D"
                                />
                            </svg>
                        }
                    />
                    <LargeTile
                        title="Media"
                        icon={
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_487_11937)">
                                    <path
                                        d="M29.1111 12.7107C31.4528 10.798 30.6439 7.01553 27.7179 6.23161C26.9533 6.02678 26.1618 6.06938 25.4363 6.34576L23.1114 2.31883C22.1653 0.680118 19.8189 0.636693 18.8114 2.23446C15.9518 6.77012 12.1422 10.6278 7.61927 13.5552C7.36171 13.7215 7.26624 14.0653 7.41864 14.3452C7.44309 14.3899 11.2941 21.0593 11.3196 21.1035C11.4852 21.3903 11.852 21.4889 12.1393 21.3231C12.4262 21.1574 12.5245 20.7904 12.3589 20.5035L8.74752 14.2483C13.0602 11.3653 16.8798 7.54834 19.8266 2.87445C20.3536 2.0384 21.5787 2.06435 22.0721 2.91885L30.397 17.338C30.8909 18.1937 30.2987 19.2665 29.3127 19.3049C23.7808 19.5204 18.3646 20.9353 13.4128 23.468C13.3917 23.4787 7.77737 26.7207 7.39074 26.9439C6.38714 27.5234 5.09936 27.1783 4.52004 26.1747L1.48089 20.9105C0.901502 19.907 1.24659 18.6192 2.25011 18.0398L5.90788 15.928C6.19483 15.7623 6.29316 15.3953 6.12748 15.1084C5.9618 14.8213 5.59474 14.7231 5.30786 14.8888L1.6501 17.0006C0.0735559 17.9107 -0.468558 19.9339 0.441665 21.5105L3.48089 26.7746C4.39119 28.3513 6.41437 28.8933 7.9909 27.983L8.12928 27.9032L11.8816 34.4023C12.4205 35.3359 13.6123 35.6556 14.5464 35.1164L15.8624 34.3566C16.7962 33.8174 17.1156 32.6256 16.5764 31.6917L13.9171 27.0857C13.7514 26.7987 13.3844 26.7004 13.0975 26.866C12.8105 27.0317 12.7122 27.3987 12.8779 27.6857L15.5372 32.2918C15.7447 32.6511 15.6218 33.1098 15.2624 33.3173L13.9464 34.0771C13.587 34.2846 13.1283 34.1616 12.9209 33.8023L9.16858 27.3032L13.9728 24.5294C18.674 22.1274 23.9041 20.7164 29.3595 20.5039C31.2501 20.4302 32.3809 18.374 31.4362 16.7379L29.1111 12.7107ZM28.9398 8.56657C29.5321 9.59259 29.3193 10.8658 28.4993 11.651L26.0479 7.40494C27.1226 7.0897 28.3379 7.52396 28.9398 8.56657ZM34.8084 5.89897L33.2559 6.79532C32.9687 6.96108 32.6019 6.8626 32.4363 6.57572C32.2705 6.28876 32.3689 5.92177 32.6559 5.7561L34.2083 4.85975C34.4955 4.69399 34.8624 4.79247 35.028 5.07935C35.1936 5.36631 35.0953 5.73329 34.8084 5.89897ZM28.1318 2.47919L28.5104 1.06645C28.5962 0.746345 28.9251 0.556516 29.2454 0.642168C29.5655 0.72797 29.7554 1.057 29.6696 1.37704L29.291 2.78977C29.2054 3.10905 28.8772 3.29986 28.556 3.21406C28.236 3.12825 28.0461 2.7993 28.1318 2.47919ZM35.9794 12.3059C35.9075 12.5739 35.6651 12.7507 35.4001 12.7507C35.2915 12.7507 35.3675 12.7631 33.8317 12.3515C33.5116 12.2657 33.3216 11.9368 33.4074 11.6167C33.4932 11.2966 33.8222 11.1068 34.1423 11.1924L35.5551 11.5709C35.8751 11.6567 36.0652 11.9858 35.9794 12.3059Z"
                                        fill="#3D3D3D"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_487_11937">
                                        <rect
                                            width="36"
                                            height="36"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    />
                    <LargeTile
                        title="Experience & Design"
                        icon={
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_487_11893)">
                                    <path
                                        d="M35.6887 26.1928L31.9987 24.3478L29.6502 18.2391C29.6226 18.1668 29.5803 18.1011 29.5261 18.0459C29.4719 17.9908 29.4069 17.9474 29.3352 17.9184L14.7637 12.0937C14.6618 12.0532 14.5503 12.0433 14.4428 12.0653C14.3354 12.0873 14.2367 12.1402 14.159 12.2175L12.2155 14.1609C12.1392 14.2388 12.0872 14.3371 12.0657 14.4439C12.0442 14.5508 12.0543 14.6616 12.0946 14.7628L17.9193 29.3344C17.9482 29.4061 17.9916 29.4711 18.0468 29.5253C18.1019 29.5795 18.1677 29.6217 18.2399 29.6494L24.3487 31.9978L26.1937 35.6878C26.2325 35.7692 26.2903 35.84 26.3623 35.8943C26.4342 35.9487 26.5182 35.9849 26.6071 36C26.637 36.0028 26.6672 36.0028 26.6971 36C26.846 35.9994 26.9886 35.9397 27.0937 35.8341L35.8349 27.0928C35.8992 27.0307 35.9478 26.9542 35.9767 26.8696C36.0056 26.785 36.0138 26.6947 36.0008 26.6062C35.9857 26.5174 35.9495 26.4334 35.8952 26.3615C35.8408 26.2895 35.77 26.2317 35.6887 26.1928ZM13.273 14.6897L13.5852 14.3803L20.8387 21.6337C20.3606 22.3111 20.1542 23.1432 20.2601 23.9655C20.3661 24.7877 20.7767 25.5403 21.4108 26.0744C22.0449 26.6084 22.8563 26.8851 23.6846 26.8497C24.5129 26.8143 25.2978 26.4694 25.884 25.8832C26.4703 25.297 26.8152 24.5121 26.8506 23.6838C26.886 22.8555 26.6093 22.0441 26.0752 21.4099C25.5411 20.7758 24.7886 20.3652 23.9663 20.2593C23.144 20.1533 22.312 20.3598 21.6346 20.8378L14.3812 13.5844L14.6905 13.2722L28.6883 18.8719L30.8962 24.615L24.6158 30.8953L18.8727 28.6875L13.273 14.6897ZM23.5415 21.3553C24.047 21.3561 24.5367 21.5321 24.927 21.8533C25.3173 22.1746 25.5842 22.6213 25.6821 23.1172C25.7801 23.6132 25.703 24.1278 25.4641 24.5733C25.2252 25.0189 24.8392 25.3678 24.3719 25.5606C23.9046 25.7535 23.3849 25.7784 22.9013 25.6311C22.4177 25.4837 22.0002 25.1733 21.7198 24.7526C21.4394 24.3319 21.3136 23.8271 21.3637 23.324C21.4138 22.821 21.6367 22.3508 21.9946 21.9937C22.4053 21.5844 22.9616 21.3548 23.5415 21.3553ZM26.8518 34.4869L25.4455 31.6744L31.6696 25.4503L34.4821 26.8566L26.8518 34.4869Z"
                                        fill="#3D3D3D"
                                    />
                                    <path
                                        d="M10.7583 30.0938C10.6508 29.9921 10.5084 29.9354 10.3604 29.9354C10.2123 29.9354 10.07 29.9921 9.96238 30.0938L9.24801 30.8081C7.34164 28.2208 6.28996 25.1031 6.23954 21.8897C6.18913 18.6762 7.14249 15.5271 8.96676 12.8812C9.51331 13.182 10.1426 13.2975 10.7603 13.2105C11.3781 13.1235 11.951 12.8387 12.3932 12.3987C12.8354 11.9587 13.1231 11.3872 13.2133 10.7699C13.3034 10.1526 13.191 9.52274 12.893 8.97469C15.5389 7.15042 18.688 6.19706 21.9014 6.24747C25.1149 6.29789 28.2325 7.34957 30.8199 9.25594L30.0943 9.96187C29.9897 10.0673 29.931 10.2099 29.9311 10.3584C29.9307 10.4325 29.9449 10.5059 29.9729 10.5744C30.0009 10.6429 30.0421 10.7053 30.0943 10.7578L32.5749 13.2188C32.6803 13.3235 32.8228 13.3823 32.9714 13.3823C33.1201 13.3823 33.2626 13.3235 33.368 13.2188L35.8346 10.7522C35.8869 10.6999 35.9284 10.6379 35.9567 10.5696C35.985 10.5013 35.9995 10.4281 35.9995 10.3542C35.9995 10.2803 35.985 10.2071 35.9567 10.1388C35.9284 10.0705 35.8869 10.0085 35.8346 9.95625L33.368 7.48969C33.2626 7.38492 33.1201 7.32612 32.9714 7.32612C32.8228 7.32612 32.6803 7.38492 32.5749 7.48969L31.6214 8.4375C29.2716 6.66927 26.4935 5.55833 23.5724 5.21877C20.6512 4.87921 17.6924 5.32325 14.9996 6.50531L18.2424 3.27094C18.6101 3.44663 19.0281 3.4864 19.4223 3.38319C19.8166 3.27998 20.1615 3.04047 20.3959 2.70714C20.6303 2.37382 20.7391 1.96823 20.7029 1.56233C20.6668 1.15643 20.488 0.776458 20.1983 0.48983C19.9087 0.203202 19.5268 0.0284438 19.1206 -0.0034404C18.7143 -0.0353246 18.3099 0.0777263 17.9791 0.315656C17.6482 0.553586 17.4124 0.901013 17.3133 1.2963C17.2143 1.69159 17.2585 2.10918 17.438 2.475L11.9649 7.95656C11.4092 7.5838 10.7413 7.41554 10.0753 7.48052C9.40931 7.54551 8.78654 7.83971 8.31338 8.31287C7.84022 8.78603 7.54602 9.4088 7.48103 10.0748C7.41604 10.7408 7.58431 11.4087 7.95707 11.9644L2.47551 17.4375C2.10826 17.2585 1.68946 17.2156 1.29353 17.3163C0.897599 17.4169 0.550179 17.6547 0.313006 17.9873C0.0758329 18.32 -0.0357327 18.7259 -0.00186592 19.133C0.0320009 19.5402 0.209107 19.9221 0.49798 20.211C0.786853 20.4998 1.16879 20.6769 1.57591 20.7108C1.98303 20.7447 2.38898 20.6331 2.72161 20.3959C3.05424 20.1588 3.29202 19.8113 3.39269 19.4154C3.49336 19.0195 3.4504 18.6007 3.27145 18.2334L6.51426 14.9991C5.33102 17.6911 4.88557 20.6496 5.22365 23.5707C5.56173 26.4918 6.67115 29.2703 8.43801 31.6209L7.48738 32.5744C7.38262 32.6798 7.32381 32.8223 7.32381 32.9709C7.32381 33.1195 7.38262 33.2621 7.48738 33.3675L9.95395 35.8341C10.059 35.9397 10.2016 35.9994 10.3505 36C10.4247 36.0001 10.4982 35.9854 10.5668 35.9569C10.6353 35.9285 10.6976 35.8867 10.7499 35.8341L13.2193 33.3675C13.324 33.2621 13.3828 33.1195 13.3828 32.9709C13.3828 32.8223 13.324 32.6798 13.2193 32.5744L10.7583 30.0938ZM32.9771 8.67656L34.6477 10.3472L32.9771 12.0178L31.3064 10.3472L32.9771 8.67656ZM18.563 1.30219C18.6466 1.21792 18.7533 1.16038 18.8697 1.13687C18.986 1.11336 19.1067 1.12494 19.2165 1.17014C19.3262 1.21533 19.4201 1.29211 19.4861 1.39074C19.5521 1.48936 19.5874 1.60537 19.5874 1.72406C19.5874 1.84275 19.5521 1.95877 19.4861 2.05739C19.4201 2.15601 19.3262 2.23279 19.2165 2.27799C19.1067 2.32319 18.986 2.33477 18.8697 2.31125C18.7533 2.28774 18.6466 2.23021 18.563 2.14594C18.5076 2.09056 18.4636 2.0248 18.4336 1.95241C18.4036 1.88002 18.3881 1.80243 18.3881 1.72406C18.3881 1.6457 18.4036 1.5681 18.4336 1.49572C18.4636 1.42333 18.5076 1.35756 18.563 1.30219ZM9.11301 9.1125C9.27635 8.94838 9.4705 8.81814 9.68432 8.72928C9.89813 8.64041 10.1274 8.59467 10.3589 8.59467C10.5905 8.59467 10.8198 8.64041 11.0336 8.72928C11.2474 8.81814 11.4415 8.94838 11.6049 9.1125C11.8518 9.35901 12.02 9.67322 12.0883 10.0154C12.1566 10.3575 12.1218 10.7122 11.9884 11.0346C11.855 11.357 11.629 11.6326 11.339 11.8265C11.0489 12.0204 10.7078 12.1239 10.3589 12.1239C10.0101 12.1239 9.669 12.0204 9.37894 11.8265C9.08888 11.6326 8.86286 11.357 8.72947 11.0346C8.59608 10.7122 8.56133 10.3575 8.6296 10.0154C8.69787 9.67322 8.86611 9.35901 9.11301 9.1125ZM2.14926 19.4062C2.03442 19.502 1.88792 19.5514 1.73855 19.5446C1.58917 19.5379 1.44772 19.4755 1.34199 19.3698C1.23625 19.264 1.17388 19.1226 1.16713 18.9732C1.16039 18.8238 1.20974 18.6773 1.30551 18.5625C1.41807 18.4519 1.56957 18.3899 1.72738 18.3899C1.8852 18.3899 2.0367 18.4519 2.14926 18.5625C2.2047 18.6179 2.24869 18.6836 2.2787 18.756C2.30871 18.8284 2.32416 18.906 2.32416 18.9844C2.32416 19.0627 2.30871 19.1403 2.2787 19.2127C2.24869 19.2851 2.2047 19.3509 2.14926 19.4062ZM10.3589 34.6303L8.68832 32.9597L10.3589 31.2891L12.0296 32.9597L10.3589 34.6303Z"
                                        fill="#3D3D3D"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_487_11893">
                                        <rect
                                            width="36"
                                            height="36"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    />
                    <LargeTile
                        title="Data, Analytics, & Optimization"
                        icon={
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_487_11904)">
                                    <path
                                        d="M35.2969 30.7969H33.1875V20.25C33.1875 19.8617 32.8727 19.5469 32.4844 19.5469H27.9844C27.596 19.5469 27.2812 19.8617 27.2812 20.25V30.7969H25.3125V27.0703C25.3125 26.682 24.9977 26.3672 24.6094 26.3672C24.221 26.3672 23.9062 26.682 23.9062 27.0703V30.7969H20.8125V17.0156H23.9062V20.7422C23.9062 21.1305 24.221 21.4453 24.6094 21.4453C24.9977 21.4453 25.3125 21.1305 25.3125 20.7422V16.3125C25.3125 15.9242 24.9977 15.6094 24.6094 15.6094H20.1094C19.721 15.6094 19.4062 15.9242 19.4062 16.3125V30.7969H17.4375V24.75C17.4375 24.3617 17.1227 24.0469 16.7344 24.0469H12.2344C11.846 24.0469 11.5312 24.3617 11.5312 24.75V30.7969H9.5625V21.375C9.5625 20.9867 9.24771 20.6719 8.85938 20.6719H4.35938C3.97104 20.6719 3.65625 20.9867 3.65625 21.375V30.7969H1.40625V4.5C1.40625 4.11166 1.09146 3.79688 0.703125 3.79688C0.314789 3.79688 0 4.11166 0 4.5V31.5C0 31.8883 0.314789 32.2031 0.703125 32.2031H35.2969C35.6852 32.2031 36 31.8883 36 31.5C36 31.1117 35.6852 30.7969 35.2969 30.7969ZM5.0625 30.7969V22.0781H8.15625V30.7969H5.0625ZM12.9375 30.7969V25.4531H16.0312V30.7969H12.9375ZM28.6875 30.7969V20.9531H31.7812V30.7969H28.6875Z"
                                        fill="#3D3D3D"
                                    />
                                    <path
                                        d="M11.1486 18.2779C11.2859 18.4152 11.4658 18.4838 11.6457 18.4838C11.8257 18.4838 12.0057 18.4152 12.1429 18.2779L22.701 7.71975L27.6321 12.6507C27.9066 12.9252 28.3518 12.9252 28.6264 12.6507L32.7523 8.5249L33.7246 9.49718C33.8582 9.63077 34.0377 9.70312 34.2218 9.70312C34.2825 9.70312 34.3436 9.69532 34.4038 9.67915C34.6464 9.61411 34.8359 9.42462 34.901 9.18197L35.9767 5.16719C36.0418 4.92455 35.9724 4.66565 35.7948 4.48797C35.6171 4.31037 35.3582 4.24083 35.1156 4.30601L31.1008 5.38179C30.8581 5.44683 30.6686 5.63632 30.6036 5.87897C30.5386 6.12162 30.608 6.38051 30.7856 6.55819L31.7579 7.53054L28.1292 11.1592L23.1983 6.22821C22.9237 5.95364 22.4785 5.95371 22.2039 6.22821L11.6457 16.7863L4.92886 10.0695C4.65436 9.79495 4.20907 9.79495 3.9345 10.0695C3.65986 10.344 3.65986 10.7892 3.9345 11.0639L11.1486 18.2779ZM34.3032 5.97958L33.8578 7.6417L32.6411 6.42494L34.3032 5.97958Z"
                                        fill="#3D3D3D"
                                    />
                                    <path
                                        d="M24.6094 23.2031C24.4245 23.2031 24.243 23.2784 24.1123 23.4091C23.9815 23.5399 23.9062 23.7213 23.9062 23.9062C23.9062 24.0912 23.9815 24.2726 24.1123 24.4034C24.243 24.5341 24.4245 24.6094 24.6094 24.6094C24.7943 24.6094 24.9757 24.5341 25.1065 24.4034C25.2373 24.2726 25.3125 24.0912 25.3125 23.9062C25.3125 23.7213 25.2373 23.5399 25.1065 23.4091C24.9757 23.2784 24.7943 23.2031 24.6094 23.2031Z"
                                        fill="#3D3D3D"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_487_11904">
                                        <rect
                                            width="36"
                                            height="36"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    />
                    <LargeTile
                        title="Digital Marketing & Promotion"
                        icon={
                            <svg
                                width="36"
                                height="36"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.02946 12.6292C4.93911 12.6292 4.85055 12.604 4.77369 12.5565C4.69684 12.509 4.63473 12.4411 4.59433 12.3603C4.55392 12.2795 4.53682 12.189 4.54493 12.099C4.55305 12.009 4.58606 11.9231 4.64027 11.8508C4.94572 11.4508 5.27656 11.0709 5.63075 10.7134C5.72253 10.6286 5.84341 10.5824 5.96834 10.5843C6.09328 10.5862 6.21268 10.6362 6.30181 10.7237C6.39094 10.8113 6.44296 10.9298 6.44709 11.0547C6.45122 11.1795 6.40714 11.3012 6.324 11.3945C5.99946 11.7218 5.6964 12.0697 5.4167 12.4361C5.37143 12.4959 5.31291 12.5445 5.24573 12.578C5.17855 12.6116 5.10453 12.6291 5.02946 12.6292Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M15.0955 33.2708C11.7105 33.2702 8.45373 31.9762 5.99128 29.6537C3.52883 27.3311 2.04684 24.1555 1.84845 20.7764C1.8448 20.7125 1.85378 20.6485 1.87487 20.5881C1.89595 20.5277 1.92873 20.472 1.97133 20.4243C2.01393 20.3765 2.06551 20.3376 2.12314 20.3098C2.18077 20.282 2.24332 20.2658 2.3072 20.2622C2.37109 20.2585 2.43507 20.2675 2.49548 20.2886C2.5559 20.3097 2.61157 20.3424 2.65932 20.385C2.70707 20.4276 2.74596 20.4792 2.77378 20.5369C2.80159 20.5945 2.81778 20.657 2.82142 20.7209C2.94067 22.7423 3.55711 24.703 4.61602 26.429C5.67493 28.155 7.14357 29.5929 8.89157 30.6151C10.6396 31.6372 12.6129 32.2121 14.6364 32.2885C16.6599 32.365 18.6709 31.9407 20.4911 31.0534C22.2351 30.2016 23.7527 28.9489 24.9196 27.3979C26.0864 25.8468 26.8695 24.0416 27.2045 22.1297C27.5396 20.2179 27.4173 18.254 26.8474 16.3985C26.2776 14.5431 25.2766 12.849 23.9262 11.4548C22.0226 9.48872 19.5171 8.21462 16.807 7.83467C14.0969 7.45473 11.3375 7.99071 8.96672 9.35757C8.89286 9.40057 8.80893 9.42323 8.72347 9.42324C8.61187 9.42433 8.50329 9.387 8.41594 9.31753C8.32859 9.24806 8.26778 9.15066 8.24371 9.04168C8.21965 8.9327 8.23379 8.81875 8.28376 8.71896C8.33373 8.61916 8.4165 8.53958 8.51818 8.49357C10.2825 7.48455 12.2551 6.89451 14.2837 6.76899C16.3123 6.64348 18.3426 6.98585 20.2179 7.76968C22.0932 8.5535 23.7632 9.75781 25.0991 11.2896C26.4349 12.8214 27.4009 14.6398 27.9224 16.6042C28.4439 18.5686 28.5069 20.6267 28.1066 22.6193C27.7064 24.612 26.8535 26.486 25.6139 28.0967C24.3743 29.7074 22.7811 31.0117 20.9573 31.9088C19.1335 32.8059 17.128 33.2719 15.0955 33.2708Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M2.7837 17.0805C2.74198 17.0807 2.70043 17.0753 2.66013 17.0645C2.59832 17.0483 2.5403 17.0201 2.48938 16.9815C2.43847 16.9429 2.39566 16.8946 2.36341 16.8394C2.33115 16.7843 2.31008 16.7233 2.30139 16.66C2.2927 16.5967 2.29657 16.5323 2.31278 16.4705C2.45057 15.9537 2.62335 15.4469 2.82992 14.9536C2.8792 14.8343 2.97386 14.7395 3.09305 14.69C3.21225 14.6405 3.34623 14.6404 3.46551 14.6897C3.58479 14.739 3.67961 14.8336 3.72911 14.9528C3.7786 15.072 3.77872 15.206 3.72943 15.3253C3.53951 15.7779 3.38071 16.2429 3.25413 16.7171C3.22692 16.8212 3.16599 16.9133 3.08088 16.979C2.99576 17.0448 2.89125 17.0805 2.7837 17.0805Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M15.0968 28.8525C13.3472 28.8527 11.6368 28.3341 10.182 27.3622C8.72717 26.3903 7.59323 25.0088 6.92358 23.3925C6.25393 21.7761 6.07864 19.9974 6.41989 18.2814C6.76114 16.5655 7.60359 14.9892 8.8407 13.752C10.0778 12.5148 11.654 11.6723 13.37 11.331C15.086 10.9896 16.8646 11.1648 18.481 11.8344C20.0974 12.5039 21.479 13.6378 22.451 15.0926C23.4229 16.5473 23.9417 18.2576 23.9416 20.0072C23.9393 22.3524 23.0067 24.6008 21.3485 26.2591C19.6902 27.9174 17.4419 28.8501 15.0968 28.8525ZM15.0968 12.1344C13.5396 12.1342 12.0174 12.5958 10.7226 13.4608C9.42779 14.3257 8.41856 15.5552 7.82254 16.9938C7.22651 18.4323 7.07047 20.0153 7.37413 21.5426C7.6778 23.0698 8.42753 24.4727 9.52853 25.5738C10.6295 26.6749 12.0323 27.4249 13.5595 27.7287C15.0867 28.0326 16.6697 27.8767 18.1084 27.2809C19.547 26.685 20.7766 25.6759 21.6417 24.3812C22.5068 23.0865 22.9686 21.5644 22.9686 20.0072C22.9664 17.9201 22.1364 15.919 20.6606 14.4431C19.1849 12.9671 17.1839 12.1369 15.0968 12.1344Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M15.097 24.4328C14.2214 24.4328 13.3654 24.1732 12.6374 23.6867C11.9094 23.2003 11.342 22.5089 11.0069 21.6999C10.6718 20.891 10.5842 20.0009 10.755 19.1421C10.9258 18.2834 11.3474 17.4945 11.9666 16.8754C12.5857 16.2563 13.3745 15.8346 14.2333 15.6638C15.092 15.493 15.9822 15.5807 16.7911 15.9157C17.6 16.2508 18.2914 16.8182 18.7779 17.5463C19.2643 18.2743 19.524 19.1302 19.524 20.0058C19.5229 21.1796 19.0562 22.305 18.2262 23.135C17.3962 23.965 16.2708 24.4318 15.097 24.4328ZM15.097 16.5542C14.4138 16.5542 13.746 16.7567 13.178 17.1363C12.61 17.5158 12.1673 18.0553 11.9058 18.6864C11.6444 19.3176 11.576 20.012 11.7093 20.6821C11.8425 21.3521 12.1715 21.9675 12.6546 22.4506C13.1376 22.9337 13.7531 23.2626 14.4231 23.3959C15.0931 23.5292 15.7876 23.4608 16.4188 23.1993C17.0499 22.9379 17.5894 22.4952 17.9689 21.9272C18.3484 21.3592 18.551 20.6914 18.551 20.0082C18.5502 19.0924 18.1861 18.2143 17.5385 17.5667C16.8909 16.9191 16.0128 16.5549 15.097 16.5542Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M15.6895 20.0072C15.5929 20.0072 15.4985 19.9784 15.4183 19.9246C15.3381 19.8707 15.2758 19.7941 15.2392 19.7047C15.2027 19.6152 15.1936 19.5169 15.2132 19.4223C15.2327 19.3277 15.28 19.2411 15.349 19.1734L28.5046 6.29416C28.55 6.24837 28.604 6.21206 28.6635 6.18734C28.7231 6.16262 28.7869 6.14999 28.8514 6.15016C28.9159 6.15034 28.9797 6.16333 29.0391 6.18838C29.0985 6.21343 29.1523 6.25004 29.1975 6.29607C29.2426 6.34211 29.2781 6.39666 29.302 6.45655C29.3259 6.51644 29.3376 6.58048 29.3365 6.64494C29.3354 6.7094 29.3215 6.773 29.2956 6.83204C29.2697 6.89109 29.2323 6.94439 29.1856 6.98886L16.0301 19.8681C15.9392 19.9573 15.8169 20.0072 15.6895 20.0072Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M30.7772 9.0973H30.75L27.0152 8.88762C26.8974 8.88099 26.7859 8.83173 26.7017 8.74902C26.6175 8.66632 26.5662 8.55582 26.5574 8.43811L26.2592 4.47178C26.2539 4.40153 26.2638 4.33095 26.2885 4.26493C26.3131 4.19891 26.3517 4.13902 26.4018 4.08941L29.3961 1.11405C29.4586 1.05199 29.5369 1.00807 29.6224 0.987002C29.708 0.965931 29.7977 0.968495 29.8819 0.99442C29.9661 1.02034 30.0417 1.06866 30.1006 1.1342C30.1595 1.19974 30.1995 1.28004 30.2163 1.36654L30.8487 4.62892L33.7798 5.23703C33.8657 5.25503 33.9452 5.29595 34.0098 5.35545C34.0743 5.41496 34.1216 5.49083 34.1465 5.57502C34.1715 5.65921 34.1732 5.74858 34.1514 5.83365C34.1297 5.91872 34.0853 5.99632 34.0231 6.05822L31.1207 8.95135C31.0759 8.99709 31.0224 9.03352 30.9635 9.05857C30.9046 9.08361 30.8413 9.09678 30.7772 9.0973ZM27.4959 7.93897L30.588 8.11265L32.6998 6.0086L30.336 5.51822C30.2421 5.49871 30.1562 5.45191 30.0888 5.38371C30.0215 5.31551 29.9758 5.22894 29.9575 5.13487L29.4331 2.44654L27.2439 4.6187L27.4959 7.93897Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M22.8708 35.027C22.793 35.0272 22.7163 35.0086 22.6471 34.973C22.5779 34.9374 22.5183 34.8856 22.4733 34.8222L20.3094 31.7719C20.2706 31.72 20.2427 31.6608 20.2271 31.5978C20.2115 31.5349 20.2087 31.4695 20.2188 31.4054C20.2289 31.3414 20.2517 31.28 20.2858 31.2249C20.32 31.1698 20.3648 31.1221 20.4176 31.0845C20.4705 31.047 20.5303 31.0204 20.5936 31.0063C20.6569 30.9922 20.7223 30.9909 20.7861 31.0024C20.8499 31.014 20.9108 31.0382 20.9651 31.0736C21.0194 31.109 21.0661 31.1549 21.1024 31.2086L23.004 33.8882L25.0541 32.633L23.1991 29.8051C23.164 29.7516 23.1397 29.6918 23.1277 29.629C23.1157 29.5662 23.1162 29.5016 23.1291 29.439C23.1421 29.3763 23.1672 29.3169 23.2031 29.2639C23.2391 29.211 23.2851 29.1657 23.3385 29.1306C23.392 29.0954 23.4518 29.0712 23.5146 29.0592C23.5774 29.0471 23.642 29.0476 23.7046 29.0606C23.7673 29.0735 23.8267 29.0987 23.8797 29.1346C23.9326 29.1705 23.9779 29.2165 24.013 29.2699L26.1429 32.5172C26.1785 32.5717 26.2028 32.6328 26.2145 32.6968C26.2261 32.7608 26.2247 32.8266 26.2105 32.8901C26.1962 32.9536 26.1694 33.0136 26.1315 33.0665C26.0937 33.1195 26.0456 33.1643 25.9901 33.1983L23.1242 34.9531C23.0482 35.0006 22.9604 35.0262 22.8708 35.027Z"
                                    fill="#3D3D3D"
                                />
                                <path
                                    d="M7.32075 35.027C7.23113 35.027 7.14325 35.0023 7.0668 34.9555L4.20091 33.2008C4.14543 33.1667 4.09733 33.1219 4.05948 33.069C4.02163 33.016 3.99479 32.956 3.98054 32.8925C3.9663 32.829 3.96494 32.7633 3.97656 32.6992C3.98817 32.6352 4.01252 32.5741 4.04815 32.5197L6.17848 29.2714C6.24944 29.1635 6.36037 29.0882 6.48687 29.062C6.61336 29.0359 6.74506 29.0611 6.85299 29.132C6.96092 29.203 7.03624 29.3139 7.06238 29.4404C7.08851 29.5669 7.06333 29.6986 6.99237 29.8065L5.1374 32.633L7.18745 33.8882L9.08864 31.2086C9.12563 31.1565 9.17252 31.1122 9.22663 31.0782C9.28074 31.0442 9.34102 31.0212 9.40401 31.0106C9.46701 30.9999 9.53149 31.0017 9.59378 31.0159C9.65607 31.0302 9.71495 31.0565 9.76704 31.0935C9.81914 31.1305 9.86345 31.1774 9.89743 31.2315C9.9314 31.2856 9.95439 31.3459 9.96507 31.4089C9.97576 31.4719 9.97393 31.5364 9.95969 31.5987C9.94546 31.661 9.91909 31.7198 9.8821 31.7719L7.71772 34.8222C7.67272 34.8856 7.6132 34.9372 7.54413 34.9729C7.47506 35.0085 7.39846 35.0271 7.32075 35.027Z"
                                    fill="#3D3D3D"
                                />
                            </svg>
                        }
                    />
                </Row>
            </Container>
        </section>
    )
}

export default WhatWeDoSection
