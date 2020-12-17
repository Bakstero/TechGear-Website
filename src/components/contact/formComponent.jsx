import React from 'react';

const FormComponent = () => (
    <div className="mt-10 flex flex-col items-center justify-center w-full">
        <h3 className=" text-white text-xl font-bold my-4 ml-4 lg:ml-0 ">Feel free to send us your message</h3>
        <form className="flex flex-col items-center justify-start bg-background w-auto h-auto">
            <div  className="flex items-center justify-center w-full">
                <input 
                    className='bg-white bg-opacity-25 placeholder-white text-white w-5/12 lg:ml-0 lg:w-smInput lg:h-smInput p-2 opacity-50 rounded'
                    type='text' 
                    placeholder='Your name*'
                />
                <input 
                    className='bg-white bg-opacity-25 placeholder-white text-white w-5/12 lg:w-smInput lg:h-smInput p-2 opacity-50 rounded ml-4'
                    type='text'
                    placeholder='Your email*'
                />
            </div>
                <input 
                    className='bg-white bg-opacity-25 placeholder-white text-white w-10/12 lg:w-Input lg:h-smInput p-2 opacity-50 rounded mt-5'
                    type='text' 
                    placeholder='Subject'
                />
                <textarea  
                    className='bg-white bg-opacity-25 placeholder-white text-white w-10/12 lg:w-Input h-LgInput p-2 opacity-50 mt-5 rounded resize-none'
                    type='text' 
                    placeholder='Message*'
                />
                <input 
                    className=' w-full lg:w-submitInput h-12 rounded-sm text-mainText bg-primary mt-8'
                    type='submit'
                />
        </form>
    </div>
  );
export default FormComponent;
