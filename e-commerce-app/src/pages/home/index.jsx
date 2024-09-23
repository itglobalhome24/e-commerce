import React from 'react'
import homepage_img from "../../assets/images/homepage_promo.webp"

const Home = () => {
    return (
        <div className='container mx-auto pt-10 pb-6 px-5 w-screen box-border'>
            <div className='grid grid-cols-1 sm:grid-cols-2 mb-14'>
                <img src={homepage_img} alt="homepage_promo_image" className='h-auto mb-5 sm:col-span-1' />
                <div className='sm:col-span-1'>
                    <h2 className='text-6xl mb-5'>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In similique
                        ipsam enim ipsum tempora, pariatur blanditiis nam rem consequatur obcaecati.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In similique
                        ipsam enim ipsum tempora, pariatur blanditiis nam rem consequatur obcaecati.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
