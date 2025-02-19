/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Auth/Hook/useAxiosSecure";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination } from "swiper/modules";
import StoryCard from "./StoryCard";
import { useEffect, useState } from "react";

const Stories = ({ id }) => {
  // useHooks
  const axiosSecure = useAxiosSecure();
  const [viewCard, setViewCard] = useState(3)

  useEffect(()=>{
    window.addEventListener("resize", ()=> {
      if(innerWidth < 780){
        setViewCard(1)
      }
      else if(innerWidth < 1080){
        setViewCard(2)
      }
      else{
        setViewCard(3)
      }
    })
  },[])

  console.log(viewCard);

  // tanstack for stories
  const { data: stroies = [] } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/stroies/${id}`);
      return res.data;
    },
  });

  return (
    <>
      <Swiper
        // loop={true}
        slidesPerView={viewCard}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {stroies.length > 0 ? (
          stroies.map((story, idx) => (
            <SwiperSlide key={story._id} className="p-4">
              <StoryCard story={story} idx={idx}></StoryCard>
            </SwiperSlide>
          ))
        ) : (
          <div className="text-2xl font-semibold text-gray-300 mt-20">
            No Review Given Yet.
          </div>
        )}

        {}
      </Swiper>
    </>
  );
};

export default Stories;
