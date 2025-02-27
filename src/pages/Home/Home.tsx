import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  return (
    <div className="relative">
      <header className="flex justify-around items-center px-2 py-4 bg-white">
        <img
          className="h-10 w-10 rounded-full"
          src="/assets/profile.jpg"
          alt="profile"
        />
        <div className="relative px-4 py-1 rounded-full shadow-[inset_0_0_10px_#7e7c7c] ">
          <input
            className="focus:outline-none active:outline-none"
            type="text"
            placeholder="Search"
          />
          <CiSearch className="absolute right-4 top-2" />
        </div>
        <MdOutlineMessage className="shadow-2xl" />
      </header>
      <section className="px-4 py-2  border-y-4 border-[#eeeeee]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 ">
            <img
              className="h-10 w-10 rounded-full"
              src="/assets/profile.jpg"
              alt="profile"
            />
            <div>
              <h1 className="text-sm">
                Vijay Prasad <span className="text-gray-400 text-xs">18 h</span>
              </h1>
              <p className="text-xs">University of Delhi...</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 ">
            <div className="bg-[#F2F1F1] px-2 py-1 rounded-xl text-xs">
              <p>+ CONNECT</p>
            </div>
            <HiDotsVertical />
          </div>
        </div>
        <img
          className="rounded-2xl mt-2 aspect-3/4 object-cover"
          src="/assets/post.png"
          alt="post"
        />
        <div className="mt-2 flex items-center justify-between">
          <p className="font-semibold">4012 Likes</p>
          <div className="flex items-center space-x-4">
            <PiShareFat size="30px" />
            <img src="/assets/comment.svg" alt="" />
            <CiHeart size="35px" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">
            Vijay Prashad{" "}
            <span className="font-normal">
              Been have evolved to go in the university and will probably prefer
              the university of...
            </span>
            <span className="font-normal text-[#8C8C8C]"> more</span>
          </h3>
        </div>
      </section>
      <section className="px-4 py-2 border-y-4 border-[#eeeeee]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 ">
            <img
              className="h-10 w-10 rounded-full"
              src="/assets/profile.jpg"
              alt="profile"
            />
            <div>
              <h1 className="text-sm">
                Vijay Prasad <span className="text-gray-400 text-xs">18 h</span>
              </h1>
              <p className="text-xs">University of Delhi...</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 ">
            <div className="bg-[#F2F1F1] px-2 py-1 rounded-xl text-xs">
              <span className="text-[#30B4FE]">+</span>{" "}
              <span className="text-[#44a9b1]">C</span>
              <span className="text-[#e9877a]">O</span>
              <span className="text-[#e1c86b]">N</span>
              <span className="text-[#8f979b]">N</span>
              <span className="text-[#ea8e82]">E</span>
              <span className="text-[#ac89a3]">C</span>
              <span className="text-[#e9877a]">T</span>
            </div>
            <HiDotsVertical />
          </div>
        </div>
        <img
          className="rounded-2xl mt-2 aspect-3/4 object-cover"
          src="/assets/post.png"
          alt="post"
        />
        <div className="mt-2 flex items-center justify-between">
          <p className="font-semibold">4012 Likes</p>
          <div className="flex items-center space-x-4">
            <PiShareFat size="30px" />
            <img src="/assets/comment.svg" alt="" />
            <CiHeart size="35px" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">
            Vijay Prashad{" "}
            <span className="font-normal">
              Been have evolved to go in the university and will probably prefer
              the university of...
            </span>
            <span className="font-normal text-[#8C8C8C]"> more</span>
          </h3>
        </div>
      </section>
      <section className="fixed bottom-0 px-4 py-1 rounded-xl shadow-[inset_0_0_10px_#7e7c7c] h-14 w-full bg-white flex justify-between items-center">
        <img src="/assets/homeNav.png" alt="home" className="h-10" />
        <img src="/assets/notificationNav.png" alt="notification" />
        <img src="/assets/addNav.png" alt="add" />
        <img src="/assets/calenderNav.png" alt="calender" />
        <img src="/assets/scienceNav.png" alt="home" />
      </section>
    </div>
  );
};
export default Home;
