import React from "react";
import { truncateString } from "@/app/(nonRoutes)/(utils)/Helpers";
import Currency from "react-currency-formatter";
const MyAdboardCard = ({data}) => {

  return (
    <div className="max-w-sm max-md:mb-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-110 transition-all duration-300 group-hover:bg-transparent">
      <div className=" relative">
        <button className="bg-yellow-400 text-xs font-medium shadow-lg absolute top-4 right-2 px-4 py-1 rounded-xl text-white">pending</button>
        <img className="rounded-t-lg h-40 w-full object-cover" src={`${process.env.NEXT_PUBLIC_FULL_URL}/${process.env.NEXT_PUBLIC_IMAGE_URL}/${data?.images[0]}`} alt />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
            {
              truncateString(data?.name, 40)
            }
          </h5>
        </a>
       <p className="text-sm text-primary font-semibold"><Currency quantity={data?.price} currency="NGN" /></p>
        
      </div>
    </div>
  );
};

export default MyAdboardCard;
