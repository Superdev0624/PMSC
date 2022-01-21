import React, { useState } from 'react'
export default function Navbar(props) {
  const [profile, setProfile] = useState('')
  return (
    <div>
      <nav className="w-full bg-gray-100 shadow">
        {/* <div className="flex justify-between h-16"> */}
          <div className="mr-5 xl:flex items-center justify-around hidden h-16">
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
            <div className="w-full flex items-center pl-8 justify-end">
              <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                <div className="rounded-full">
                  {profile ? (
                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="text-sm ml-2">My Profile</span>
                        </div>
                      </li>
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                          </svg>
                          <span className="text-sm ml-2">Sign out</span>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                  <div className="relative">
                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                  </div>
                </div>
                <p className="text-gray-800 text-sm mx-3">Jane Doe</p>
                <div className="cursor-pointer text-gray-600">
                  <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
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
        {/* </div> */}
      </nav>
    </div>
  )
}