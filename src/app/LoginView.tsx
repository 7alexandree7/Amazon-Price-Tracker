import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LogInIcon } from 'lucide-react'
import React from 'react'

const LoginView = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Card className='min-w-md text-center'>
                <div>
                    <h1 className='text-2xl font-bold m-0'>Welcome Back</h1>
                    <p>Plase login to continue</p>
                </div>
                <div className='w-full flex items-center justify-center '>
                    <Button className='flex items-center  gap-2 cursor-pointer p-6 rounded-lg'><LogInIcon /> Login with Google</Button>
                </div>
            </Card>
        </div>
    )
}

export default LoginView
