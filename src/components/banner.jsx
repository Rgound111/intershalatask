import React from 'react'
import Image from '../assets/bg.jpg'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const banner = ({ data }) => {
    const {
        instructor,
        course,
        about_instructor,
        testimonial
    } = data;
// console.log(course.fee.amount)

    return (
        <>
            <div className='relative'>
                <div className=' w-full h-80'>
                    <img className=' w-full h-full object-cover' src={Image} alt="BackgroundImage" />
                    <div className='absolute text-white  top-36 left-10 font-semibold'>
                        <span className='text-base'>{instructor.name}</span> <br />
                        <span className='text-4xl'>{instructor.name}</span>
                    </div>
                </div>
                <div className='absolute bg-purple-200 h-fit w-72 right-36 -bottom-48'>
                    <div className='flex flex-col p-5 gap-1'>
                        <span className='font-semibold'>Course fees</span>
                        <span className='font-bold pb-3'><CurrencyRupeeIcon/><span className='text-2xl'>{course.fee.amount}</span></span>
                        <span className='font-semibold pb-1'>What's Included :</span>
                        <div className='flex font-medium gap-2 '>
                            <span><LiveTvIcon/></span>
                            <span>{course.inclusions.one}</span>
                        </div>
                        <div className='flex font-medium gap-2 '>
                            <span><LiveTvIcon/></span>
                            <span>{course.inclusions.two}</span>
                        </div>
                        <div className='flex font-medium gap-2 '>
                            <span><FileCopyIcon/></span>
                            <span>{course.inclusions.three}</span>
                        </div>
                        <div className='flex font-medium gap-2 '>
                            <span><WhatsAppIcon/></span>
                            <span>{course.inclusions.four}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default banner