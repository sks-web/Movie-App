import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Bookmark = () => {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movieList);
  const updatedata = movieData.filter((movie) => {
    if (movie.bookmark) {
      return movie;
    }
  });

  const removeFromBookmarks = (e) => {
    dispatch({ type: "BOOKMARK_MOVIE", id: e });
  };
  const columns = [
    {
      title: "Sr No",
      dataIndex: "srNo",
      key: "srNo",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Cast",
      dataIndex: "cast",
      key: "cast",
    },
    {
      title: "Similar Movies",
      dataIndex: "similarMovies",
      key: "similarMovies",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "",
      dataIndex: "removeBookmark",
      key: "removeBookmark",
      render: (text, record, index) => (
        <a onClick={() => removeFromBookmarks(record.key)}>Remove</a>
      ),
    },
  ];
  return <Table dataSource={updatedata} columns={columns} />;
};

export default Bookmark;
