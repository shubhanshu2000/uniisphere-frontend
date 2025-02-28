import { CiSearch } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import HomeCard from "../../components/HomeCard";

const Home = () => {
  return (
    <div className="relative">
      <header className="flex justify-around items-center px-2 py-4 bg-white fixed top-0 w-full z-1">
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
      <div className="mt-18">
        {Array.from({ length: 10 }, (_, i) => {
          return <HomeCard index={i} />;
        })}
      </div>
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
