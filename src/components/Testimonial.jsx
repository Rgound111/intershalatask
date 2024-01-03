import React from 'react'
import './Testimonial.css'
import portfolio1 from '../assets/bg.jpg'
import portfolio2 from '../assets/monk.jpg'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: portfolio1,
        name: 'Manoj Patil',
        review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bor and i will give you complete account of the system '
    },
    {
        avatar: portfolio2,
        name: 'Aman Shukla',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio1,
        name: 'Sangam Chauhan',
        review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bor and i will give you complete account of the system '
    },
    {
        avatar: portfolio2,
        name: 'Kartik Das',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni id, eveniet aliquam dolores adipisci dolorem quo accusantium accusamus alias omnis inventore odio. Consequuntur?'
    },
    {
        avatar: portfolio1,
        name: 'Mohit Pandey',
        review: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was bor and i will give you complete account of the system '
    }
]


const Testimonial = () => {
    return (
        < section id='testimonial'>
            <Swiper className="  testimonial__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data?.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <span className="client_review text-xl font-bold">{review}</span>
                            <div className='flex items-start justify-center mt-2 gap-3'>
                                <div ><img className='client_avatar' src={avatar} /></div>
                                <h2 className="client_name pt-2 font-semibold">Name : {name}</h2>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </section>

    )
}

export default Testimonial