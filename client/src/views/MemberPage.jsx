import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiStreamOff, CiStreamOn } from "react-icons/ci";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { fectMembersVideo } from "../stores/actionCreator/talentsCreator";
import AllNavbarComponent from "../components/AllNavbarPage";
import AllFooterPage from "../components/AllFooterPage";
import MemberCard from "../components/MemberCard";

const MemberPage = () => {
  const { oneIdol } = useSelector((state) => state.idols);
  const dispatcher = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const fetchOneIdol = async () => {
    try {
      await dispatcher(fectMembersVideo());
      console.log("masukkkkk")
    } catch (error) {
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchOneIdol();
  }, []);





  const ScrollbarHide = () => {
    return (
      <style>
        {`
          #schecdule_stream::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  const scrollLeft = () => {
    document.getElementById(`${type}`).scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById(`${type}`).scrollLeft += 400;
  };

  const ScrollbarHideVideo = () => {
    return (
      <style>
        {`
          #video_youtube::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <AllNavbarComponent />

      <div id="schecdule" className="w-10/12 my-28 font-display">
        <ScrollbarHide />
        <div class="flex flex-col items-center mb-12 ml-40">
          <h2 class="title-name font-semibold text-3xl">Schedule</h2>
          <span class="py-0.5 mt-2 px-[105px] rounded-full bg-blue-500"></span>
        </div>
        <div
          id="schecdule_stream"
          className="bg-gray-800 relative flex flex-col mx-28 rounded-2xl drop-shadow-2xl h-[500px] w-full p-16 overflow-scroll shadow-inner"
        >
          <ol class="relative border-l border-gray-200">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/moona_hoshinova_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978351"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-white ">
                Moona Hoshinova{" "}
                <span class="bg-blue-500 text-White text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ml-3">
                  Now
                </span>
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/sp-aDdSqIac/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLALjAE7P7iVdM_hBFpKpbFWuz_f5w"
                  alt=""
                />
                <div>
                  <div>
                    【Movie Night】Let's watch a movie! and talk!!!!【Moona】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/moona_hoshinova_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090978351"
                      alt="img"
                    />
                    <div className="text-xs">Moona Hoshinova</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[70px] bg-[#cc0000e6] text-white">
                    <CiStreamOn className="font-bold" />{" "}
                    <div className="text-xs">Live</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/kobo_kanaeru_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090975077"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Kobo Kanaeru{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/SF-_47-oCtk/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhhTcgzxuC4AiJ2sxKJXZkJH2Wpg"
                  alt=""
                />
                <div>
                  <div>
                    【ORIGINAL SONG MV】Mantra Hujan - Kobo Kanaeru 【hololive
                    Indonesia 3rd Gen】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/kobo_kanaeru_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090975077"
                      alt="img"
                    />
                    <div className="text-xs">Kobo Kanaeru</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Gawr Gura{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={280}
                  src="https://i.ytimg.com/vi/yL7ndXwvBu4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDY-P9U-YLZ5yAWH-FoqZd8Reqcaw"
                  alt=""
                />
                <div>
                  <div>
                    [ORIGINAL ANIMATION] Gawr Gura - GTA V DUDE wheres my car
                    #GawrGura
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                      alt="img"
                    />
                    <div className="text-xs">Gawr Gura</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Gawr Gura{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/nCQ_zZIiGLA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaXdGzRIvmaI0ldBWSfhBdfvIp8w"
                  alt=""
                />
                <div>
                  <div>
                    Renai Circulation / Gawr Gura x Murasaki Shion (Cover)
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/gawr_gura_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973690"
                      alt="img"
                    />
                    <div className="text-xs">Gawr Gura</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/amelia_watson_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973746"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Watson Amelia{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/Y5t-sNYgxDg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAdnEbzlyX-pbi6UJtRBR_-oyR0Yg"
                  alt=""
                />
                <div>
                  <div>Lorem, ipsum dolor sit amet consectetur adipisicing</div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/amelia_watson_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090973746"
                      alt="img"
                    />
                    <div className="text-xs">Watson Amelia</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/sakura_miko_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090970471"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Sakura Miko{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://img.youtube.com/vi/YrcTKMAqrNo/mqdefault.jpg"
                  alt=""
                />
                <div>
                  <div>
                    【 FCスーパーマリオブラザーズ
                    】クリアまで‼マリオの達人に俺はなる、にぇ！！！！🔥【ホロライブ/さくらみこ
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/sakura_miko_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675090970471"
                      alt="img"
                    />
                    <div className="text-xs">Sakura Miko</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <img
                  class="rounded-full shadow-lg"
                  src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/tokino_sora_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675005825239"
                  alt="Bonnie image"
                />
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-100 ">
                Tokino Sora{" "}
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-200 ">
                12:00 WIB 21 Okt, 2023
              </time>
              <div className="flex gap-5 w-9/12 bg-slate-200 p-2 rounded-md">
                <img
                  className="rounded-md"
                  width={200}
                  src="https://i.ytimg.com/vi/gTBEgaN9ZlI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTTXgev27MbghIoi8ho8m168DZVg"
                  alt=""
                />
                <div>
                  <div>
                    『e-ma e-ma』歌って踊ってみた【ホロライブ / ときのそら】
                  </div>
                  <div className="flex gap-2 mb-3 items-center mt-3">
                    <img
                      width={25}
                      className="rounded-3xl"
                      src="https://ik.imagekit.io/Holotiv8/Final_Project/Profile/tokino_sora_profile.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675005825239"
                      alt="img"
                    />
                    <div className="text-xs">Tokino Sora</div>
                  </div>
                  <div class="flex gap-1 rounded-sm py-[5px] px-[10px] w-[90px] bg-[#cc0000e6] text-white">
                    <CiStreamOff className="font-bold" />{" "}
                    <div className="text-xs">Pending</div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div id="video_member">
        <div class="flex flex-col items-center mb-12 ml-30">
          <h2 class="title-name font-semibold text-3xl">Exclusive videos</h2>
          <span class="py-0.5 mt-2 px-[190px] rounded-full bg-blue-500"></span>
        </div>

        <div id="videos_carousel" className="bg-gray-500">
          <div className={`relative h-[320px] pt-9`}>
          
            <div className="absolute right-0 translate-y-[-60%] ">
              <>
                <button
                  onClick={scrollLeft}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 m-2 rounded-full bg-white"
                >
                  <FiChevronRight />
                </button>
              </>
            </div>
            <ScrollbarHideVideo />
            <div
              id="video_youtube"
              className="carousel p-4 flex items-start justify-start self-start overflow-x-auto scroll-smooth  scrollbar-hide"
            >
              {/* {oneIdol.map((el) =>{
          return (
          <div>
            <MemberCard videos={el}/>
          </div>
          )
        })} */}
            </div>
          </div>
        </div>
      </div>
      <AllFooterPage />
    </>
  );
};

export default MemberPage;
