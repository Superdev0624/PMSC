import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  const [productfirst, setProductfirst] = useState(false);
  const [productsecond, setProductsecond] = useState(false);
  const [productthird, setProductthird] = useState(false);
  return (

    <div className={"w-full top-0 h-screen flex justify-between cursor-pointer " + (props.value ? "absolute translate-x-0 " : "hidden absolute -translate-x-full")}>
      <div className="inset-0 fixed left-0" onClick={props.sidebarHide} />
      <div className={`top-0 left-0 w-64 bg-gray-800 text-white shadow fixed h-full z-40 ease-in-out duration-300 ${props.value ? "relative translate-x-0 " : "relative translate-x-full"}`}>
        <div className="flex items-center justify-between px-3">
          <div className="h-16 w-full flex items-center justify-between">
            <p className="text-6xl italic font-medium pl-5 text-indigo-700">PMSC</p>
          </div>
          <div id="closeSideBar" className="flex items-center justify-center h-10 w-10"onClick={props.sidebarHide}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mt-5 text-center">
          <div className="pt-2 fixed absolute h-48 max-h-full md:max-h-screen">
            <ul className="f-m-m">
              <li className="flex flex-row items-center h-15 justify-center transform text-center hover:-translate-y-2 cursor-pointer transition-transform ease-in duration-200 text-white hover:bg-green-600 hover:text-white">
                <span className="uppercase ml-1 text-2xl m-2 font-medium hover:italic" onClick={() => setProductfirst(!productfirst)}>Patients& therapsites</span>
              </li>
              {productfirst ? (
                <div>
                  <ul>
                    <Link to="/company"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">patients</li></Link>
                    <Link to="/department"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">items</li></Link>
                    <Link to="/user"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">therapiste</li></Link>
                    <Link to="/app"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">treatment Order</li></Link>
                    <Link to="/adminnotification"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Agenda</li></Link>
                  </ul>
                </div>
              ) : (
                ""
              )}
              <li className="flex flex-row items-center h-15 justify-center transform cursor-pointer transition-transform hover:-translate-y-2 ease-in duration-200 text-white hover:bg-green-600 hover:text-white">
                <span className="uppercase text-2xl m-2 font-medium hover:italic" onClick={() => setProductsecond(!productsecond)}>Management</span>
              </li>
              {productsecond ? (
                <div>
                  <ul>
                    <Link to="/company"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Recipt File</li></Link>
                    <Link to="/department"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Accounts Receivable/Payable</li></Link>
                    <Link to="/user"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Invoice</li></Link>
                    <Link to="/app"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Statement Of Account</li></Link>
                    <Link to="/adminnotification"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Patient Transactions</li></Link>
                    <Link to="/user"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Daily Transactions</li></Link>
                    <Link to="/app"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Items Statistics</li></Link>                  </ul>
                </div>
              ) : (
                ""
              )}
              <li className="flex flex-row items-center h-15 justify-center transform cursor-pointer transition-transform hover:-translate-y-2 ease-in duration-200 text-white hover:bg-green-600 hover:text-white">
                <span className="uppercase text-2xl m-2 font-medium hover:italic" onClick={() => setProductthird(!productthird)}>Reports</span>
              </li>
              {productthird ? (
                <div>
                  <ul>
                    <Link to="/company"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Medicinal Prescription</li></Link>
                    <Link to="/department"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Medical Report</li></Link>
                    <Link to="/user"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Clinical Statistics</li></Link>
                    <Link to="/app"><li className="pt-1 pb-1 flex flex-row items-center transform transition-transform hover:-translate-y-2 ease-in duration-200 text-white font-Medium justify-center text-lg hover:bg-green-600 hover:text-white">Pat. by Type</li></Link>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

