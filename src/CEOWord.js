import React from 'react';
import icon from "./assets/icon.svg";


function CEOWord() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-10"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:ring-gray-800/10 dark:bg-gray-900 dark:shadow-2xl dark:shadow-indigo-500/10"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl py-24 px-4 sm:px-6 lg:px-8">
        <img
          className="mx-auto size-28 mb-10"
          src={icon}
          alt="Real Enquiries"
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 dark:text-gray-200 sm:text-2xl sm:leading-9">
            <p>
              “I created Real Enquiries to simplify real estate management. It's been a game changer for me and my team. We can onboard a new client with a few clicks and get the application process flowing effortlessly.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto size-24 rounded-full"
              src="https://itjunior.dev/assets/images/me.webp"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-90 dark:text-gray-300">Itamar Junior</div>
              <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900 dark:fill-gray-100">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <div className="text-gray-600 dark:text-gray-300">CEO of Real Enquiries</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default CEOWord;
