import React from "react";

export default function Header(props) {
  const isAuthenticated = props.isAuthenticated;
  return (
    <React.Fragment>
      <header className="blog-header py-3 fixed-top">
        <div className="row flex-nowrap justify-content-between align-items-center">
          {/* <div className="col-4 pt-1">
            <a className="text-muted" href="#">
              Subscribe
            </a>
          </div> */}
          <div className="col-2 col-sm-4 mx-auto text-right">
            {isAuthenticated ? (
              <a className="blog-header-logo text-dark" href="/admin/">
                Believe
              </a>
            ) : (
              <a className="blog-header-logo text-dark" href="/">
                Believe
              </a>
            )}
          </div>
          <div className="col-9 col-sm-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>

            {!isAuthenticated ? (
              <React.Fragment>
                <a
                  href="/admin/"
                  className="btn btn-sm btn-outline-secondary mr-1"
                >
                  Admin
                </a>
                <a
                  className="btn btn-sm btn-outline-secondary mr-1"
                  href="/archive/"
                >
                  Archive
                </a>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button
                  className="btn btn-sm btn-outline-secondary mr-1"
                  onClick={props.logout}
                >
                  Logout
                </button>
                <a
                  className="btn btn-sm btn-outline-secondary mr-1"
                  href="/add/"
                >
                  Add
                </a>
              </React.Fragment>
            )}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
