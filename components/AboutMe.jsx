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
                        Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                        </p>
                        <p className=" py-4 max-w-2xl mx-auto">
                        Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                        </p>
                        <p className=" py-4 max-w-2xl mx-auto">
                        Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. Venison meatloaf meatball, tail flank frankfurter tenderloin kevin corned beef strip steak bacon drumstick.
                        </p>
                    </div>
                </div>
                
                <div className="flex items-center justify-center gap-10">
                    <Link href='/resume.pdf' download={true}>
                    <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold border rounded-md hover:border-themedPurple hover:scale-110">
                        resume
                        <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0"><MdExpandMore size={25} /></span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutMe