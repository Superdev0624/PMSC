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
        <div className="flex text-6xl text-white justify-between cursor-pointer fixed right-5 top-7 z-50" onClick={props.sidebarHide}>
          <span className="font-bold text-4xl ">PMSC</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </div>
        <div className="flex justify-center mt-20 h-4/5 text-center">
          <div className="pt-2 fixed absolute">
            <ul className="f-m-m h-96">
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

