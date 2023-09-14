import { useState, useEffect } from "react";

import "./home.css";
import BlogItem from "../blogsitem";

const HomeBlogs = () => {
  const [blogsList, setBlogsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBlogsList();
    // eslint-disable-next-line
  }, []);

  const updateObjectProperties = (item) => {
    return {
      id: item.id,
      author: item.author,
      avatarUrl: item.avatar_url,
      imageUrl: item.image_url,
      title: item.title,
      topic: item.topic,
    };
  };

  const getBlogsList = () => {
    setIsLoading(true);

    let url = "https://apis.ccbp.in/blogs";
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        let updatedData = [];
        for (let item of jsonData) {
          let updatedItem = updateObjectProperties(item);
          updatedData.push(updatedItem);
        }
        setBlogsList(updatedData);
        setIsLoading(false);
      });
  };

  const displayListOrLoader = () => {
    if (isLoading) {
      return (
        <div className="d-flex align-items-center justify-content-center mt-5 mb-2">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <ul className="blogs-list-container-routing">
        {blogsList.map((eachItem) => (
          <BlogItem blogDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    );
  };

  return (
    <div className="blogs-home-container">
      <div className="blogs-profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="blogs-profile-icon"
        />
        <h2 className="blogs-profile-name">Wade Warren</h2>
        <p className="blogs-job-profile">Software Developer at UK</p>
      </div>
      {displayListOrLoader()}
    </div>
  );
};

export default HomeBlogs;
