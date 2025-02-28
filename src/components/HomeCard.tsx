import { HiDotsVertical } from "react-icons/hi";
import { PiShareFat } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

interface HomeCardProps {
  index: number;
}

const HomeCard = ({ index }: HomeCardProps) => {
  return (
    <section
      className={`px-4 py-2  ${
        index === 0 ? "border-y-4" : "border-b-4"
      } border-[#eeeeee]`}
    >
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
            <span className="text-[#30b4fe]">+</span>
            <span className="text-[#30b4fe]">C</span>
            <span className="text-[#e9877a]">O</span>
            <span className="text-[#e1c86b]">N</span>
            <span className="text-[#8f979b]">N</span>
            <span className="text-[#ea8e82]">E</span>
            <span className="text-[#ac89a3]">C</span>
            <span className="text-[#e9877a]">T</span>
          </div>
          <HiDotsVertical fontSize={"1.6rem"} />
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute -left-4 top-5 -z-1 "
          src="/assets/Ellipse_6.png"
          alt=""
        />
        <img
          className="absolute -left-4 top-55 -z-1 "
          src="/assets/ellipse_14.png"
          alt=""
        />
        <img
          className="absolute -left-4 top-85 -z-1 "
          src="/assets/ellipse_12.png"
          alt=""
        />
        <img
          className="absolute -left-4 bottom-4 -z-1 "
          src="/assets/ellipse_9.png"
          alt=""
        />
        <img
          className="absolute -right-4 top-4 -z-1 "
          src="/assets/ellipse_2.png"
          alt=""
        />
        <img
          className="absolute -right-4 top-24 -z-1 "
          src="/assets/ellipse_31.png"
          alt=""
        />
        <img
          className="absolute -right-4 top-64 -z-1 "
          src="/assets/ellipse_35.png"
          alt=""
        />
        <img
          className="absolute -right-4 bottom-24 -z-1 "
          src="/assets/ellipse_32.png"
          alt=""
        />
        <img
          className="absolute -right-4 bottom-0 -z-1 "
          src="/assets/ellipse_10.png"
          alt=""
        />
        <img
          className="absolute right-[40%] -bottom-6 -z-1 "
          src="/assets/ellipse_10.png"
          alt=""
        />
        <img
          className="rounded-2xl mt-2 aspect-3/4 object-cover"
          src="/assets/post.png"
          alt="post"
        />
      </div>
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
  );
};

export default HomeCard;
