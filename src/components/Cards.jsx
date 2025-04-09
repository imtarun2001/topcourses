import React, { useState } from 'react';
import Card from './Card';

function Cards(props) {
    const { courses, category } = props;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === 'All') {
            let allCourses = [];
            Object.values(courses).forEach(value => {
                value.forEach(courseData => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        } else {
            return courses[category];
        }
    }

    return (
        <div className="border-t-2 border-cyan-400 min-h-screen mt-5 flex flex-row justify-around flex-wrap bg-transparent">
            {
                getCourses().map((course) => (
                    <Card
                        key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}
                    />
                ))
            }
        </div>
    );
}

export default Cards;