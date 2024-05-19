const SingleBookmark = ({ bookmark, handleRemoveFromLS }) => {
  
  const { postTitle } = bookmark;
  return (
    <div className="bg-white w-64 mx-auto p-4 rounded-lg mt-2">
      <h3 className="text-xl font-semibold">{postTitle}</h3>
      <button onClick={()=>handleRemoveFromLS(bookmark.id)} className="bg-black text-white p-2 rounded-md mt-1 text-sm">Remove</button>
    </div>
  );
};

export default SingleBookmark;
