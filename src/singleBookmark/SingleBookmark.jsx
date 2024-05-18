const SingleBookmark = ({ bookmark }) => {
  console.log(bookmark);
  const { postTitle } = bookmark;
  return (
    <div className="bg-white w-64 mx-auto p-4 rounded-lg mt-2">
      <h3 className="text-xl font-semibold">{postTitle}</h3>
    </div>
  );
};

export default SingleBookmark;
