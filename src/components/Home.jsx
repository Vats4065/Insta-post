import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [post, setPost] = useState([]);
  const user = localStorage.getItem("login");
  const userData = JSON.parse(user);
  console.log("user", userData.user);

  const getPost = () => {
    axios
      .get("http://localhost:8080/allpost")
      .then((res) => setPost(res.data.message))
      .then(() => console.log("data", post));
    // console.log(res.data.message);
  };
  useEffect(() => {
    getPost();
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/delete/${id}`).then((res) => {
      alert("deleted");
      getPost();
    });
  };

  return (
    <>
      {/* <div className="w-60">
        <div className="card">
          <div className="card-img">
            <img
              src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg"
              alt="pug"
            />
          </div>
          <div className="card-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut
              saepe aliquid unde dolores distinctio?
            </p>
          </div>
        </div>
      </div> */}
      <div className="m-auto ">
        {/* {post.map((data) => (
          <>
            <div style={{ width: "40%" }} className="card bg-light text-center">
              <img
                src={`http://localhost:8090/${data.img}`}
                alt="Card image cap"
              />
              <div className="card-body text-start">
                <h3 className="card-title  mt-5  fw-bolder" style={{"text-transform":"capitalize"}}>{data.title}</h3>
                <p className="card-text fs-3">{data.description}</p>
                <p></p>
              </div>
            </div>
          </>
        ))} */}

        {post.map((data) => (
          <>
            <div
              style={{ width: "40%" }}
              className="card bg-light text-center"
              key={data}
            >
              <img
                src={`http://localhost:8080/${data.img}`}
                alt="Card image cap"
              />
              <div className="card-body text-start">
                <h3
                  className="card-title  mt-5  fw-bolder"
                  style={{ "text-transform": "capitalize" }}
                >
                  {data.title}
                </h3>
                <p className="card-text fs-3">{data.description}</p>
                <p className="card-text fs-3">
                  Postby: {data?.creator?.username}
                </p>
                {userData.user.username === data?.creator?.username ? (
                  <>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleDelete(data._id)}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
