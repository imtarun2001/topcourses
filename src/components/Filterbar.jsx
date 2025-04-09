import React from 'react';

function Filterbar({ filterData, setCategory }) {
    return (
        <div className="flex flex-col mt-2 px-5  md:flex-row justify-between items-center md:gap-20 bg-purple-700 rounded-md md:mt-5 md:px-12">
            {
                filterData.map((btnName) => (
                    <button
                        key={btnName.id}
                        onClick={() => setCategory(btnName.title)}
                        className="flex justify-center items-center px-4 py-2 text-[15px] font-bold text-sky-100 bg-black rounded-lg border-2 border-purple-700 cursor-pointer my-[5px] font-montserrat hover:border-sky-300 transition duration-300"
                    >
                        {btnName.title}
                    </button>
                ))
            }
        </div>
    );
}

export default Filterbar;