import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostDetails = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.arrayTags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};
PostDetails.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
    arrayTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostDetails;
