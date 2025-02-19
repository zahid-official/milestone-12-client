import { useEffect, useState } from "react";
import Navbar from "../../Shared/Navbar";
import PageTitle from "../../Shared/PageTitle";
import Card from "../Home/Card";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";

const TotalScholarships = () => {
  // useHooks
  const axiosSecure = useAxiosSecure();

  // state for allScholarships
  const [allScholarships, setAllScholarships] = useState([]);

  // state for search
  const [searchData, setSearchData] = useState([]);

  // state for pagination
  const [count, setCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [pageItems, setPageItems] = useState(6);
  // get pages
  const totalPages = Math.ceil(count / pageItems);
  const pages = [...Array(totalPages).keys()];

  // handlePageItems
  const handlePageItems = (e) => {
    const value = Number(e.target.value);
    setPageItems(value);
    setPageNo(1);
  };

  // handlePrev
  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  // handleNext
  const handleNext = () => {
    if (pageNo < pages.length) {
      setPageNo(pageNo + 1);
    }
  };

  // handleSearch
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    axiosSecure
      .get(`/search?searchQuery=${search}`)
      .then((res) => setSearchData(res.data));
  };

  // handleSorting
  const handleSorting = (value) => {
    axiosSecure.get(`/sorting/${value}`)
    .then(res => setAllScholarships(res.data));
  };

  // useEffect for allScholarships
  useEffect(() => {
    axiosSecure
      .get(`/allScholarshipPagination?pageNo=${pageNo}&pageItems=${pageItems}`)
      .then((res) => setAllScholarships(res.data));
  }, [axiosSecure, pageItems, pageNo]);

  useEffect(() => {
    setSearchData(allScholarships);
  }, [allScholarships]);

  useEffect(() => {
    searchData;
  }, [searchData]);

  // useEffect for count
  useEffect(() => {
    axiosSecure.get("/total").then((res) => setCount(res.data.count));
  }, [axiosSecure]);

  return (
    <>
      {/* pageTitle */}
      <div className="bg-[#0f252a] text-white bg-[url(/assets/bg.webp)] bg-cover bg-center bg-no-repeat">
        <div>
          <Navbar></Navbar>
        </div>
        <div className="pt-8 pb-20">
          <PageTitle
            heading1={"All"}
            heading2={"Scholarships"}
            subHeading={"All Scholarships"}
          ></PageTitle>
        </div>
      </div>

      <div className="pt-28 pb-12 flex justify-between max-w-screen-xl mx-auto ">
        {/* sort */}
        <div>
          <details className="dropdown">
            <summary className="btn m-1">Sort by Fees</summary>
            <ul className="menu space-y-3 dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button
                  onClick={() => handleSorting("Ascending")}
                  className="btn"
                >
                  Ascending
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSorting("Descending")}
                  className="btn"
                >
                  Descending
                </button>
              </li>
            </ul>
          </details>
        </div>

        {/* search */}
        <form
          onSubmit={handleSearch}
          className="flex xl:justify-end justify-center xl:px-0 px-6  gap-4"
        >
          <label className="input input-bordered max-w-sm w-full flex items-center gap-2">
            <input
              type="text"
              name="search"
              className="grow"
              placeholder="Search Scholarship, University & Degree"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <button className="btn rounded bg-[#193b42]  border-[#3f5155] hover:border-[#3f5155] px-8 hover:bg-[#102930] text-white text-lg font-semibold">
            Search
          </button>
        </form>
      </div>

      {/* total scholarships */}
      {searchData.length > 0 ? (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 xl:max-w-[85rem] sm:max-w-[55rem] md:px-10 px-4 mx-auto pb-36">
          {searchData.map((card, idx) => (
            <Card key={card._id} card={card} idx={idx}></Card>
          ))}
        </div>
      ) : (
        <div className="text-4xl font-semibold pt-14 pb-44 text-center text-gray-300">
          No Data Found!
        </div>
      )}

      {/* pagination */}
      <div className="flex justify-center gap-4 mb-40">
        <button onClick={handlePrev} className="btn font-bold">
          Prev
        </button>

        <div className="join flex justify-center">
          {pages.map((page) => (
            <input
              key={page}
              onClick={() => setPageNo(page + 1)}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={page + 1}
              checked={page + 1 === pageNo}
            />
          ))}
        </div>

        <button onClick={handleNext} className="btn font-bold">
          Next
        </button>

        {/* pageItems */}
        <div>
          <select
            defaultValue={pageItems}
            onChange={handlePageItems}
            className="select select-bordered dark:text-black"
          >
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default TotalScholarships;
