import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Logo */}
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <NavLink to="/" className="flex items-center">
                            <span className="text-2xl font-extrabold text-white italic">SHAPARZZ</span>
                        </NavLink>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-auto mb-6 md:mb-0">
                        <ul className="flex flex-wrap justify-center md:justify-end -mx-4">
                            <li className="px-4 py-2">
                                <NavLink to="/privacy-policy" className="hover:text-yellow-300 transition-colors text-white">
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li className="px-4 py-2">
                                <NavLink to="/terms-of-service" className="hover:text-yellow-300 transition-colors text-white">
                                    Terms of Service
                                </NavLink>
                            </li>
                            <li className="px-4 py-2">
                                <NavLink to="/return-policy" className="hover:text-yellow-300 transition-colors text-white">
                                    Return Policy
                                </NavLink>
                            </li>
                            <li className="px-4 py-2">
                                <NavLink to="/contact-us" className="hover:text-yellow-300 transition-colors text-white">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="w-full md:w-auto">
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
                    © 2024 <a href='https://github.com/usemeastrashcan' className='hover:text-yellow-300 text-white transition-colors'>hasnatahmad</a>. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer