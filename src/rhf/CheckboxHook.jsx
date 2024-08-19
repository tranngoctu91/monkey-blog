import React from 'react';
import { useController } from 'react-hook-form';


const CheckboxHook = ({ control, text, ...props }) => {
    const { field } = useController({
        control,
        name: props.name,
    })
    return (
        <label htmlFor= {props.name} className='custom-checkbox'>
            <input id= {props.name} className='hidden' type='checkbox' {...field} {...props} />
            <div className='flex items-center gap-x-3'>
                <div className='bg-white transition-all duration-500 w-full h-full rounded-md flex items-center justify-center custom-checkbox-square'></div>
                <label className='text-sm cursor-pointer' htmlFor=''>{text}</label>
            </div>
        </label>
    );
};

export default CheckboxHook;