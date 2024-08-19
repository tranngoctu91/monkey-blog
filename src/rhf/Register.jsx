
import React from 'react';
import { useForm } from 'react-hook-form';
import InputHook from './InputHook';
import RadioHook from './RadioHook';
import CheckboxHook from './CheckboxHook';
import DropdownHook from './DropdownHook';

const Register = () => {
    const {
        handleSubmit,
        formState: { errors },
        control,
        setValue,
        getValues
    } = useForm();


    const onSubmitHandle = (values) => {
        console.log(values)
    }


    return (
        <form onSubmit={handleSubmit(onSubmitHandle)} className='max-w-[300px] mx-auto my-10'>


            <div className='flex flex-col gap-3'>
                <label className='cursor-pointer' htmlFor='username'>Username</label>
                <InputHook
                    name="username"
                    placeholder="enter your username"
                    id="username"
                    control={control}
                    type="text"
                >
                </InputHook>
                <p className='text-red-500 text-sm'>Please enter your...</p>
            </div>


            <div className='flex flex-col gap-3'>
                <label className='cursor-pointer' htmlFor='email'>Email</label>
                <InputHook
                    name="email"
                    placeholder="enter your email"
                    id="email"
                    control={control}
                    type="email"
                >
                </InputHook>
                <p className='text-red-500 text-sm'>Please enter your...</p>
            </div>


            <div className='flex flex-col gap-3'>
                <label className='cursor-pointer' htmlFor='email'>Password</label>
                <InputHook
                    name="password"
                    placeholder="enter your password"
                    id="password"
                    control={control}
                    type="password"
                >
                </InputHook>
                <p className='text-red-500 text-sm'>Please enter your...</p>
            </div>


            <div className='flex flex-col gap-3'>
                <label className='cursor-pointer' htmlFor='email'>Gender</label>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-x-3'>
                        <RadioHook
                            value="male"
                            name="gender"
                            control={control}>
                        </RadioHook>
                        <span>Male</span>
                    </div>

                    <div className='flex items-center gap-x-3'>
                        <RadioHook
                            value="female"
                            name="gender"
                            control={control}
                        ></RadioHook>
                        <span>Female</span>
                    </div>

                </div>

            </div>

            <div className='flex flex-col gap-3'>
                <label className='cursor-pointer' htmlFor='email'></label>
                <DropdownHook control={control} setValue={setValue} name="job"></DropdownHook>
            </div>


            <div className='mt-5'>
                <CheckboxHook
                    text="I accept the term and condition"
                    name="accept" control={control}>

                </CheckboxHook>
            </div>




            <button className='w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold '>Submit</button>

        </form>
    );
};

export default Register;