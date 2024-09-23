import React from 'react'
import methodsImage from "../assets/images/methods.png"

const Footer = () => {
    return (
        <div className="bg-gray-800 py-4 px-3 w-screen box-border">
            <div className="container flex items-center justify-between">
                <p className="text-white text-sm">&copy; One World E-Commerce - All Right Reserved</p>
                <div>
                    <img src={methodsImage} alt="methods" className="h-3 sm:h-4" />
                </div>
            </div>
        </div>
    )
}

export default Footer
