import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleBookmarkBTN}) => {
    
    const {bannerImage, postTitle, authorImage, postDate, postTags, authorName,  postReadingTime } = blog 
    return (
        <div className="max-w-4xl mt-10">
            <img className="w-[700px] rounded-3xl h-[400px]" src={bannerImage} alt="banner" />
            <div className="mt-5 grid grid-cols-6">
                <div className="flex gap-3 col-span-4">
                <img className="w-10" src={authorImage} alt={authorName} />
                <div>
                    <h5 className="font-semibold text-2xl">{authorName}</h5>
                    <p className="text-sm">{postDate}</p>
                </div>

                </div>
                <div className="flex items-center gap-1 text-xl">
                    <h6 className="font-semibold">{postReadingTime} min read </h6>
                    <button onClick={() => handleBookmarkBTN(blog)}><CiBookmark/></button>
                </div>

            </div>
            <h3 className="text-4xl font-semibold mt-5">{postTitle}</h3>
            <p>
                { 
                postTags.map((tag, idx) => <a key={idx} href="#"> #{tag}</a>)
                
                }
                
                </p>
            <button className="text-blue-500 underline">Mark as read</button>
        </div>
    );
};

export default Blog;