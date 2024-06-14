import React from "react";

export default function timeline() {
return (
<>
    <div className="w-full relative pb-8">
        {/* <span
            className="absolute left-2/4 -translate-x-2/4 text-center mx-auto z-10 items-center rounded-md bg-sky-500 px-2 py-1 text-xs font-medium text-slate-50 ring-1 ring-inset ring-slate-50 cursor-default">
            • Employment history
        </span> */}
        <button
            className="cursor-auto absolute left-2/4 -translate-x-2/4 h-8 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Work history
        </button>
    </div>
    {/* <div className='max-w-5xl mx-auto px-8 py-16'>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 py-16">
            <li className="mb-10 ms-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February
                    2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages
                    including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing
                    pages.</p>
                <a href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn
                    more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></a>
            </li>
            <li className="mb-10 ms-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March
                    2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components
                    are first designed in Figma and we keep a parity between the two versions even as we update the
                    project.</p>
            </li>
            <li className="ms-4">
                <div
                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April
                    2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web
                    components and interactive elements built on top of Tailwind CSS.</p>
            </li>
        </ol>
    </div> */}
    <div className="container max-w-3xl mx-auto px-4 py-16">
        <div className="relative">
            <div className="border-r-2 border-slate-800/[0.8] absolute h-full top-0 md:left-1/2 transform -translate-x-1/2" />
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 md:w-5/12" />
                <div className="z-20 relative md:static -left-[15px] md:left-0 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">🧑🏽‍💻</h1>
                </div>
                <div
                    className="workBadge-1 relative customShadow cursor-pointer order-1 bg-transparent rounded-xl box-border border-transparent hover:border-sky-400 border-2 shadow-sky-300 rounded-lg w-full md:w-5/12 px-6 py-4 transition-all duration-500">
                    <h3 className="mb-3 font-bold text-slate-50 text-xl">
                        Junior Frontend Developer
                    </h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-200 text-opacity-100">
                        Wirtualna Polska Media
                    </p>
                    <p className="text-sm leading-snug tracking-wide text-slate-400">
                        oct 2022 - now
                    </p>
                    <img src="./pointer.png" alt="" className="pointer absolute w-8 right-0 z-10" />
                </div>
            </div>
            <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full right-timeline md:left-timeline">
                <div className="order-1 md:w-5/12" />
                <div className="z-20 relative md:static -left-[15px] md:left-0 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg">🤓</h1>
                </div>
                <div
                    className="workBadge-2 customShadow cursor-pointer order-1 bg-transparent rounded-xl box-border border-transparent hover:border-sky-400 border-2 shadow-sky-300 rounded-lg w-full md:w-5/12 px-6 py-4 transition-all duration-500">
                    <h3 className="mb-3 font-bold text-white text-xl">Intern</h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-200 text-opacity-100">
                        Wirtualna Polska Media
                    </p>
                    <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100">
                        jul 2022 - sep 2022
                    </p>
                </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 md:w-5/12" />
                <div className="z-20 relative md:static -left-[15px] md:left-0 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">📚</h1>
                </div>
                <div
                    className="workBadge-3 customShadow cursor-pointer order-1 bg-transparent rounded-xl box-border border-transparent hover:border-sky-400 border-2 shadow-sky-300 rounded-lg w-full md:w-5/12 px-6 py-4 transition-all duration-500">
                    <h3 className="mb-3 font-bold text-white text-xl">
                        Freelance Graphic Designer & No-code Developer
                    </h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-200 text-opacity-100">
                        Wkręceni w Eko
                    </p>
                    <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100">
                        2020 - now
                    </p>
                </div>
            </div>
            <div className="mb-8 flex justify-between md:flex-row-reverse items-center w-full right-timeline md:left-timeline">
                <div className="order-1 md:w-5/12" />
                <div className="z-20 relative md:static -left-[15px] md:left-0 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto text-white font-semibold text-lg">✏️</h1>
                </div>
                <div
                    className="workBadge-4 customShadow cursor-pointer order-1 bg-transparent rounded-xl box-border border-transparent hover:border-sky-400 border-2 shadow-sky-300 rounded-lg w-full md:w-5/12 px-6 py-4 transition-all duration-500">
                    <h3 className="mb-3 font-bold text-white text-xl">
                        PR team member
                    </h3>
                    <p className="text-sm leading-snug tracking-wide text-slate-200 text-opacity-100">
                        Fundacja Studenckie Forum Business Centre Club
                    </p>
                    <p className="text-sm leading-snug tracking-wide text-slate-400 text-opacity-100">
                        jul 2021 – oct 2022
                    </p>
                </div>
            </div>
        </div>
    </div>
</>
);
}