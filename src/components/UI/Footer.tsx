import { IoLogoGithub, IoLogoSkype,IoLogoDiscord } from "react-icons/io5";
import { BsSendCheckFill } from "react-icons/bs";
export default function Footer() {
    return (
        <div className='space-y-4 bg-black/50 p-4 py-8 lg:p-8'>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-2 text-center'>
                <div className='shrink-0'>&copy; Crafted with love by</div>
                <div className='shrink-0 break-keep font-bold tracking-wide'>
                  Justin Elsen
                </div>
            </div>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-4 text-center'>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://github.com/FG-HJ'
                    target='_blank'>
                    <IoLogoGithub />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    // href='https://www.linkedin.com/in/disteroby1999'
                    target='_blank'>
                    <IoLogoSkype />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    // href='https://discordapp.com/users/1234903078961156208'
                    target='_blank'>
                    <IoLogoDiscord />
                </a>
                <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://t.me/GO19952121'
                    target='_blank'>
                    <BsSendCheckFill />
                </a>
                {/* <a
                    className='text-3xl transition duration-500 hover:scale-110'
                    href='https://www.linkedin.com/in/disteroby1999'
                    target='_blank'>
                    <IoLogoSkype />
                </a> */}
            </div>
            <div className='mx-auto pt-4 text-center text-sm lg:pt-8'>
                <span className='opacity-60'>
                    Curious about how I designed this portfolio?
                    <br />
                    Feel free to explore the magic behind it by visiting my
                </span>{" "}
                <a
                    className='underline opacity-70 transition duration-200 hover:opacity-100'
                    href='https://github.com/FG-HJ/my-portfolio'
                    target='_blank'>
                    GitHub Repository
                </a>
            </div>
        </div>
    );
}
