import React, { Component } from "react";

export class NewsUpdate extends Component {
  render() {
    let { title, imageUrl, newsUrl, source, author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "22rem" }}>
          <div className="card-header bg-warning">{source}</div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            height="200px"
          />
          <div className="card-body">
            <div style={{ height: "100px" }}>
              <h5 className="card-title">{title}</h5>
              {/* <p className="card-text">{description}...</p> */}
            </div>
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary">
              READ MORE
            </a>
          </div>
          <div className="card-footer-text-success ">
            <b title="source Title">By:{!author ? source : author}</b>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
