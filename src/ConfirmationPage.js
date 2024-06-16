import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import icon from "./assets/icon.svg";

function ConfirmationPage() {
    return (
        <div className="bg-white dark:bg-gray-800">

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4B77BE] to-[#1F4788] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">

                    <div className="text-center">

                        <p className="flex md:flex-row flex-col items-center justify-center text-7xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                            <img src={icon} alt="Real Enquiries" className="w-20 h-auto mb-4 md:mb-0" />
                            <span className="sr-only">Real Enquiries</span>
                            Real Enquiries
                        </p>

                        <div className="mt-6 bg-white p-8 rounded shadow-lg text-center rounded-lg">
                            <h1 className="text-2xl font-semibold mb-4">Thank You!</h1>
                            <p className="mb-4">Please send the message opened on your email client to be added into the waiting list!</p>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/" className="text-sm font-semibold leading-6 text-indigo-500 dark:text-indigo-400">Go back to Home &#8592;</Link>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(60%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(60%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>

                <div className="absolute inset-x-0 top-[calc(90%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(90%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ConfirmationPage;
