
import { useState } from 'react'
import Blogs from './blogs/Blogs'
import Header from './components/Header'
import Bookmark from './components/bookmark/Bookmark'
import { addDataToLS } from './utilitis/localstorage'

function App() {
   const [bookmarks, setBookmark ] = useState([])
   const [readingTime, setReadingTime] = useState(0);

// adding bookmark
   const handleBookmarkBTN = blog =>{
   
    console.log(blog);
     const bookmarkItem = [...bookmarks, blog]
     setBookmark(bookmarkItem)
     addDataToLS(blog.id)
     
    
   }

  //  adding reading time

  const handleReadingTime = time =>{
    setReadingTime(readingTime + time)
  }
 
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <div className='grid grid-cols-3 justify-center'>
        <div className='col-span-2'>

        <Blogs 
        handleBookmarkBTN={handleBookmarkBTN}
        handleReadingTime={handleReadingTime}
        
        />
        </div>
        <div className='bg-gray-200'>
          <Bookmark 
          bookmarks={bookmarks}
          readingTime={readingTime}
          
          />
        </div>
      </div>
    </div>
  )
}

export default App
