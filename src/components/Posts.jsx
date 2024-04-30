// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function Post() {
//   const [post, setPost] = useState([]);

//   const getPost = () => {
//     axios
//       .get("http://localhost:8090/mypost")
//       .then((res) => setPost(res.data.message))
//       .then(() => console.log("data", post));
//     // console.log(res.data.message);
//   };
//   useEffect(() => {
//     getPost();
//   }, []);

//   <div className="m-auto ">
//     {post.map((data) => (
//       <>
//         <div style={{ width: "40%" }} className="card bg-light text-center">
//           <img src={`http://localhost:8090/${data.img}`} alt="Card image cap" />
//           <div className="card-body text-start">
//             <h3
//               className="card-title  mt-5  fw-bolder"
//               style={{ "text-transform": "capitalize" }}
//             >
//               {data.title}
//             </h3>
//             <p className="card-text fs-3">{data.description}</p>
//           </div>
//         </div>
//       </>
//     ))}
//   </div>;
// }

// export default Post;
