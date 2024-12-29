// app/page.tsx
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


        <div className="flex items-center gap-4">
          <p>Андрій Кравець</p>
          <img src="/cropped_image.png" alt="Profile" className="h-10 w-10 rounded-full border border-gray-600" />
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

            <div className="space-y-4 mt-6">
              <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                <span className="text-sm text-gray-400">Віддати</span>
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

              <div className="flex justify-between items-center bg-gray-700 rounded-lg p-3">
                <span className="text-sm text-gray-400">Отримати</span>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5h7.5m-7.5 15h7.5m4.5-12v9a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 16.5v-9A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75z"
                  />
                </svg>
                <p>вул. Івасюка, 84, Івано-Франківськ, Івано-Франківська область, 76000</p>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"
                  />
                </svg>
                <p>(480) 555-0103</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 6.75v10.5m15-10.5v10.5m-15 0h15M9 9h6M9 12h6M9 15h3"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.04c-5.51 0-9.96 4.45-9.96 9.96 0 5.27 4.06 9.63 9.24 9.96v-7.05H8.6v-2.91h2.64V9.81c0-2.61 1.57-4.04 3.95-4.04 1.14 0 2.33.21 2.33.21v2.55h-1.31c-1.29 0-1.7.8-1.7 1.62v1.95h2.88l-.46 2.91h-2.42v7.05c5.18-.33 9.24-4.69 9.24-9.96 0-5.51-4.45-9.96-9.96-9.96z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.013 4.849.07 1.366.062 2.633.336 3.608 1.31.975.975 1.249 2.243 1.31 3.608.057 1.265.07 1.645.07 4.849s-.013 3.584-.07 4.849c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.243 1.249-3.608 1.31-1.265.057-1.645.07-4.849.07s-3.584-.013-4.849-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.249-2.243-1.31-3.608-.057-1.265-.07-1.645-.07-4.849s.013-3.584.07-4.849c.062-1.366.336-2.633 1.31-3.608.975-.975 2.243-1.249 3.608-1.31C8.416 2.176 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.784.13 4.788.332 3.95 1.17c-.838.838-1.04 1.834-1.098 3.102C2.014 5.668 2 6.071 2 9.336c0 3.265.014 3.668.072 4.948.058 1.268.26 2.264 1.098 3.102.838.838 1.834 1.04 3.102 1.098 1.28.058 1.683.072 4.948.072s3.668-.014 4.948-.072c1.268-.058 2.264-.26 3.102-1.098.838-.838 1.04-1.834 1.098-3.102.058-1.28.072-1.683.072-4.948s-.014-3.668-.072-4.948c-.058-1.268-.26-2.264-1.098-3.102-.838-.838-1.834-1.04-3.102-1.098C15.668.014 15.265 0 12 0z" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 8a8.34 8.34 0 01-2.357.644 4.118 4.118 0 001.804-2.27 8.194 8.194 0 01-2.605.993A4.11 4.11 0 0015.05 6c-2.266 0-4.103 1.86-4.103 4.15 0 .326.035.644.105.95C7.728 10.906 5.149 9.182 3.527 6.63a4.214 4.214 0 00-.556 2.084c0 1.44.735 2.709 1.855 3.455a4.077 4.077 0 01-1.86-.526v.05c0 2.014 1.416 3.693 3.293 4.073a4.077 4.077 0 01-1.85.072 4.117 4.117 0 003.845 2.875A8.24 8.24 0 012 18.286a11.615 11.615 0 006.29 1.849c7.547 0 11.675-6.376 11.675-11.905 0-.18-.004-.357-.012-.532A8.324 8.324 0 0023 6.472a8.145 8.145 0 01-2.357.644A4.118 4.118 0 0021 8z" />
                </svg>
              </a>
              {/* Tailwind */}
              <a href="https://tailwindcss.com/" className="text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  className="w-6 h-6"
                >
                  <path
                    d="M20.353 5.038C16.487 5.04 14.12 7.157 13.25 10.38c1.348-1.393 2.644-2.073 3.888-2.05 1.308.024 2.05.802 3.165 1.88 1.132 1.098 2.465 2.396 5.08 2.394 3.867-.002 6.233-2.12 7.103-5.344-1.348 1.393-2.644 2.073-3.888 2.05-1.308-.024-2.05-.802-3.165-1.88-1.132-1.098-2.465-2.396-5.08-2.394zm-7.11 10.564c-3.867.002-6.233 2.12-7.103 5.344 1.348-1.393 2.644-2.073 3.888-2.05 1.308.024 2.05.802 3.165 1.88 1.132 1.098 2.465 2.396 5.08 2.394 3.867-.002 6.233-2.12 7.103-5.344-1.348 1.393-2.644 2.073-3.888 2.05-1.308-.024-2.05-.802-3.165-1.88-1.132-1.098-2.465-2.396-5.08-2.394z"
                    fill="#38BDF8"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>



    </div>
  );
}
