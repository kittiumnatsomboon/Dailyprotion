import { Link, Outlet } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import {  useState } from "react";
import { useAuth } from "../Authen/auth";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: 'หน้าแรก', href: '/' },
        { name: 'เกี่ยวกับเรา', href: '/about' },
        { name: 'ติดต่อเรา', href: '/contact' },
    ];

    const { user, logout } = useAuth();
    return (
        <>
            <nav className="bg-gradient-to-r from-violet-500 to-violet-900 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo/Brand */}
                    <a href="/" className="text-white text-lg font-semibold">
                        Daily-today
                    </a>

                    {/* Desktop Menu (hidden on mobile) */}
                    <div className="hidden md:flex space-x-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        {user ? (
                            <>
                                {/* Display the user's name */}
                                <Link to=""
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >{user.firstname}</Link>
                            </>
                        ) : (
                            <>
                                {/* Display login/signup links */}
                                <Link to="/register"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >สมัครสมาชิก</Link>
                                <Link to="/login"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >เข้าสู่ระบบ</Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button (hidden on desktop) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown (toggles visibility with state) */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        {user ? (
                            <>
                                {/* Display the user's name */}
                                <Link to=""
                                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                >{user.firstname}</Link>
                            </>
                        ) : (
                            <>
                                {/* Display login/signup links */}
                                <Link to="/register"
                                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                >สมัครสมาชิก</Link>
                                <Link to="/login"
                                    className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                >เข้าสู่ระบบ</Link>
                            </>
                        )}
                    </div>
                )}
            </nav>
            <Outlet />
        </>
    )
}