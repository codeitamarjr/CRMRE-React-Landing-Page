import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mx-auto bg-white rounded-lg m-4 dark:bg-gray-800 dark:shadow-2xl">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Real Enquiries is a comprehensive solution for managing your real estate business. We offer a wide
                    range of features to help you manage enquiries and the onboarding process with ease.
                </div>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023&nbsp; 
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
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li> */}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
