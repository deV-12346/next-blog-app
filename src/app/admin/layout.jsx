import Sidebar from "@/components/adminComponents/Sidebar";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { ToastContainer } from "react-toastify";

export default function Layout({children}){
      return (
      <>
       <ToastContainer theme="dark"/>
      <div className="flex">
            <Sidebar/>
            <div className="flex flex-col w-full">
                 <div className="flex justify-between items-center w-full bg-indigo-50 py-3 px-10">
                       <h1 className="font-bold text-2xl">Admin Panel</h1>
                       <Image src={assets.profile_icon} width={40} alt="profile-icon" />
                 </div>
                 {children}
            </div>
      </div>
      </>
      )
}