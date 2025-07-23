import React, { ReactNode } from 'react'
import Sidebar from '@/components/sidebar/Sidebar'

type DefaultLayoutProps = {
    children: ReactNode
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <main className='lg:grid lg:grid-cols-4 w-screen h-screen gap-0 overflow-hidden'>
                <Sidebar />
                <div className='lg:col-span-3 border border-amber-400'>
                    {children}
                </div>
            </main>
        </>
    )
}

export default DefaultLayout
