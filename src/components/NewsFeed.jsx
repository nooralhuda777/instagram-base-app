import React, { useState } from "react";

const Newsfeed = ({ posts = [] }) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("date");
  const [page, setPage] = useState(1);

  const filteredPosts = posts.filter((post) => {
    return post.text.toLowerCase().includes(filter.toLowerCase());
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sort === "date") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "popularity") {
      return b.likes - a.likes;
    }
  });

  const paginatedPosts = sortedPosts.slice((page - 1) * 10, page * 10);

  return (
    <div>
      <h2>Newsfeed</h2>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by keyword"
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="date">Sort by date</option>
        <option value="popularity">Sort by popularity</option>
      </select>
      <ul>
        {paginatedPosts.map((post, index) => (
          <li key={index}>
            <div>
              <img src={post.image} alt={post.text} />
              <p>{post.text}</p>
              <button onClick={() => console.log("Like post")}>
                Like ({post.likes})
              </button>
              <button onClick={() => console.log("Comment on post")}>
                Comment ({post.comments})
              </button>
              <button onClick={() => console.log("Share post")}>Share</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)}>Previous page</button>
      <button onClick={() => setPage(page + 1)}>Next page</button>
    </div>
  );
};

export default Newsfeed;
