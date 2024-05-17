const Blog = ({blog}) => {
    console.log(blog);
    const {bannerImage, postTitle, authorImage, postDate, postTags, authorName,  postReadingTime } = blog 
    return (
        <div className="max-w-4xl mt-10">
            <img className="w-[700px] rounded-3xl h-[400px]" src={bannerImage} alt="banner" />
            <div className="mt-5 grid grid-cols-6">
                <div className="flex gap-3 col-span-4">
                <img className="w-10" src={authorImage} alt={authorName} />
                <div>
                    <h5 className="font-semibold text-xl">{authorName}</h5>
                    <p className="text-sm">{postDate}</p>
                </div>

                </div>
                <div>
                    <h6 className="font-semibold">{postReadingTime} min read </h6>
                </div>

            </div>
            <h3 className="text-4xl font-semibold mt-5">{postTitle}</h3>
            <p>#{ postTags }</p>
            <button className="text-blue-500 underline">Mark as read</button>
        </div>
    );
};

export default Blog;