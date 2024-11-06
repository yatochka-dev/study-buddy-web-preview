"use client";
import { motion } from 'framer-motion';
import React from 'react';


const  UnderText = (
    {delay, text}: {
        delay: number,
         text: string,
    }
) => {

    return (
        <motion.span initial={{
            opacity: 0
        }} animate={{
            opacity: 100
        }} transition={{
            delay
        }} className={"text-foreground/50 text-xl md:text-3xl absolute -bottom-14 text-center w-full"}>
            {text}
        </motion.span>
    );
};

export default UnderText;