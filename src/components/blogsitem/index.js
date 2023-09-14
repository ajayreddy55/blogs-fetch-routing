import { Link } from "react-router-dom";
import "./index.css";

const BlogItem = (props) => {
  const { blogDetails } = props;
  const { id, author, avatarUrl, imageUrl, topic, title } = blogDetails;

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <li className="list-item">
        <img src={imageUrl} alt={`item${id}`} className="image-item" />
        <div className="topic-title-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-author-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default BlogItem;
