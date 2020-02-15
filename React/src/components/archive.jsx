import React from "react";

export default function ArchiveComponent(props) {
  return (
    <React.Fragment>
      <a href="#" style={{ color: "black", textDecoration: "none" }}>
        <div className="row">
          <div className="col-md-7">
            <img
              className="img-fluid rounded mb-3 mb-md-0"
              src="http://placehold.it/700x300"
              alt=""
            />
          </div>
          <div className="col-md-5">
            <h3>Project One</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium veniam exercitationem expedita laborum at voluptate.
              Labore, voluptates totam at aut nemo deserunt rem magni pariatur
              quos perspiciatis atque eveniet unde.
            </p>
          </div>
        </div>
        <hr />
      </a>
    </React.Fragment>
  );
}
