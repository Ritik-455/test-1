import React from 'react'
import Girl1 from '../assets/images/PNG/Device-img.png'
import Girl2 from '../assets/images/PNG/Device-img2.png'
import ellipstop from '../assets/images/PNG/top-ellips.png'
import ellipsbottom from '../assets/images/PNG/bottom-ellips.png'


const Cutting = () => {
    return (
        <>
            <div className=" position-relative">
                <div className="container ">
                    <div className=" d-flex justify-content-center mt-42">
                        <div className="cutting_box w-100">
                            <div className="d-flex gap-1 gap-md-3 align-items-center justify-content-center">
                                <div className="heading_line"></div>
                                <h3 className=' font-kaush fw-normal text-32 lh-46 mb-0 color-green'>Cutting Edge Technology</h3>
                                <div className="heading_line"></div>
                            </div>
                            <div className=" d-flex justify-content-center mt-2">
                                <h2 className=' font-arch fw-semibold text-48 lh-62 color-light-black mb-0 max_w_799 text-center mt-2 mt-md-0 '>
                                    Devices and Treatments to meet your needs
                                </h2>
                            </div>
                            <div className="mt-60 d-flex gap-40 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <div className="inner_card bg-white w-100">
                                    <img src={Girl1} alt="Girl1" className=' max_w_510 w-100' />
                                    <div className="p-30">
                                        <p className=' font-arch fw-semibold text-25 lh-32 mb-0 color-light-black mb-0 mt-30'>Devices</p>
                                        <p className=' font-arch fw-normal text-16 lh-24 color-darkgrey mb-0 mt-3'>Our state-of-the-art devices are designed to target a variety of skin concerns with precision and efficacy.</p>
                                        <button className="cmn-btn font-arch fw-semibold text-18 lh-19 text-white mt-27">
                                            Our Devices
                                        </button>
                                    </div>
                                </div>
                                <div className="inner_card bg-white w-100">
                                    <img src={Girl2} alt="Girl1" className=' max_w_510 w-100' />
                                    <div className="p-30">
                                        <p className=' font-arch fw-semibold text-25 lh-32 mb-0 color-light-black mb-0 mt-30'>Treatments</p>
                                        <p className=' font-arch fw-normal text-16 lh-24 color-darkgrey mb-0 mt-3'>At Halsey Dermatology, we offer a comprehensive range of treatments to address your unique skin care needs.</p>
                                        <button className="cmn-btn font-arch fw-semibold text-18 lh-19 text-white mt-27">
                                            Our Treatments
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
  


  



                <div className="position-absolute top_ellips_pos d-none d-lg-block"><img src={ellipstop} alt="ellipstop" /></div>
                <div className="position-absolute bottom_pos d-none d-lg-block"><img src={ellipsbottom} alt="ellipsbottom" /></div>
            </div>
        </>
    )
}

export default Cutting