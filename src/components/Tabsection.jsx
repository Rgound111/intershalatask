import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import monk from '../assets/monk.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Testimonial from './Testimonial';

export default function LabTabs({ data }) {
    const {
        instructor,
        course,
        about_instructor,
        testimonial
    } = data;
    // console.log(course)
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="ml-10" sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="About" value="1" />
                        <Tab label="Instructor" value="2" />
                        <Tab label="Reviews" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <div className='w-[50vw]'>
                        <div className='flex flex-col gap-8 mb-4'>
                            <span className='text-2xl font-semibold'>About the course</span>
                            <span className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dicta dolore nesciunt quisquam pariatur dolorem quas asperiores reiciendis officiis voluptatem architecto fuga accusantium, necessitatibus dolores! Necessitatibus similique, laborum magni quibusdam sunt vel expedita? Aperiam?</span>
                            <span className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dicta dolore nesciunt quisquam pariatur dolorem quas asperiores reiciendis officiis voluptatem architecto fuga accusantium, necessitatibus dolores! Necessitatibus similique, laborum magni quibusdam sunt vel expedita? Aperiam?</span>
                            <span className='text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dicta dolore nesciunt quisquam pariatur dolorem quas asperiores reiciendis officiis voluptatem architecto fuga accusantium, necessitatibus dolores! Necessitatibus similique, laborum magni quibusdam sunt vel expedita? Aperiam?</span>
                        </div>
                        <div className='mb-4 flex flex-col gap-4'>
                            <span className='text-2xl font-semibold'>What to Expect from the course</span>
                            <ul className='list-disc pl-4'>
                                <li>{about_instructor.list1}</li>
                                <li>{about_instructor.list2}</li>
                                <li>{about_instructor.list3}</li>
                                <li>{about_instructor.list4}</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-5 mb-4'>
                            <span className='text-2xl font-semibold'>Key Topics Covered</span>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos minus labore maxime animi saepe rerum consequuntur, corrupti quasi cupiditate enim natus ad reiciendis ut voluptates?</span>
                            <ul className='list-disc pl-4'>
                                <li><b>10 written and audio session</b> guide you in decoding the language of numbers so that you can easily receive their signs and messages</li>
                                <li><b>Intuitive exercises and homework</b> walk you through the energies and values of numbers and number sequences so youcan become your own authority</li>
                                <li><b>A handy reference </b> to numerical meanings so you can uncover your soul's gifts, challenges, lessons, and purpose and receive spritual guidence along your path</li>
                                <li><b>Expert techniques </b>for manifestation offer simple ways to use numbers to co-create with the universe</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <span className='text-2xl font-semibold'>About the Instructor</span>
                        <div className='flex gap-4 '>
                            <img className='w-40 rounded-full border-2' src={monk} alt="MonkImg" />
                            <span className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo error consequuntur laborum modi nisi adipisci inventore, deleniti, sit corrupti nulla voluptatum. Inventore voluptates libero reiciendis vel deserunt nesciunt temporibus est iste accusantium, necessitatibus veritatis maiores. Mollitia vitae fuga alias!</span>
                            <span className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum deleniti, reiciendis porro aliquid a provident labore nemo rerum architecto aut esse sapiente non nesciunt fuga laboriosam sint exercitationem molestiae autem repellendus ipsam voluptas repudiandae in. Odio et fugit iusto iste animi magni facere sint, ab, officia placeat quos tenetur est eaque sunt eveniet dolores?</span>
                        </div>
                        <div className='flex gap-24 justify-center'>
                            <span className='text-blue-500 flex items-center gap-3'><FacebookIcon /><span className='text-black'>Facebook</span> </span>
                            <span className='text-blue-500 flex items-center gap-3'><TwitterIcon /><span className='text-black'>Twitter</span> </span>
                            <span className='text-red-500 flex items-center gap-3'><YouTubeIcon /><span className='text-black'>Youtube</span> </span>
                            <span className='text-[#405DE6] flex items-center gap-3'><InstagramIcon /><span className='text-black'>Instagram</span> </span>
                        </div>
                    </div>
                    <Testimonial/>
                </TabPanel>
                <TabPanel value="2">
                    <div className='w-[50vw]'>
                        <span className='text-base'>{about_instructor.content}</span>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div className=' w-[50vw]'>
                        <span className='text-base w-[50vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam, sed explicabo nostrum aperiam doloremque optio dicta ex exercitationem culpa illum nihil blanditiis rem quasi sunt molestias, ad amet sequi!</span>

                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );
}