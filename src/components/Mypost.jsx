import React, { useEffect, useState } from "react";
import axios from "axios";
// import Post from "./Posts";
// import { addpost } from "../../../Backend/controller/post.controller";

function Mypost() {
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [description, setDesc] = useState();

  const handleAdd = () => {
    const user = JSON.parse(localStorage.getItem("login"));
    const formData = new FormData();
    formData.append("image", img);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("creator", user?.user?._id);

    axios
      .post("http://localhost:8080/addpost", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          
        },
        
      })
      .then((res) => console.log("res,", res.data))
      .catch((err) => console.log(err));
  };
  
  const [post, setPost] = useState([]);
  const getPost = () => {
    const id = localStorage.getItem("login");
    const objId = JSON.parse(id);
    const userId = objId.user._id;
    console.log("srjkvvg ", userId);

    axios.get(`http://localhost:8080/mypost/${userId}`).then((res) => {
      setPost(res.data.data);
      console.log("post", post);
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/delete/${id}`).then((res) => {
      alert("deleted");
      getPost();
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  const fileChange = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <>
      <div className="w-50 m-auto mt-5">
        <form
          className="border px-4 py-5 border-2 shadow"
          encType="multipart/form-data"
          onSubmit={handleAdd}
        >
          <div className="title text-center">
            <h3 className="mb-3">Add Post</h3>
          </div>
          <div className="form-group mb-4">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group mb-4">
            <label>Descriptions</label>
            <textarea
              className="form-control"
              placeholder="enter Description"
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Image</label>
            <input
              type="file"
              className="form-control"
              placeholder="upload image"
              // value={img}
              accept="image/*"
              onChange={fileChange}
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>

      <section className="posts mt-5">
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
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleDelete(data._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}

export default Mypost;
