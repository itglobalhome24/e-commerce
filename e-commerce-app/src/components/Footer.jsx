import React from 'react'
import methodsImage from "../assets/images/methods.png"

const Footer = () => {
    return (
        <div className="bg-gray-800 py-4">
            <div className="container flex items-center justify-between">
                <p className="text-white">&copy; One World E-Commerce - All Right Reserved</p>
                <div>
                    <img src={methodsImage} alt="methods" className="h-5" />
                </div>
            </div>
        </div>
    )
}

export default Footer
