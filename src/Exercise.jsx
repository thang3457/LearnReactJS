import { useEffect, useState } from "react";
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
function Content() {
  const [title, setTitle] = useState("");
  const [post, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [gototop, setGoToTop] = useState(false);
  const [conutDowm, setCountDown] = useState(180);
  useEffect (() => {
   const count = setInterval(() => {
      setCountDown((prev)=>prev-1)
    },1000);

    return () => clearInterval(count)
  }, [])

  // UseEffect Dom
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //call API
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div>
      {console.log('sss', conutDowm)}
      <h1>{conutDowm}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {post.map((posts) => (
          <li key={posts.id}>{posts.title || posts.name}</li>
        ))}
      </ul>
      {gototop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          On Top
        </button>
      )}
    </div>
  );
}

export default Content;
