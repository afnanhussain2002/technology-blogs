import SingleBookmark from "../../singleBookmark/SingleBookmark";


const Bookmark = ({bookmarks, readingTime}) => {
    
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mt-10 text-blue-500"> Total Readng Time: {readingTime} min</h2>
            <h2 className="text-2xl font-semibold text-center mt-10">Bookmarks: {bookmarks.length}</h2>
            <div>
                {
                    bookmarks.map(bookmark => <SingleBookmark key={bookmark.id} bookmark={bookmark}></SingleBookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmark;