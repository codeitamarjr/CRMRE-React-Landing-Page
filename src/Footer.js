import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mx-auto bg-white rounded-lg m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Transform your operational workflow and elevate team collaboration across the board. Real Enquiries enables team members to manage all aspects of the real estate business — from lettings to accounting, sharing critical information effortlessly.
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024&nbsp;
                    <a href="https://realenquiries.com" className="hover:underline">Real Enquiries</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    {/* <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    */}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
