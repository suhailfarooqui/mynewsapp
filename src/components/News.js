import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  static defaultProps = {
    // country: "ru",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("hello i am a constructor from news component");
    this.state = {
      aaa: [],
      loading: false,
      page: 1,
      country: "tr",
      // totalResults:15
    };
  }

  async componentDidMount() {
    this.update()
  }

  async update (){
    console.log("next");
      this.setState({ loading: true });

      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=c50070b846ad46229aef1a4402fe8027&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        aaa: parsedData.articles,
        
        loading: false,
      });

  }

  next = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({
        page: this.state.page + 1,
      })
      this.update()
    }
  };
  previous = async () => {
    console.log("previous");
    this.setState({
      page: this.state.page + 1,
    })
    this.update()
    
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            News monkey top headlines:{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </h1>
          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.aaa.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      discription={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      published={element.publishedAt}
                      author={element.author}
                      source={element.source}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-around">
            <button
              type="button"
              disabled={this.state.page <= 1}
              className="btn btn-info"
              onClick={this.previous}
            >
              &larr;previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-info"
              onClick={this.next}
            >
              next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
