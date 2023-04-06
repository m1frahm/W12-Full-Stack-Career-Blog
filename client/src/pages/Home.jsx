import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "The Glass Is Always Half Full, Always",
      desc: "In the sphere of personal development, affirmations are positive statements, adjusted to the topic closest to our hearts that we are encouraged to...",
      img: "https://cdn.shopify.com/s/files/1/1186/0402/articles/4X5-IC-Blog-glass-full.jpg?v=1675083259&width=2560",
    },
    {
      id: 2,
      title: "Guide to Becoming a Morning Person",
      desc: "Our brains love routines. Here's a step-by-step guide of what you can do in the evening to prepare yourself for a good night sleep.",
      img: "https://cdn.shopify.com/s/files/1/1186/0402/articles/Screenshot_2021-03-24_at_13.17.57.png?v=1616604838&width=2560",
    },
    {
        id: 3,
        title: "How to Remap Your Career Path",
        desc: "Is who you are aligned with your professional path? Do the projects you work on excite you? Is the language you use to talk about your career posit...",
        img: "https://cdn.shopify.com/s/files/1/1186/0402/articles/Career-Path-Change-2.jpg?v=1649152988&width=2560",
      },
      {
        id: 4,
        title: "It’s a Good Day To Be Still",
        desc: "Stillness is a state of steadiness and inner quietude that allows you to act without frenzy regardless of what’s happening around you. Filtering the...",
        img: "https://cdn.shopify.com/s/files/1/1186/0402/articles/IC-BLOG-Be-Still-2.jpg?v=1678281533&width=2560",
      },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content"></div>
            <Link className="link" to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.desc}</p>
              <button>Click Here to View Full Article</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
