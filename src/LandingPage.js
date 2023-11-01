import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function LandingPage() {
    return (
        <div className="bg-white dark:bg-gray-800">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default LandingPage;
