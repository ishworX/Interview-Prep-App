import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Image src={'logo.svg'} alt="logo" width={160} height={100} />
            <ul>
                <li>Dashboard</li>
                <li>Questions</li>
                <li>Upgrade</li>
                <li>How it works</li>
            </ul>
            
            <UserButton/>
        </div>
    )
}

export default Header