import { MessagesSquare } from 'lucide-react';
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
    return (
        <div className='w-3/4 bg-violet-200 flex flex-col items-center justify-center py-10 text-black'>
            <div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
                <Image src={"/desktop-hero.png"} alt='Hero' width={200} height={50} />
                <p className='text-3xl font-extralight mt-5 mb-2'>EXPERIENCE SEAMLESS COMMUNICATION WITH BUZZCHAT</p>
                <p className='w-1/2 font-bold text-center text-sm'>
                    Get the best experience while using the video call feature of BuzzChat. Happy exploring!
                </p>

                <Button className='rounded-full my-5 bg-white hover:bg-gray-500 text-black hover:text-white'>
                  Enjoy your time on the app! 
                </Button>

            </div>
            <p className='w-1/2 mt-auto text-center text-xs flex items-center justify-center gap-1'>
                <MessagesSquare size={10} /> BuzzChat by Rabiya Khan
            </p>
        </div>
    );
};
export default ChatPlaceHolder;
