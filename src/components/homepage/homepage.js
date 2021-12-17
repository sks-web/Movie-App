import { Table } from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomDropdown from "../atoms/customDropdown/customDropdown";
import CustomInput from "../atoms/customInput/customInput";

const Homepage = () => {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const [query, setQuery] = useState("");
  const [updatedData, setUpdatedData] = useState(movieList);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onLanguageFilterChange = (e) => {
    // setLanguage(e.key);
    if (e.key !== "removeFilter") {
      setUpdatedData(
        movieList.filter((movie) => {
          return movie.language.toLowerCase() === e.key;
        })
      );
    } else {
      setUpdatedData(movieList);
    }
  };
  const redStyle = {
    color: "red",
  };
  const greenStyle = {
    color: "green",
  };
  const bookmarkhandler = (e) => {
    dispatch({ type: "BOOKMARK_MOVIE", id: e });
  };
  const watchLaterHandler = (e) => {
    dispatch({ type: "WATCH_LATER", id: e });
  };
  const columns = [
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
      title: "Bookmark",
      dataIndex: "bookmark",
      key: "bookmark",
      render: (text, record, index) => (
        <a
          style={text ? greenStyle : redStyle}
          onClick={() => bookmarkhandler(record.key)}
        >
          Bookmark
        </a>
      ),
    },
    {
      title: "Watch Later",
      dataIndex: "watchLater",
      key: "watchLater",
      render: (text, record, index) => (
        <a
          style={text ? greenStyle : redStyle}
          onClick={() => watchLaterHandler(record.key)}
        >
          Watch Later
        </a>
      ),
    },
  ];

  useEffect(() => {
    function updateData() {
      setUpdatedData(
        movieList.filter((movie) => {
          return (
            movie.name.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase())
          );
        })
      );
    }
    const timeoutID = setTimeout(updateData, 800);
    return function () {
      clearTimeout(timeoutID);
    };
  }, [query, movieList]);
  return (
    <div>
      <div style={{ margin: "auto", padding: "20px", width: "50%" }}>
        <CustomInput
          placeholder="Search with geren or movie name"
          onInputChangeHandler={onChangeHandler}
          value={query}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          padding: "20px",
          width: "50%",
        }}
      >
        <CustomDropdown
          onClickEvent={onLanguageFilterChange}
          menu={movieList.map((movie) => movie.language)}
        />
      </div>
      <Table dataSource={updatedData} columns={columns} />
    </div>
  );
};

export default Homepage;
