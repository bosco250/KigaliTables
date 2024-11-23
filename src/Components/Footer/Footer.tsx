import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-gray-300 py-12 px-14">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className='text-sm'>
            <h2 className="text-sm font-semibold mb-4 text-white">KigaliTable</h2>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          <div className='text-sm'>
            <h2 className="text-sm font-semibold mb-4 text-white">Business</h2>
            <ul className="space-y-3">
              <li><a href="/reservation" className="hover:text-white transition-colors">Restaurant reservation</a></li>
              <li><a href="/software" className="hover:text-white transition-colors">Software</a></li>
              <li><a href="/hospitality" className="hover:text-white transition-colors">Hospitality</a></li>
              <li><a href="/marketing" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="/for-restaurant" className="hover:text-white transition-colors">For Restaurant</a></li>
            </ul>
          </div>
          <div className='text-sm'>
            <h2 className="text-sm font-semibold mb-4 text-white">Contact us</h2>
            <ul className="space-y-3">
              <li>Email:kigalitable@gmail.com</li>
              <li>Whatsapp:+250788888888</li>
            </ul>
            <div className="mt-6">
              <h2 className="text-sm font-semibold mb-4 text-white">JOIN US</h2>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/privacy" className="hover:text-white transition-colors">Do Not Sell or Share My Personal Information</a>
              <button className="hover:text-white transition-colors">Cookie Preferences</button>
            </div>
            <div className="text-sm text-gray-400">
              Copyright © {currentYear} KigaliTable, All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;