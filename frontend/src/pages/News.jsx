import React, { useEffect, useState } from "react";
import axios from "../api";
import Loading from "../Loading";
import { Link } from "react-router-dom";

function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "News - Glorious United";
    axios
      .get("/posts")
      .then((response) => {
        // console.log(response.data);
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  var url = import.meta.env.VITE_API_STATIC_FILES_URL + "/uploads/";

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let formattedDate = date.toLocaleDateString("en-US", options);
    // Convert the entire formatted date to uppercase
    formattedDate = formattedDate.toUpperCase();
    return formattedDate;
  };

  if (loading) {
    return <Loading />;
  }
  // function truncateDescription(description, maxLength) {
  //   return description.length > maxLength
  //     ? `${description.slice(0, maxLength)}...`
  //     : description;
  // }
  return (
    <section className="bg-100">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="fs-2 fs-md-3">Latest News</h3>
          <hr
            className="short"
            data-zanim-xs='{"from":{"opacity":0,"width":0},"to":{"opacity":1,"width":"4.20873rem"},"duration":0.8}'
            data-zanim-trigger="scroll"
          />
        </div>
        <div className="row g-4">
          {posts.map((post, i) => (
            <div className="col-md-6 col-lg-4" key={post.id}>
              <div className="card">
                <Link to={`/news/show/${post.id}`}>
                  <img
                    className="card-img-top"
                    src={url + post.image}
                    alt="Featured Image"
                  />
                </Link>
                <div
                  className="card-body"
                  data-zanim-timeline="{}"
                  data-zanim-trigger="scroll"
                >
                  <div className="overflow-hidden">
                    <Link to={`/news/show/${post.id}`}>
                      <h5 data-zanim-xs='{"delay":0}'>{post.title}</h5>
                    </Link>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-400" data-zanim-xs='{"delay":0.1}'>
                      {formatDate(post.created_at)}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <p className="mt-3" data-zanim-xs='{"delay":0.2}'>
                      {post.short_description}
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <div
                      className="d-inline-block"
                      data-zanim-xs='{"delay":0.3}'
                    >
                      <Link
                        className="d-flex align-items-center"
                        to={`/news/show/${post.id}`}
                      >
                        Learn More
                        <div
                          className="overflow-hidden ms-2"
                          data-zanim-xs='{"from":{"opacity":0,"x":-30},"to":{"opacity":1,"x":0},"delay":0.8}'
                        >
                          <span className="d-inline-block fw-medium">⟶</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="row">
          <div className="col-auto mx-auto mt-4">
            <nav className="mt-5" aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <a className="page-link lh-sm" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link lh-sm" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link lh-sm" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link lh-sm" href="#!">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link lh-sm" href="#!">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link lh-sm" href="#!" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default News;
