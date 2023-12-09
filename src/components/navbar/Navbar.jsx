import {
  Bars3Icon,
  MagnifyingGlassIcon,
  WalletIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import SimfoniLogo from "../../assets/simfoni logo.png";
import Avatar from "../../assets/avatar.svg";

const Navbar = () => {
  return (
    <div className="bg-white ">
      <header className="relative bg-white ">
        <nav aria-label="Top" className="px-2 border-b border-gray-200">
          <div className="">
            <div className="flex h-16 items-center">
              <div className="relative rounded-md bg-white p-2 text-gray-400 ">
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <div className="ml-0 flex lg:ml-0">
                <a href="#">
                  <img className="h-8 w-auto" src={SimfoniLogo} alt="" />
                </a>
              </div>
              <div className="hidden sm:flex flex items-center text-gray-600 font-semibold gap-10 ml-20">
                <p className=" hover:text-teal-600 cursor-pointer">Catalog</p>
                <p className=" hover:text-teal-600 cursor-pointer">BuyDesk</p>
                <p className=" hover:text-teal-600 cursor-pointer">History</p>
                <p className=" hover:text-teal-600 cursor-pointer">Dashboard</p>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex  lg:items-center lg:justify-end lg:space-x-2">
                  <div className="border border-gray-300 rounded-lg ">
                    <div className="flex justify-between items-center">
                      <select className="border-r h-9 rounded-l-lg border-gray-300 ">
                        <option value="">PO</option>
                      </select>

                      <input
                        type="text"
                        className="pl-2"
                        placeholder="Search"
                      />
                      <div className="text-gray-400">
                        <MagnifyingGlassIcon className="w-7 h-7  px-1" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button className="  border-2 py-1 px-2 rounded-lg border-teal-600  font-bold text-teal-600">
                      Help
                    </button>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 lg:flex pl-10 text-gray-500 lg:items-center lg:justify-end lg:space-x-3">
                  <WalletIcon className="w-7" />
                  <HeartIcon className="w-7" />
                  <ShoppingCartIcon className="w-7" />
                  <BellIcon className="w-7" />
                </div>
                <div className="flex justify-end items-center space-x-1 lg:flex pl-10 pr-3  lg:items-center lg:justify-end lg:space-x-1">
                  <img className="w-7 rounded-2xl" src={Avatar} alt="" />
                  <p className="hidden lg:block text-gray-700 text-sm font-semibold">
                    Abhishek Kumar
                  </p>
                  <ChevronDownIcon className="h-4 font-bold" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
