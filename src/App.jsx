
import { useState } from 'react'
import Blogs from './blogs/Blogs'
import Header from './components/Header'
import Bookmark from './components/bookmark/Bookmark'

function App() {
   const [bookmarks, setBookmark ] = useState([])


   const handleBookmarkBTN = blog =>{
   
    console.log(blog);
     const bookmarkItem = [...bookmarks, blog]
     setBookmark(bookmarkItem)
    
   }
 
  return (
    <div className='max-w-7xl mx-auto'>
      <Header/>
      <div className='grid grid-cols-3 justify-center'>
        <div className='col-span-2'>

        <Blogs handleBookmarkBTN={handleBookmarkBTN}/>
        </div>
        <div>
          <Bookmark bookmarks={bookmarks}/>
        </div>
      </div>
    </div>
  )
}

export default App
