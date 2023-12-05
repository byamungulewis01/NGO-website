import React, { useEffect, useState } from "react";
import axios from "../api";
import { useParams } from "react-router-dom";

function NewsShow() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Single Post - Glorious United";
    axios
      .get(`/posts/${id}`)
      .then((response) => {
         console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  var url = import.meta.env.VITE_API_STATIC_FILES_URL + "/uploads/";

  return (
    <>
      <section className="bg-100 d-flex justify-content-center">
        <div className="container">
          <div
            className="overflow-hidden mb-4"
            data-zanim-timeline="{}"
            data-zanim-trigger="scroll"
          >
            <h4 data-zanim-xs='{"delay":0.1}'>{post.title}</h4>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <div className="card mb-6">
                {" "}
                <img
                  className="card-img-top"
                  src={url + post.image}
                  alt="new image"
                />
                <div className="card-body p-5">
                  <p className="dropcap">
                  <div
                        dangerouslySetInnerHTML={{
                          __html: post.description,
                        }}
                      />
                  </p>

              
                </div>
              </div>
            
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsShow;
