import React from 'react';
import Navbar from '../Navbar/Navbar';
import ShortStoryP1 from '../Part1/ShortStoryP1';
import girl from '../assets/images/girl.jpg';
import formalMan from '../assets/images/formal-man.jpg';
import author from '../assets/images/author.jpg'
import traveller from '../assets/images/traveller.jpg';
import icon from '../assets/logo/icon.png';
import GirlStory from '../Part1/GirlStory';
import Story from '../Part1/Story';
import Author from '../Part1/Author';
import ShortStoryp2 from '../part2/ShortStoryp2';
import Community from '../part2/Community';

const data = [
    {
        id:1,
        stories: {
            title: 'This text is for our article title, sometime it should be long as like this',
            content:
                'Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.',
            coverImage: girl,
            author: { name: 'Michael Scott', profileImage: formalMan },
            icon : icon,
            community: { name: 'Travel for explore' },
            hashtags: ['#Website', '#Design', '#Dev_Web', '#Adobe_Photoshop'],
            type: 'long',
            created: 'Aug 10, 2022 | ',
            readTime: '2 min read ',
            time: '11.20 AM '
        }
    },
    {
        id:2,
        users:
        {
            name: 'Michael Scott',
            profileImage: author,
            bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
            summary: {
            stories: 39,
            followers: 1100,
            }
        }
    },

    {
        id:3,
        communities:
        {
            name: 'Travel For Explore',
            profileImage: traveller,
            bio: "Don't ever, for any reason, do anything to anyone for any reason ever, no matter what",
            summary: {
            stories: 390,
            followers: 2100,
            }
        }
    }
]

const Home = () => {
    //console.log(data.id);
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <ShortStoryP1
                key={data[0].id}
                data={data}
            ></ShortStoryP1>

            <GirlStory
                key={data[0].id}
                data={data}
            ></GirlStory>

            <Story
            key={data[0].id}
            data={data}
            ></Story>

            <Author
            key={data[0].id}
            data={data}
            ></Author>

            <ShortStoryp2
            key={data[0].id}
            data={data}
            ></ShortStoryp2>

            <Story
            key={data[0].id}
            data={data}
            ></Story>

            <GirlStory
                key={data[0].id}
                data={data}
            ></GirlStory>

            <Community
            key={data[0].id}
            data={data}
            ></Community>
        </div>
    );
};

export default Home;