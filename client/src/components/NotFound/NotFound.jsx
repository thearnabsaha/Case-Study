import React from 'react'
import "@/components/NotFound/NotFound.scss"
const NotFound = () => {
  return (
    <>
<div className="mx-auto w-full max-w-7xl px-2 md:px-4 h-screen flex flex-col a">
  <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
    <div className="lg:flex lg:items-center lg:space-x-10">
      <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="question-mark"
        className="h-[300px] w-auto"
      />
      <div>
        <p className="mt-6 text-sm font-semibold text-[#FFB600]">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-[#1D1D1B] md:text-3xl">
          We can&#x27;t find that page
        </h1>
        <p className="mt-4 text-[#595959]">
          Sorry, the page you are looking for doesn&#x27;t exist or has been
          moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-[#1D1D1B] px-3 py-2 text-sm font-semibold text-[#1D1D1B] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D1D1B]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Go back
          </button>
          <button
            type="button"
            className="rounded-md bg-[#FFB500] px-3 py-2 text-sm font-semibold text-[#1D1D1B] shadow-sm hover:bg-[#FFB500]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB500]"
          >
            Login Page
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto flex max-w-7xl justify-center items-end h-full">
    <footer className="px-4 py-10">
  <hr />
      <p className="text-base font-semibold text-[#595959]">
        © 2024 Team Grevelops
      </p>
    </footer>
  </div>
</div>
    </>
  )
}

export default NotFound