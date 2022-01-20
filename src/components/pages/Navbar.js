import React from 'react'
export default function Navbar(props) {
  return (
    <div>
      <nav className="w-full bg-gray-100 shadow">
        <div className="flex justify-between h-16">
          <div className="mr-5 h-full xl:flex items-center justify-end hidden">
            <div className="w-full h-full flex items-center">
              <div className="w-32 cursor-pointer">
                <svg className="h-10 w-15 text-gray-600 hover:text-gray-400" viewBox="0 0 18 15" fill="currentColor" onClick={props.sidebarShow}>
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="visible xl:hidden flex items-center relative">
            <svg className="h-10 w-15 text-gray-600 hover:text-gray-400" viewBox="0 0 18 15" fill="currentColor" onClick={props.sidebarShow}>
              <path
                fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  )
}