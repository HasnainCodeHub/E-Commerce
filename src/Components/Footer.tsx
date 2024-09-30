import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export  default async function Footer() {
    return (
        <footer className="bg-cyan-800 text-white py-10">
            <div className="container mx-auto px-4 md:px-24 lg:px-36">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-300">
                            We are dedicated to providing high-quality tech products and accessories, catering to a wide range of customer needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-cyan-300">Home</Link></li>
                            <li><Link href="/About" className="hover:text-cyan-300">About Us</Link></li>
                            <li><Link href="/Contact" className="hover:text-cyan-300">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Who Code This ?</h3>
                        <p className="text-2xl font-serif mb-4">Hasnain Ali</p>
                        <div className="flex space-x-4">
                            <Link href="https://www.facebook.com/hasnainazeem.hasnainazeem.1" target="_blank" className="text-gray-300 hover:text-white">
                                <FaFacebookF size={24} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-white">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/has_nain_333/" target="_blank" className="text-gray-300 hover:text-white">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/hasnain-ali-developer/" target="_blank" className="text-gray-300 hover:text-white">
                                <FaLinkedinIn size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-600 mt-8 pt-6 text-center">
                    <p className="text-gray-400">
                        &copy; 2024 My E-Commerce Store. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
