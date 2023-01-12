import React from "react";
import Link from "next/link"
import Image from "next/image"

import contact from "../public/assets/contact.jpg"

import {MdExpandMore} from "react-icons/md"

const AboutMe = () => {
    return (
        <div id="aboutme" className="w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
                <h2 className="text-white font-logo text-3xl md:text-5xl tracking-wide font-bold my-8">
                    about me
                </h2>

                <div className="flex flex-col md:flex-row gap-2 shadow-lightRounded bg-fuchsia-100 rounded-lg">
                    <div className="w-full md:w-1/2 h-full rounded-xl p-4">
                        <Image 
                            src={contact}
                            alt="girl with laptop" 
                            className="rounded-xl" />
                    </div>

                    <div className="shadow-lightRounded my-8 px-8 rounded-lg bg-fuchsia-100">
                        <p className=" py-4 max-w-2xl mx-auto">
                        Hi there! This is Adora (or Chin Ying). I’m a software engineer based in Melbourne and recently completed Immersive Software Engineering course from GA. 
                        <br />
                        Before started my coding journey, I worked as an insurance broker which essentially provides professional service to clients to solve their insurance needs. However, I always feel like I could do more and help more people rather than businesses. My past experience in customer service also taught me to be an empathetic person and consider people’s needs from different angles.
                        <br />
                        My experience at General Assembly has given me a taste of the world of Software Engineering. I discovered a new side of me who fall in love in problem solving and crunching codes at nights. 
                        <br />    
                        It also helps me to gain this powerful & versatile skills to build anything in the virtual world that can impact people in real life, to make people’s lives easier and more convenient. And that makes me happy!
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center justify-center gap-10">
                    <Link href='/resume.pdf' download={true}>
                    <div className="group flex items-center justify-center my-8 bg-fuchsia-100 text-themedPink px-6 py-3 font-bold border rounded-md hover:border-themedPink hover:scale-110 shadow-lightRounded">
                        resume
                        <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5"><MdExpandMore size={25} /></span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe