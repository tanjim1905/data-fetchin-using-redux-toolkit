import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts);
  return (
    <div>
      {isLoading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
      {posts &&
        posts.map((post) => {
          const { title, body } = post;
          return (
            <div>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
