

const SingleBookmark = ({bookmark}) => {
    console.log(bookmark);
    const {postTitle} = bookmark
    return (
        <div>
            <h3 className="text-xl text-center font-semibold">{postTitle}</h3>
        </div>
    );
};

export default SingleBookmark;