import React from 'react';

function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1"></div>
                <div className="lg:flex lg:gap-x-12 text-gray-900 dark:text-gray-400">
                    {/* <a href="#" className="text-sm font-semibold leading-6">Product</a>
                    <a href="#" className="text-sm font-semibold leading-6">Features</a>
                    <a href="#" className="text-sm font-semibold leading-6">Company</a> */}
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end"></div>
            </nav>
        </header>
    );
}

export default Header;
