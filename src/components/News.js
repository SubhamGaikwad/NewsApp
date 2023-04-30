import React, { Component } from "react";
import NewsUpdate from "./NewsUpdate";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=06f777074461425c862c8b8b65e84fc9&page=1&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
  nextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=06f777074461425c862c8b8b65e84fc9&page={this.state.page+1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  previousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&language=en&category=${this.props.category}&apiKey=06f777074461425c862c8b8b65e84fc9&page={this.state.page-1}&pageSize=12`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.previousclick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.nextclick}
          >
            Next
          </button>
        </div>
        <h2 className="text-center">TOP HEADLINE</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles?.map((element) => {
            return (
              <div className="col-md-4">
                <NewsUpdate
                  title={element.title}
                  newsUrl={element.url}
                  // description={element.description}
                  imageUrl={element.urlToImage}
                  source={element.source.name}
                />
              </div>
            );
          })}
          {this.state.loading && <Spinner />}

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.previousclick}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.nextclick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
