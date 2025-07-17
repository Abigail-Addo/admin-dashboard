"use client"

import * as React from 'react';
import Image from 'next/image';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

interface IFormInput {
    id: string | number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    contact: string;
}
const Signup = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            contact: '',
        }
    })

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    // function to sign up an admin
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
                                <h2 className="text-xl font-bold text-gray-800 md:text-2xl">Admin Sign up</h2>
                                <p className="text-sm text-gray-600 mt-1">
                                    Create Your Account to Manage and Access the Dashboard Effortlessly.
                                </p>
                            </div>

                            {/* first Name */}
                            <div>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={{
                                        required: "First name cannot be empty"
                                    }}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            id="outlined-basic"
                                            label="First Name"
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
                                {errors.firstName && (
                                    <p role="alert" className="text-red-500 text-sm">{errors.firstName.message}</p>
                                )}
                            </div>

                            {/* last name */}
                            <div>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    rules={{
                                        required: "Last name cannot be empty"
                                    }}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            id="outlined-basic"
                                            label="Last Name"
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
                                {errors.lastName && (
                                    <p role="alert" className="text-red-500 text-sm">{errors.lastName.message}</p>
                                )}
                            </div>

                            {/* email */}
                            <div>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{
                                        required: "Please enter a valid email",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address",
                                        }
                                    }}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            id="outlined-basic"
                                            label="Email"
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
                                {errors.email && (
                                    <p role="alert" className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: "Password is required" }}
                                    render={({ field }) => (
                                        <FormControl fullWidth variant="outlined" size='small'
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
                                        >
                                            <InputLabel>Password</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                type={showPassword ? "text" : "password"}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    )}
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    rules={{
                                        required: "Confirm your password",
                                        // validate: value => value === password || "Passwords do not match"
                                    }}
                                    render={({ field }) => (
                                        <FormControl fullWidth variant="outlined" size='small'
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
                                        >
                                            <InputLabel>Confirm Password</InputLabel>
                                            <OutlinedInput
                                                {...field}
                                                type={showConfirmPassword ? "text" : "password"}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password"
                                            />
                                        </FormControl>
                                    )}
                                />
                            </div>

                            {/* contact */}
                            <div>
                                <Controller
                                    name="contact"
                                    control={control}
                                    rules={{
                                        required: "Please enter a valid number",
                                        pattern: {
                                            value: /\d+/,
                                            message: "Only digits are allowed in this field"
                                        },
                                    }}
                                    render={({ field }) =>
                                        <TextField
                                            {...field}
                                            id="outlined-basic"
                                            label="Contact"
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
                                {errors.contact && (
                                    <p role="alert" className="text-red-500 text-sm">{errors.contact.message}</p>
                                )}
                            </div>

                            {/* button */}
                            <div className="w-full flex justify-center">
                                <button
                                    type='submit'
                                    className="bg-[#01589A] text-white px-5 py-2 rounded hover:bg-[#014273] focus:bg-[#01589a] w-full"
                                >
                                    Sign up
                                </button>
                            </div>

                            <p className='text-center'>Already have an account?
                                <Link href="/login" className='text-[#01589A]'>Login</Link>
                            </p>
                        </form>
                    </div>
                </div >
            </main >
        </>
    );
}

export default Signup;
