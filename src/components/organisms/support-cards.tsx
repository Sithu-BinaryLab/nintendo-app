import React from "react";
import { Star, Receipt, Gift, HelpCircle } from "lucide-react";

const SupportCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-between gap-4  py-8 px-4 sm:px-6 lg:px-8 bg-white mb-12 cursor-pointer w-full">
      <div className="border border-zinc-300 rounded-xl p-5 py-10 flex items-center group">
        <Receipt className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600 flex-shrink-0" />
        <span className="text-gray-700 group-hover:text-primary text-base sm:text-lg lg:text-xl font-semibold pl-3">
          Order status
        </span>
      </div>
      <div className="border border-zinc-300 rounded-xl p-4 flex items-center group">
        <Gift className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600 flex-shrink-0" />
        <span className="text-gray-700 group-hover:text-primary text-base sm:text-lg lg:text-xl font-semibold pl-3">
          Redeem code
        </span>
      </div>
      <div className="border border-zinc-300 rounded-xl p-4 flex items-center group">
        <Star className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600 flex-shrink-0" />
        <span className="text-gray-700 group-hover:text-primary text-base sm:text-lg lg:text-xl font-semibold pl-3">
          Top picks for you
        </span>
      </div>
      <div className="border border-zinc-300 rounded-xl p-4 flex items-center group">
        <HelpCircle className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-red-600 flex-shrink-0" />
        <span className="text-gray-700 group-hover:text-primary text-base sm:text-lg lg:text-xl font-semibold pl-3">
          Store support
        </span>
      </div>
    </div>
  );
};

export default SupportCards;
