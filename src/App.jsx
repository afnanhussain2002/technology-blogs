import swal from 'sweetalert';


import { useEffect, useState } from 'react'
import Blogs from './blogs/Blogs'
import Header from './components/Header'
import Bookmark from './components/bookmark/Bookmark'
import { addDataToLS, getItemFromLS, removeDataFromLS } from './utilitis/localstorage'

function App() {
  const [blogs, setBlogs] = useState([]);
   const [bookmarks, setBookmark ] = useState([])
   const [readingTime, setReadingTime] = useState(0);

  
   

// adding bookmark
const handleBookmarkBTN = blog =>{
     const bookmarkItem = [...bookmarks, blog]
     const existBookmarks = bookmarks.find((booked) => booked.id === blog.id)
     console.log(existBookmarks);
     if(existBookmarks){
      return swal({
        title: "This Post Already Exists",
        icon:"warning"
 
      });
     }else{
       setBookmark(bookmarkItem)
       addDataToLS(blog.id)
       return swal({
        title: "Post Added On Bookmarked",
        icon:"success"
 
      });
     }
   
   }

   const handleRemoveFromLS = id =>{
     const reamainingBlogs = bookmarks.filter(blog => blog.id !== id)
     setBookmark(reamainingBlogs)
     swal({
      title: "Bookmarked Removed",
      icon:"success"

    });
     removeDataFromLS(id)
     
   }

   
   useEffect(() => {
     fetch("data.json")
       .then((res) => res.json())
       .then((data) => setBlogs(data));
   }, []);

   useEffect(()=>{
     if (blogs.length > 0) {
       const storeData = getItemFromLS();
      
       const savedData = []

       for(const id of storeData){
         const blog = blogs.find(blog => blog.id === id)

         if (blog) {
          savedData.push(blog)
         }
       }
       setBookmark(savedData)
     }
   },[blogs])

  //  adding reading time

  const handleReadingTime = time =>{
    setReadingTime(readingTime + time)
    
  }
 
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <div className='grid grid-cols-3 justify-center  '>
        <div className='col-span-2'>

        <Blogs 
        handleBookmarkBTN={handleBookmarkBTN}
        handleReadingTime={handleReadingTime}
        blogs={blogs}
        
        />
        </div>
        <div className='bg-gray-200'>
          <Bookmark 
          bookmarks={bookmarks}
          readingTime={readingTime}
          handleRemoveFromLS={handleRemoveFromLS}
          
          />
        </div>
      </div>
    </div>
  )
}

export default App
