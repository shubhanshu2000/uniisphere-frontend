import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Profile = () => {
  const achievements = [
    {
      image: "/assets/study.png",
      alt: "study",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vel, dolore repellendus eveniet reprehenderit sint atque?",
    },
    {
      image: "/assets/book.jpg",
      alt: "book",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laudantium iste voluptatum odio veniam aliquid.",
    },
    {
      image: "/assets/animated_study.png",
      alt: "Animated Study",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium qui repudiandae enim pariatur error! Laboriosam.",
    },
    {
      image: "/assets/book.jpg",
      alt: "book",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laudantium iste voluptatum odio veniam aliquid.",
    },
    {
      image: "/assets/animated_study.png",
      alt: "Animated Study",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium qui repudiandae enim pariatur error! Laboriosam.",
    },
    {
      image: "/assets/book.jpg",
      alt: "book",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed laudantium iste voluptatum odio veniam aliquid.",
    },
    {
      image: "/assets/animated_study.png",
      alt: "Animated Study",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium qui repudiandae enim pariatur error! Laboriosam.",
    },
    // Add more items if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullAbout, setShowFullAbout] = useState(false);

  const aboutText =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolore provident esse ratione beatae mollitia, accusamus facere nemo, sint quasi blanditiis. Nesciunt, quia fugiat!";

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      // Create infinite loop effect
      return nextIndex >= achievements.length
        ? 0 // Start from beginning when reaching the end
        : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 3;
      // Create infinite loop effect
      return nextIndex < 0
        ? achievements.length - (achievements.length % 3 || 3) // Go to last set of items
        : nextIndex;
    });
  };

  // Add this helper function at the top of your component
  const truncateWords = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  // First, add this state and data at the top of your component
  const interests = [
    {
      content: "Books",
      gradient: "from-[#44A9B133] to-[#33FF0033]",
    },
    {
      content: "Riding",
      gradient: "from-[#FF9B9B33] to-[#FFD9001A]",
    },
    {
      content: "Travel",
      gradient: "from-[#04E6FF1A] to-[#9747FF1A]",
    },
    {
      content: "Painting",
      gradient: "from-[#F9C97C33] to-[#E889891A]",
    },
    {
      content: "Singing",
      gradient: "from-[#B6E5FF33] to-[#8BC6FF1A]",
    },
    {
      content: "Food",
      gradient: "from-[#FFB6E533] to-[#FF8BC61A]",
    },
    {
      content: "Cooking",
      gradient: "from-[#44A9B133] to-[#33FF0033]",
    },
    {
      content: "Reading",
      gradient: "from-[#FF9B9B33] to-[#FFD9001A]",
    },
    {
      content: "Gaming",
      gradient: "from-[#04E6FF1A] to-[#9747FF1A]",
    },
    {
      content: "Photography",
      gradient: "from-[#F9C97C33] to-[#E889891A]",
    },
    {
      content: "Music",
      gradient: "from-[#B6E5FF33] to-[#8BC6FF1A]",
    },
    {
      content: "Drawing",
      gradient: "from-[#FFB6E533] to-[#FF8BC61A]",
    },
  ];

  const [currentInterestIndex, setCurrentInterestIndex] = useState(0);

  // Add these navigation functions
  const nextInterestSlide = () => {
    setCurrentInterestIndex((prevIndex) => {
      const nextIndex = prevIndex + 8;
      return nextIndex >= interests.length ? 0 : nextIndex;
    });
  };

  const prevInterestSlide = () => {
    setCurrentInterestIndex((prevIndex) => {
      const nextIndex = prevIndex - 8;
      return nextIndex < 0 ? Math.max(interests.length - 8, 0) : nextIndex;
    });
  };

  return (
    <>
      <section>
        <div className="flex justify-between items-center m-6">
          <FaRegArrowAltCircleLeft fontSize={"1.5rem"} />
          <div className="bg-[#F2F1F1] px-2 py-1 rounded-xl text-xs">
            <span className="text-[#30b4fe]">+</span>
            <span className="text-[#30b4fe]">C</span>
            <span className="text-[#e9877a]">O</span>
            <span className="text-[#e1c86b]">N</span>
            <span className="text-[#8f979b]">N</span>
            <span className="text-[#ea8e82]">E</span>
            <span className="text-[#ac89a3]">C</span>
            <span className="text-[#e9877a]">T</span>
          </div>
        </div>
        <div className="flex items-center mx-6 justify-between">
          <img
            className="h-20 w-20 rounded-full"
            src="/assets/profile.jpg"
            alt="profile"
          />
          <div className="flex text-center items-center gap-x-4">
            <div className="flex flex-col text-xl font-semibold">
              <span>248</span>
              <span className="text-sm font-normal">Connections</span>
            </div>
            <div className="flex flex-col text-xl font-semibold">
              <span>78</span>
              <span className="text-sm font-normal">Collabs</span>
            </div>
          </div>
        </div>
        <div className="mx-6">
          <div>
            <h2 className="font-semibold text-lg">Vijay Prasad</h2>
            <div className="my-2 flex items-center border rounded-xl w-fit px-2 py-1  bg-linear-to-b from-[#04E6FF1A] to-[#FFD9001A]">
              <img
                className="h-10 -ml-4"
                src="/assets/collegeLogo.png"
                alt="college logo"
              />
              <p className="-ml-2">Hansraj College</p>
            </div>
            <p>Uniisphere University of Delhi</p>
          </div>
        </div>
      </section>

      <section className="relative px-8 mt-4 border-y-4 border-[#eeeeee]">
        <h1 className="text-xl font-semibold my-2">Achievement or Role</h1>
        <div className="relative flex items-center">
          <button
            onClick={prevSlide}
            className="absolute -left-6 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>

          <div className="w-full flex justify-between gap-4">
            {achievements
              .slice(currentIndex, currentIndex + 3)
              .map((item, index) => (
                <div key={index} className="w-1/3 bg-white rounded-lg  p-2">
                  <img
                    className="w-full h-40 object-cover rounded-lg"
                    src={item.image}
                    alt={item.alt}
                  />
                  <p className="mt-2 text-sm text-gray-600">
                    {truncateWords(item.description, 10)}
                  </p>
                </div>
              ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-6 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      <section className="px-6 pb-2 border-b-4 border-[#eeeeee]">
        <h1 className="text-xl font-semibold my-2">About</h1>
        <p
          onClick={() => setShowFullAbout(!showFullAbout)}
          className="cursor-pointer"
        >
          {showFullAbout
            ? aboutText
            : truncateWords(aboutText, 10).replace("...", "...see more")}
        </p>
      </section>

      <section className="relative px-8 mt-4">
        <h1 className="text-xl font-semibold my-2">Interest</h1>
        <div className="relative">
          <button
            onClick={prevInterestSlide}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>

          <div className="grid grid-rows-2 grid-cols-4 gap-4">
            {interests
              .slice(currentInterestIndex, currentInterestIndex + 8)
              .map((interest, index) => (
                <p
                  key={index}
                  className={`rounded-lg px-4 py-1 text-center bg-gradient-to-b ${interest.gradient} truncate whitespace-nowrap overflow-hidden`}
                >
                  {interest.content}
                </p>
              ))}
          </div>

          <button
            onClick={nextInterestSlide}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
