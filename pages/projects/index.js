import React from "react";
import Image from "next/image";
import Link from "next/link";

import {MdExpandMore} from "react-icons/md";

import TicTacToe from "../../public/assets/projects/tictactoe.png"
import Robdido from "../../public/assets/projects/robdido.png"
import Kerosene from "../../public/assets/projects/kerosene.png"
import Chatapp from "../../public/assets/projects/chatapp.png"

export const getStaticProps = async () => {
    const projects = [
        {
            id: 1,
            title: 'Tic Tac Toe',
            imageSrc: TicTacToe,
            url: 'Tic-Tac-Toe'
        },
        {
            id: 2,
            title: 'Kerosene Dating App',
            imageSrc: Kerosene,
            url: 'Kerosene-Dating-App'
        },
        {
            id: 3,
            title: 'Robdido Music Festival Collection App',
            imageSrc: Robdido,
            url: 'Robdido-Music-Festival-Collection'
        },
        {
            id: 4,
            title: 'ChatApp',
            imageSrc: Chatapp,
            url: 'ChatApp'
        }
    ]

    return {
        props: {projects},
    }
}

const projectsRoute = ({projects}) => {

    return (
        <div id="projects" className="w-full">
            <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold pb-16">
                    projects
                </h2>

                {/* All the projects display */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {projects.map(({id, title, imageSrc, url}) => (
                        <Link key={id} href={`/projects/${url}`} target="_blank">
                            <div className="cursor-pointer group shadow-lightRounded bg-fuchsia-100 overflow-hidden rounded-lg duration-200 hover:scale-110">
                                <Image 
                                    src={imageSrc} 
                                    alt={title} 
                                    className="rounded-lg" />
                            <h2 className="text-black text-center text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">{title}</h2>
                            </div>
                        </Link>
                    ))}
                    <p className="text-white text-sm py-4 my-8 italic">
                        More projects are coming soon...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default projectsRoute