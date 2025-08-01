import React from 'react';

const Footer = () => {
    return (

        <div className='text-center  p-4  bg-gray-50'>
            <p className=" font-semibold sm:text-sm text-gray-700">
                Copyright {new Date().getFullYear()} ©All Right Reserved - <a href="" className='text-blue-500 '>zayed khan</a>
            </p>
        </div>



    );
};

export default Footer;