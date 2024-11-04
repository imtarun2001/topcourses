
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { apiUrl,filterData } from './ButtonsData';
import Heading from './components/Heading';
import Filterbar from './components/Filterbar';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses,setCourses] = useState(null);
  const [loader,setLoader] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoader(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(err) {
      toast.error("Error aya hai");
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  },[])


  return (
    <div className='app'>
        <div>
          <Heading/>
        </div>

        <div>
          <Filterbar filterData={filterData} setCategory={setCategory}/>
        </div>

        <div className='spincard'>
          {loader ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
        </div>
    </div>
  )
}

export default App
