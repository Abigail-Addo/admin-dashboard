import React from 'react'
import { MdDashboard } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { FiFileText } from "react-icons/fi";


const Sidebar = () => {
    return (
        <>
            <aside className='bg-[#01589A] p-6 overflow-x-hidden overflow-y-auto'>
                {/* logo */}
                <div className="flex justify-center bg-white p-6 rounded-md">
                    <Image
                        src="/logo/logo-tablet.png"
                        alt="Logo Large"
                        width={100}
                        height={40}
                        className="hidden lg:block w-auto h-auto"
                        priority
                    />
                </div>

                <div className='pt-10 grid grid-cols-1 gap-8'>
                    <div className='flex items-center justify-center'>
                        <MdDashboard />
                        <Link href="/">Dashboard</Link>
                    </div>
                    <div>
                        <FiFileText />
                        <Link href="/">Invoices</Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
