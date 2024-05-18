import SingleBookmark from "../../singleBookmark/SingleBookmark";


const Bookmark = ({bookmarks}) => {
    
    return (
        <div>
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