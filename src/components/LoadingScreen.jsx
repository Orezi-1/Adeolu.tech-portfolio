import React from 'react';
import { useState, useEffect } from 'react';

const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "<>Adeolu Oreoluwa</>";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index ++;
            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1150);
            };
        }, 120);
    
        return () => clearInterval(interval);
    }, [onComplete]);


  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-800 text-white">
        <div className="mb-4 sm:text-4xl text-3xl font-bold font-mono">
            {text}
            <span className="animate-blink ml-1">|</span>

        </div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                
            </div>
        </div>

    </div>
  )
}
export default LoadingScreen