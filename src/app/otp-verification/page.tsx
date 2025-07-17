"use client"

import * as React from 'react';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import Link from 'next/link';

interface IFormInput {
    id: string | number;
    code: string;
}
const OTPVerification = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            code: '',
        }
    })

    // function to verify an admin
    const onSubmit: SubmitHandler<IFormInput> = async () => {
        try {
            console.log("clicked")

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <main className='w-screen h-screen relative'>
                {/* hero image */}
                <div className="absolute inset-0 -z-10 hidden lg:flex">
                    <Image
                        src="/assets/hero.png"
                        alt="hero"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-[#D9D9D9] opacity-30" />
                </div>

                {/* form */}
                <div className="flex justify-center items-center h-full w-full px-4 overflow-y-scroll">
                    <div className='h-fit bg-white rounded-lg lg:shadow-lg overflow-y-scroll px-6 py-8 md:px-8 md:py-10'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className=" w-full space-y-6"
                        >

                            {/* logo */}
                            <div className="flex justify-center">
                                {/* Small screen logo */}
                                <Image
                                    src="/logo/logo-mobile.png"
                                    alt="Logo Small"
                                    width={100}
                                    height={40}
                                    className="block md:hidden"
                                />
                                {/* Medium screen logo */}
                                <Image
                                    src="/logo/logo-tablet.png"
                                    alt="Logo Medium"
                                    width={120}
                                    height={50}
                                    className="hidden md:block lg:hidden"
                                />
                                {/* Large screen logo */}
                                <Image
                                    src="/logo/logo-tablet.png"
                                    alt="Logo Large"
                                    width={140}
                                    height={60}
                                    className="hidden lg:block"
                                />
                            </div>

                            {/* title */}
                            <div className="text-center">
                                <h2 className="text-xl font-bold text-gray-800 md:text-2xl">OTP Verification</h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    Enter the verification code we sent to admin@1234.com
                                </p>
                            </div>

                            {/* code */}
                            <div>
                                <Controller
                                    name="code"
                                    control={control}
                                    rules={{
                                        required: "Please enter code",
                                        pattern: {
                                            value: /\d+/,
                                            message: "Only digits are allowed in this field"
                                        },
                                    }}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            id="outlined-basic"
                                            label="Code"
                                            variant="outlined"
                                            className="w-full"
                                            autoComplete="off"
                                            type="text"
                                            size='small'
                                            sx={{
                                                '& .MuiInputLabel-root.Mui-focused ': {
                                                    color: '#01589A',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor: '#01589A',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: '#01589A',
                                                    },
                                                },
                                            }}
                                        />
                                    }
                                />
                                {errors.code && (
                                    <p role="alert" className="text-red-500 text-sm">{errors.code.message}</p>
                                )}
                            </div>

                            {/* button */}
                            <div className="w-full flex justify-center">
                                <button
                                    type='submit'
                                    className="bg-[#01589A] text-white px-5 py-2 rounded hover:bg-[#014273] focus:bg-[#01589a] w-full"
                                >
                                    Verify
                                </button>
                            </div>

                            <p className='text-center'>Didn&apos;t receive an otp?
                                <Link href="/otp-verification" className='text-[#01589A]'>Resend OTP</Link>
                            </p>
                        </form>
                    </div>
                </div >
            </main >
        </>
    );
}

export default OTPVerification;
