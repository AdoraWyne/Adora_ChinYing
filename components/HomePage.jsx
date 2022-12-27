import React from "react";
import Link from "next/link"
import Image from "next/image";
import {MdExpandMore} from "react-icons/md"

const HomePage = () => {
    return (
        <div id="home" className="h-screen w-full text-center">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
                <h1 className="font-bold text-white text-7xl">Full Stack Developer</h1>
                <p className="text-white text-md max-w-sm mx-auto">
                    Spicy jalapeno bacon ipsum dolor amet biltong capicola pastrami tenderloin, beef ribs spare ribs kielbasa pork bacon ribeye pork belly. Porchetta drumstick kielbasa alcatra. Meatloaf kielbasa biltong pancetta meatball ground round. 
                </p>
                <Link href='/#aboutme'>
                    <div className="group flex items-center justify-center my-8 text-white px-6 py-3 font-bold border rounded-md">
                        about me
                        <span><MdExpandMore size={25} /></span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;