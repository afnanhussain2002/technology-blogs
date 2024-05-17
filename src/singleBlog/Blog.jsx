const Blog = ({blog}) => {
    console.log(blog);
    const {bannerImage, postTitle, authorImage, postDate, postTags, authorName } = blog 
    return (
        <div>
            <img className="w-96" src={bannerImage} alt="banner" />
            <div>
                <img className="w-5" src={authorImage} alt={authorName} />
            </div>
        </div>
    );
};

export default Blog;