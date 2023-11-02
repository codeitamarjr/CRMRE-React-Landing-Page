import React from 'react';

function MainContent() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                 aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4B77BE] to-[#1F4788] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                     style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
                </div>
            </div>

            <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-9 sm:flex sm:justify-center">
                    <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-900/20 md:text-3xl">
                        Your one stop solution to manage&nbsp;
                        <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
                            <ul className="block animate-text-slide-5 text-left leading-tight">
                                <li>enquiries.</li>
                                <li>applications.</li>
                                <li>documents.</li>
                                <li>occupancy.</li>
                                <li>properties.</li>
                                <li aria-hidden="true">enquiries.</li>
                            </ul>
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-7xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
                        Real Enquiries
                    </p>

                    <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-100">
                        Integrated with Ireland's top AD platform, Daft, we streamline the rental application process from Enquiry to Occupancy.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Get started</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Learn more →</a> */}
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
