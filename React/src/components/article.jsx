import React from "react";
import { Helmet } from "react-helmet";

export default function ArticleComponent(props) {
  const item = props.item || [];
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{item.title}</title>
        <meta name="description" content={item.subtitle} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="believe, beliefs, believed, belief, Persona, character, morals, moral
            health belief model, belief synonym, 	define belief, belief system, this i believe,
            i want to believe, 	i believe in a thing called love, believe in yourself"
        />
      </Helmet>
      <div className="mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h1>{item.title}</h1>
            </div>
            <div className="col-md-8 mx-auto">
              <img
                src={item.image_url}
                alt={item.title}
                className="img-thumbnail"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-6 mx-auto">
              <p className="pt-3">{item.content}</p>
            </div>
          </div>
          {props.isAdmin && (
            <div className="text-center">
              <a
                href={`/edit/${item.id}/`}
                className="btn btn-warning btn-sm mr-1 my-1"
              >
                update
              </a>
              {!item.archive && (
                <button className="btn btn-danger btn-sm mr-1 my-1">
                  archive
                </button>
              )}
              {item.draft && (
                <button
                  onClick={props.OnPublish}
                  className="btn btn-success btn-sm mr-1 my-1"
                >
                  publish
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
