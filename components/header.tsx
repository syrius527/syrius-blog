import Link from "next/link";
import AccountButton from "./buttons/account-button";
import DarkModeToggleButton from "./buttons/dark-mode-button";

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link
                        href="/"
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 subpixel-antialiased text-xl dark:text-gray-400">
                            Dev.Syrius Blog
                        </span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link
                            href="/blog"
                            className="mr-5 subpixel-antialiased font-semibold hover:underline decoration-sky-400 decoration-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/tags"
                            className="mr-5 subpixel-antialiased font-semibold hover:underline decoration-sky-400 decoration-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            Tags
                        </Link>
                        <Link
                            href="/projects"
                            className="mr-5 subpixel-antialiased font-semibold hover:underline decoration-sky-400 decoration-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/about"
                            className="mr-5 subpixel-antialiased font-semibold hover:underline decoration-sky-400 decoration-2 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            About
                        </Link>
                    </nav>
                    <DarkModeToggleButton />
                    <AccountButton />
                </div>
            </header>
        </>
    );
}
