import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Views } from "@/components/views";
import { TableDemo } from "@/components/TokenTable";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { BiTransfer } from "react-icons/bi"; // Import the exchange icon

import { FiBell, FiSettings } from 'react-icons/fi';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
export default function HomePage() {
  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      {/* Header */}
      <header className="bg-[#0F0F0F] px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">PORTFOLIO</h1>
        </div>

        <div className="w-40 relative flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 absolute left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-2l4 4"
            />
          </svg>
          <Input
            type="search"
            placeholder="Пошук"
            className="w-full pl-10 bg-[#0F0F0F] text-gray-300 placeholder-gray-500 border-0 border-b-2 border-gray-500 focus:outline-none focus:border-gray-300"
          />
        </div>

        <div className="flex items-center gap-3">
          <p className="text-white">Андрій Кравець</p>
          <img src="/cropped_image.png" alt="Profile" className="h-10 w-10 rounded-full border border-gray-600" />
          <FiBell className="text-white text-xl cursor-pointer" />
          <FiSettings className="text-white text-xl cursor-pointer" />
        </div>
      </header>



      {/* Main Content */}
      <main className="p-6 flex gap-6">


        {/* Left Panel */}
        <section className="flex-1">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">NCOIN/USD</h2>
            <p className="text-xl mt-2">
              $14,730.00 <span className="text-red-500">-1.02%</span>
            </p>
            <Views />
            <div className="bg-gray-800 mt-4 rounded-lg"></div>
          </div>

          <div className="flex justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Транзакції</h1>
            </div>
            <div>

              <Select>
                <SelectTrigger className="w-28 bg-transparent text-white border-none">
                  <SelectValue placeholder="Цього тижня" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ncoin">Цього тижня</SelectItem>
                  <SelectItem value="btc">Цього тижня</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>


          <TableDemo />
        </section>


        {/* Right Panel */}
        <aside className="w-96">


          <Card className="bg-gray-800 border-none text-gray-300 p-6 mb-6">
            <h3 className="text-lg font-bold">Кошти на рахунку</h3>
            <p className="text-3xl font-bold mt-2">$3,753.15</p>
            <p className="text-sm text-green-500 mt-1">▲ $173.85</p>
            <p className="text-sm text-gray-400 mt-4">1 NCOIN = $0.5112</p>

            <div className="space-y-6 mt-6 relative">
              {/* Віддати Section */}
              <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                <span className="text-sm text-gray-400">Віддати</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
                  />
                  <Select>
                    <SelectTrigger className="w-28 bg-transparent text-white border-none">
                      <SelectValue placeholder="NCOIN" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ncoin">NCOIN</SelectItem>
                      <SelectItem value="btc">BTC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Exchange Button */}
              <button
                className="absolute bg-white left-1/2 -translate-x-1/2 top-[50%] -translate-y-1/2 bg-gray-800 p-3 rounded-full border border-gray-600 shadow-md z-10 hover:bg-gray-700 focus:outline-none mb-15 focus:ring focus:ring-gray-500"
              >
                <BiTransfer className="h-6 w-6 text-gray-800 rotate-90" /> {/* Rotated for top-to-bottom direction */}
              </button>

              {/* Отримати Section */}
              <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                <span className="text-sm text-gray-400">Отримати</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="w-24 bg-transparent text-white border-none focus:ring-0 focus:outline-none"
                  />
                  <Select>
                    <SelectTrigger className="w-28 bg-transparent text-white border-none">
                      <SelectValue placeholder="USDT" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usdt">USDT</SelectItem>
                      <SelectItem value="eth">ETH</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-6">
              Придбати Tether US
            </Button>
          </Card>




          <Card className="bg-gray-800 border-none text-gray-300 p-6">
            <h3 className="text-lg font-bold">Завдання</h3>
            <div className="mt-4 text-gray-400">Немає завдань.</div>
          </Card>
        </aside>
      </main>


      <footer className="bg-[#0F0F0F] text-gray-400 px-20 py-20 border-t border-gray-700">
        <div className="flex justify-between items-center">
          {/* Left Section */}
          <div className="max-w-md">
            <p className="font-semibold text-white mb-2">Зв'язок з нами:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-5">
                <FaMapMarkerAlt className="w-5 h-5 text-white" />
                <p>вул. Івасюка, 84, Івано-Франківськ, Івано-Франківська область, 76000</p>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <FaPhoneAlt className="w-5 h-5 text-white" />
                <p>(480) 555-0103</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5 text-white" />
                <p>curtis.weaver@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="max-w-md">
            <p className="font-semibold text-white mb-10 text-right">Слідкуй за нами у соцмережах!</p>
            <div className="flex gap-4 justify-center">
              {/* Facebook */}
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF className="w-6 h-6" />
              </a>
              {/* Instagram */}
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              {/* Twitter */}
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter className="w-6 h-6" />
              </a>

              <a href="" className="text-white hover:text-gray-300">
                <SiTailwindcss className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>




    </div>
  );
}
