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
                            My past experience in insurance broking and customer service taught me to be an empathetic yet professional person and consider people’s needs from different angles. My move into Tech was driven by the desire to gain powerful and versatile skills to build anything in the virtual world that can impact people in real life, to make people’s lives easier and more convenient.
                        </p>
                        <p className=" py-4 max-w-2xl mx-auto">
                            My experience at General Assembly has given me a taste of the world of Software Engineering. I fell in love with breaking down the problems and solving them piece by piece.
                        </p>
                        <p className=" py-4 max-w-2xl mx-auto">
                            I&apos;m looking for an opportunity to be part of a like-minded organisation, with a great team culture, where I can constantly learn and grow. I always love to learn about other people&apos;s journeys. Please send me a message if you are up for a coffee chat!
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