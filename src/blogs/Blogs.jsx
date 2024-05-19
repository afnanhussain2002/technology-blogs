import { useEffect, useState } from "react";
import Blog from "../singleBlog/Blog";

const Blogs = ({handleBookmarkBTN, handleReadingTime, blogs}) => {

  return (
    <div>
      {blogs.map((blog) => (
        <Blog 
        key={blog.id} 
        blog={blog}
        handleBookmarkBTN={handleBookmarkBTN}
        handleReadingTime={handleReadingTime}
        >

        </Blog>
      ))}
    </div>
  );
};

export default Blogs;
