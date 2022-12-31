import React from "react";
import Image from "next/image";
import Link from "next/link";

import {MdExpandMore} from "react-icons/md";

import TicTacToe from "../public/assets/projects/tictactoe.png"
import Robdido from "../public/assets/projects/robdido.png"
import Kerosene from "../public/assets/projects/kerosene.png"
import Chatapp from "../public/assets/projects/chatapp.png"

const Projects = () => {

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

    return (
        <div id="projects" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold">
                    projects
                </h2>
                <p className="text-white py-4 my-8">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round.
                </p>

                {/* All the projects display */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    {projects.map(({id, title, imageSrc, url}) => (
                        <Link key={id} href={`/portfolio/${url}`} target="_blank    ">
                            <div className="cursor-pointer group shadow-lightRounded bg-fuchsia-100 overflow-hidden rounded-lg duration-200 hover:scale-110">
                                <Image 
                                    src={imageSrc} 
                                    alt={title} 
                                    className="rounded-lg" />
                            <h2 className="text-black text-center text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">{title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Button for all projects - not necessary */}
                <div className="flex items-center justify-center">
                    <Link href='/projects'>
                        <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold border rounded-md hover:border-themedPink hover:scale-110">
                            all projects
                            <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5"><MdExpandMore size={25} /></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects;