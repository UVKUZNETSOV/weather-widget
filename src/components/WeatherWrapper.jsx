import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "../styles/swiper.css";

import WeatherWidget from "./WeatherWidget";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../store/cities/cities.slice";

const WeatherWrapper = () => {
  const [newLocation, setNewLocation] = useState("")
  const dispatch = useDispatch()

  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setLocation(newLocation))
    inputRef.current.value = ""
  }

  return (
    <div className={" z-10 p-10 w-5/6 2xl:w-1/3 lg:w-2/5 md:w-3/5 bg-white bg-opacity-10 rounded-3xl shadow-xl backdrop-blur-xl"}>
      <div className="w-full flex justify-end">
        <form onSubmit={e => handleSubmit(e)} action="" className="flex gap-3">
          <input
            ref={inputRef}
            onChange={e => setNewLocation(e.target.value)}
            placeholder="Search"
            type="text"
            className="w-32 rounded-full outline-none h-10 px-4 focus:box-border transition-all focus:border-solid focus:border-2 placeholder:text-gray-400 text-gray-400"
          />
          <button className="w-10 bg-white rounded-full flex justify-center items-center">
            <svg
              className="w-4 h-4"
              fill="#9CA3AF"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.4 488.4"
            >
              <g>
                <g>
                  <path
                    d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
                  />
                </g>
              </g>
            </svg>
          </button>
        </form>
      </div>
      <div className="h-96 max-[460px]:h-[310px]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <WeatherWidget />
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex h-full justify-center items-center flex-col gap-5">
              <svg
                viewBox="0 0 24 24"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-32 cursor-pointer hover:fill-gray-200 transition-all"
              >
                <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" />
                <path d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" />
              </svg>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default WeatherWrapper;
