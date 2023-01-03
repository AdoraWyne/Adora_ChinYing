import React from "react"
import {useRouter} from "next/router"
import Image from "next/image";
import Link from "next/link";

import TicTacToe from "../../public/assets/projects/tictactoe.png"
import Robdido from "../../public/assets/projects/robdido.png"
import Kerosene from "../../public/assets/projects/kerosene.png"
import Chatapp from "../../public/assets/projects/chatapp.png"

import {FaGithub} from "react-icons/fa"
import {AiOutlineCaretRight} from "react-icons/ai"
import {BiChevronLeft} from "react-icons/bi"

const projects = [
    {
        id: 1,
        title: 'Tic Tac Toe',
        imageSrc: TicTacToe,
        url: 'Tic-Tac-Toe',
        demo: 'https://adorawyne.github.io/Tic-Tac-Toe/',
        gitHub: 'https://github.com/AdoraWyne/Tic-Tac-Toe',
        description: 
        `This project was to recreate the classic Tic Tac Toe game. The project was completedly with vanilla HTML, CSS and Javascript. 
        This logical project was a great start and I focused on the frontend being attractive and user-friendly.`
    },
    {
        id: 2,
        title: 'Kerosene Dating App',
        imageSrc: Kerosene,
        url: 'Kerosene-Dating-App',
        demo: 'https://kerosene.onrender.com/',
        gitHub: 'https://github.com/AdoraWyne/Kerosene-Dating-App',
        login: {
            username: 'rubberdork',
            password: '123456'
        },
        description: 
        `This is a group project mimicking Tinder dating app with full-stack technologies that combines Firebase, React, Express and styled with React Bootstrap. 
        The app allows users to swipe profiles based on their preferences (gender and age). Once they are matched, both users are allowed to chat to each other.`
    },
    {
        id: 3,
        title: 'Robdido Music Festival Collection App',
        imageSrc: Robdido,
        url: 'Robdido-Music-Festival-Collection',
        demo: 'https://robdido.fly.dev/events/login',
        gitHub: 'https://github.com/AdoraWyne/Music-Festivals-Collection',
        login: {
            username: 'rubberdork',
            password: '123456'
        },
        description: `My first full-stack multiple-page application with Express. This app allows you to store all your favorite music festivals, also allows you to add your favorite music festival into a wishlist.`
    },
    {
        id: 4,
        title: 'ChatApp',
        imageSrc: Chatapp,
        url: 'ChatApp',
        demo: 'https://chat-up.netlify.app/',
        gitHub: 'https://github.com/AdoraWyne/ChatApp',
        login: {
            username: 'adora-testing1@gmail.com',
            password: '123456'
        },
        description: `A group project using React, Firebase and styled with Tailwind to build a chatting app allows users to send messages and images.`
    }
]

const getProjectFrom = (url) => projects.filter( (p) => p.url === url)[0]

export async function getStaticPaths() {
    const paths = projects.map((p) => ({
        params: {id: p.url},
    }))

    return {
        paths, 
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const project = getProjectFrom(params.id)

    return {
        props: {project},
    }
}

const OneProject = ( {project: {title, imageSrc, demo, gitHub, login, description}} ) => {

    const router = useRouter();
    // console.log(router.query.id);

    return (
        <div className="h-fit w-full text-center">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex-flex-col text-white text-center md:text-left ">
                <div className="flex">
                    <Link href="/projects">
                        <div className="flex items-center justify-center my-8 text-white font-bold font-logo tracking-wider hover:scale-110">
                            <BiChevronLeft size={25} /> back
                        </div>
                    </Link>
                </div>

                <h1 className="text-4xl mt-2 mb-8 text-center md:text-left font-bold tracking-wide">
                    {title}
                </h1>

                <div className="relative w-96 h-56 mx-auto overflow-hidden my-8 shadow-lightRounded">
                    <Image src={imageSrc} alt="testing" layout="fill" className="rounded-lg shadow-lightRounded" />
                </div>

                <h2 className="text-center md:text-left my-4 text-2xl font-bold">Description</h2>

                <p>{description}</p>
                {login && 
                <div>
                    <hr className="my-5" />
                    <h3 className="text-md font-bold">Login Credential:</h3>
                    <p>Username: {login.username}</p>
                    <p>Password: {login.password}</p>
                </div>
                }

                <div className="flex items-center justify-center gap-10">
                    <Link href={demo} target="_blank">
                        <div className="group flex items-center justify-center my-8 bg-fuchsia-100 text-themedPink px-6 py-3 font-bold rounded-md tracking-wider hover:scale-110 shadow-lightRounded">
                            demo
                            <span className="duration-200 ease-in"><AiOutlineCaretRight size={18} className="ml-2" /></span>    
                        </div>
                    </Link> 

                    <Link href={gitHub} target="_blank">
                        <div className="group flex items-center justify-center my-8 bg-fuchsia-100 text-themedPink px-6 py-3 font-bold rounded-md tracking-wider hover:scale-110 shadow-lightRounded">
                            code
                            <span className="duration-200 ease-in"><FaGithub size={18} className="ml-2" /></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OneProject