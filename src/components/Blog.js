import { Link } from "react-router-dom";
import queryString from "query-string";

const Blog = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  // const query = useQuery();
  // console.log(query.get("sort"));
  const id = match.params.id;

  return (
    <h2>
      <div>Blog Details - {id} !</div>

      <Link to={`/blogs/${parseInt(id) + 1}`}>Next blog</Link>
      <br />
      <Link to="/blogs">blogs page</Link>
    </h2>
  );
};

export default Blog;
