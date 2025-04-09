import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
    const { course, likedCourses, setLikedCourses } = props;

    function likeHandler() {
        if (likedCourses.includes(course.id)) {
            setLikedCourses(prev => prev.filter(cid => cid !== course.id));
            toast.warning("Like removed");
        } else {
            setLikedCourses(prev => [...prev, course.id]);
            toast.success("Liked successfully");
        }
    }

    return (
        <div className="bg-black max-w-[310px] h-[400px] flex flex-col justify-around items-center border border-[aliceblue] rounded-[10px] m-[15px] hover:scale-105 transition duration-1000">
            <div className="h-[170px] w-full flex justify-center items-center">
                <img
                    src={course.image.url}
                    alt="cant fetch"
                    className="h-[170px] border border-aqua rounded-[10px]"
                />
            </div>

            <div>
                <button className="border-none" onClick={likeHandler}>
                    {likedCourses.includes(course.id) ? (
                        <FcLike className="p-[5px] rounded-full h-[30px] w-[30px] flex justify-center items-center text-[25px] bg-[azure] cursor-pointer relative bottom-[30px] right-[100px]" />
                    ) : (
                        <FcLikePlaceholder className="p-[5px] rounded-full h-[30px] w-[30px] flex justify-center items-center text-[25px] bg-[azure] cursor-pointer relative bottom-[30px] right-[100px]" />
                    )}
                </button>
            </div>

            <h3 className="flex justify-start items-center w-[95%] relative bottom-[20px] text-white font-raleway font-bold h-[45px]">
                {course.title}
            </h3>

            <div className="w-[95%] relative bottom-[20px] font-poppins font-extralight text-[13px] text-left h-[100px]">
                <p className="text-justify text-[rgb(199,245,245)]">
                    {course.description.slice(0, 200) + '...'}
                </p>
            </div>
        </div>
    );
}

export default Card;