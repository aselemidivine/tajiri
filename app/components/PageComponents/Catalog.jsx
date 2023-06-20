"use client"
import { useState, useEffect } from "react";

import MyAdboardCard from "../cards/MyAdboardCard";
import { Input } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import { Checkbox, CheckboxGroup, Stack, Select } from "@chakra-ui/react";

import { toast } from "react-toastify";
import { convertStringsToNumbers } from "@/app/(nonRoutes)/(utils)/Helpers";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Pagination from "../General/Pagination";
import Banner from "../../assets/advertise.webp";
//import { useDataContext } from "@/app/(nonRoutes)/(context)/DataContext";
import Image from "next/image";



const Catalog = () => {
  
  const [loading, setLoading] = useState(false);
  //mobile filter toggle
  const [mobileFilter, setMobileFilter] = useState(false);

  const [data, setData] = useState(null);
  const [allBrands, setAllBrands] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [q, setQ] = useState("");
  //add the max price of the search and the categories of the search
  
  const getData = () => {
    setLoading(true);
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/client/all-adboards`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.products.data)
           //setting the pagination values
      setFrom(data.products.from);
      setTo(data.products.to);
      setTotal(data.products.total);
      setLastPage(data.products.last_page);
        })
        .catch((e) => console.log(e))
     // setAllBrands(result.all_brands);
      //setAllCategories(result.all_categories);
      // if (result.max_price && result.max_price > 0) {
      //   setMaxPrice(result.max_price);
      //   setpriceRange([0, result.max_price]);
      // }
     
     
      setLoading(false);
  };
  //fetching the data and paginating it

  //pagination functionality
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  const handleNextPage = () => {
    if (page < lastPage) {
      handleFilters(page + 1)
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handleFilters(page - 1)
      setPage(page - 1);
    }
  };

  //fetching initially

  useEffect(() => {
    getData();
  }, []);

  // const isInitialMount = useRef(true);
  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     // Run the function when `myState` changes
  //     handleFilters();
  //   }
  // }, [q, page]);

  //filtering and categorising
  const [priceRange, setpriceRange] = useState([0, 1000000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [category, setCategory] = useState("");

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFilters = async (page) => {
    setLoading(true);
    const result = await postRequest(`client/filter?page=${page}`, {
      brand: convertStringsToNumbers(selectedBrands),
      category: parseInt(category),
      min_price: priceRange[0],
      max_price: priceRange[1],
      name: q,
    });

    if (result) {
      setData(result.products.data);
      //setting the pagination values
      setFrom(result.products.from);
      setTo(result.products.to);
      setTotal(result.products.total);
      setLastPage(result.products.last_page);

      setLoading(false);
    } else {
      toast.error("Oops, Something Happened");
      setLoading(false);
    }
  };

  //anytime we apply any filters, set the page back to one if it isnt one
  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [selectedBrands, category, priceRange]);

  const handleCheckboxChange = (selectedValues) => {
    setSelectedBrands(selectedValues);
  };
  return (
    <>
 
 <div className="banner relative h-[300px] flex justify-center items-center">
        <div className="overlay absolute bg-black opacity-80 top-0 left-0 right-0 bottom-0"></div>

        <div className="text-and-search absolute">
          <h1 className=" z-20 text-white font-bold text-3xl mb-6">
            Explore various advertising channels
          </h1>

            <div className="flex gap-3">
                <input type="text" className="p-4 w-full rounded-lg" placeholder="Search for AD Channels" value={q} onChange={(e) => setQ(e.target.value)}/>

                <button className="hero-bg py-2 px-5 rounded-lg text-white font-semibold  transition-all duration-300 hover:px-10 hover:scale-105 hover:opacity-80">
                    Search
                </button>
            </div>
        </div>

        <Image src={Banner} className="w-full h-full object-cover" />
      </div>

          <div className="cat-page-section-container px-[50px] max-md:px-2 mt-[50px]">
            <div className="cat-page-card-box max-w-[1440px] mx-auto">
              <div className="main-stuff mt-[21px] mb-[50px]">
                <div className="hidden max-md:flex justify-end my-2">
                  <button
                    className="mobile-filter py-2 px-4 border-[1px] flex gap-2 rounded-md"
                    onClick={() => setMobileFilter(!mobileFilter)}
                  >
                    <p> Filters</p>{" "}
                    <span className="pt-1">
                      <HiOutlineAdjustmentsHorizontal />
                    </span>
                  </button>
                </div>

                <div className="lg:grid lg:grid-cols-4 gap-8">
                  <div
                    className={
                      mobileFilter
                        ? "filter-div lg:shadow-xl rounded-md p-4 lg:border-t-2 transition-all duration-300"
                        : "filter-div lg:shadow-xl rounded-md p-4 lg:border-t-2 max-[1000px]:h-0 transition-all duration-300"
                    }
                  >
                    <div className={mobileFilter ? "" : "max-[1000px]:hidden"}>
                      <h3>Filters</h3>

                      <h3 className="mt-10 uppercase mb-2 ml-2 text-sm font-semibold">
                        Category
                      </h3>
                      <Select
                        placeholder="All"
                        value={category}
                        onChange={handleOptionChange}
                      >
                        {allCategories &&
                          allCategories.map((i) => (
                            <option value={i.category_id}>
                              {i.category_name}
                            </option>
                          ))}
                      </Select>

                      <div className="price-div py-8">
                        <h3 className=" uppercase mb-2 ml-2 text-sm font-semibold">
                          Price (N)
                        </h3>
                        <RangeSlider
                          aria-label={["min", "max"]}
                          colorScheme="pink"
                          min={0}
                          max={maxPrice ? maxPrice : 1000000}
                          step={1000}
                          defaultValue={priceRange}
                          onChangeEnd={(val) => setpriceRange(val)}
                        >
                          <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                          </RangeSliderTrack>
                          <RangeSliderThumb index={0} />
                          <RangeSliderThumb index={1} />
                        </RangeSlider>

                        <div className="flex gap-3">
                          <div>
                            <p className="mb-2">Min.</p>
                            <Input
                              placeholder="from"
                              value={priceRange[0]}
                              onChange={(e) =>
                                setpriceRange([e.target.value, priceRange[1]])
                              }
                            />
                          </div>
                          <div>
                            <p className="mb-2">Max.</p>
                            <Input
                              placeholder="from"
                              value={priceRange[1]}
                              onChange={(e) =>
                                setpriceRange([priceRange[0], e.target.value])
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* <h3 className="mt-4 uppercase mb-2 ml-2 text-sm font-semibold">
                        brands
                      </h3>
                      <CheckboxGroup
                        colorScheme="red"
                        value={selectedBrands}
                        onChange={handleCheckboxChange}
                      >
                        <Stack>
                          {allBrands &&
                            allBrands.map((i) => (
                              <Checkbox value={i.brand_id.toString()}>
                                {i.brand_name}
                              </Checkbox>
                            ))}
                        </Stack>
                      </CheckboxGroup> */}

                      <div className="filter-btn-div flex justify-center my-4">
                        <button
                          className="apply-filter py-2 px-4 bg-primary text-white rounded-md hover:scale-110 transition-all"
                          onClick={handleFilters}
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="products col-span-3 shadow-xl rounded-md px-4 lg:px-[46px] py-[24px] border-t-2">
                    <div className="toprow py-4"></div>
                    <h3 className="text-lg font-semibold mb-5">Showing ({total}) results </h3>
                    <div className="grid grid-cols-4 gap-y-4 gap-x-4 max-md:grid-cols-3 max-sm:grid-cols-1">
                      {data ? (
                        data.map((i) => <MyAdboardCard key={i.id} data={i} />)
                      ) : (
                        <>
                          <div className="flex justify-center py-10">
                            <h1>Nothing Here...</h1>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="pt-20">
                      <Pagination
                        from={from}
                        to={to}
                        total={total}
                        handlePrevPage={handlePrevPage}
                        handleNextPage={handleNextPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};

export default Catalog;
