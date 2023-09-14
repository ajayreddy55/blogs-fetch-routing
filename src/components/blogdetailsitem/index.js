import { useParams } from "react-router-dom";

import "./index.css";
import { useEffect, useState } from "react";

const BlogItemDetails = () => {
  const [blogData, setBlogData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getBlogDetails();
    //eslint-disable-next-line
  }, []);

  const getBlogDetails = () => {
    setIsDataLoading(true);

    let dataUrl = `https://apis.ccbp.in/blogs/${id}`;
    fetch(dataUrl)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        let updatedData = {
          author: jsonData.author,
          avatarUrl: jsonData.avatar_url,
          id: jsonData.id,
          imageUrl: jsonData.image_url,
          title: jsonData.title,
          topic: jsonData.topic,
          content: jsonData.content,
        };
        setIsDataLoading(false);
        setBlogData(updatedData);
      })
      .catch((error) => {
        setIsDataLoading(false);
        console.log(error.message);
      });
  };

  const displayDataOrLoader = () => {
    if (isDataLoading) {
      return (
        <div className="d-flex align-items-center justify-content-center mt-5 mb-2">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const { title, avatarUrl, imageUrl, content, author } = blogData;

    return (
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={"avatar"} className="avatar" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="content">{content}</p>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      {displayDataOrLoader()}
    </div>
  );
};

export default BlogItemDetails;
