import React from 'react'
import Banner from './banner'
import Tabs from './Tabsection'

const Home = () => {

    const jsonData = {
        "instructor": {
            "name": "NITYANAND CHARAN DAS",
            "social_media": {
                "facebook": true,
                "twitter": true,
                "youtube": true,
                "instagram": true
            }
        },
        "course": {
            "title": "Learn key life lessons from the Gita: Mind control and conflict resolution",
            "fee": {
                "amount": 5000,
                "currency": "INR"
            },
            "inclusions": {
                "one": "5 on_demand_videos",
                "two": "2 livestream session",
                "three": "Live DSA session with Nityanand Charan Das",
                "four": "An active Whatsapp community"                
            },
            "about": {
                "html_content": "<p>Lorem ipsum text about managing relationships, communication, time management, and forgiveness.</p>"
            },
            "what_to_expect": {
                "html_content": "<ul><li>Learn to mange your relationships</li><li>Better communication</li><li>Time management</li><li>Forgiveness</li></ul>"
            },
            "key_topics": {
                "html_content": "<ol><li>10 written and audio sessions guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li><li>Intuitive exercises and homework walk you through the energies and values of numbers and number sequences so you can become your own authority.</li><li>Handy reference to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li><li>Expert techniques for manifestation offer simple ways to use numbers to co-create with the universe.</li></ol>"
            }
        },
        "about_instructor": {
            "content": "Lorem ipsum text about the instructor's background and philosophy.",
            "list1":"Learn to manage your relationship",
            "list2":"Better communication",
            "list3":"Time management",
            "list4":"Forgiveness"
        },
        "testimonial": {
            "text": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
            "reviewer_name": "Name of the reviewer",
            "reviewer_designation": "Designation of the reviewer"
        }

    };

    return (
        <div>
            <Banner data={jsonData} />
            <Tabs data={jsonData}/>
        </div>
    );

}

export default Home