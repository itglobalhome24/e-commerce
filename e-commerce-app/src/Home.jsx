import React from 'react'
import "./App.css"
import homepage_img from "../src/assets/homepage_promo.webp"

const Home = () => {
    return (
        <div className='container pt-14 pb-6'>
            <img src={homepage_img} alt="homepage_promo_image" className='inline-block w-2/3' />
            <div className='inline-block w-1/3 align-top box-border p-7'>
                <h2 className='inline-block text-6xl mb-6'>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In similique
                    ipsam enim ipsum tempora, pariatur blanditiis nam rem consequatur obcaecati.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In similique
                    ipsam enim ipsum tempora, pariatur blanditiis nam rem consequatur obcaecati.
                </p>
            </div>
        </div>
    )
}

export default Home
