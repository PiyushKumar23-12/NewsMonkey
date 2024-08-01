// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
// import NewsItem from "./components/NewsItem";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="general"
                  pageSize={100}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="home"
                  pageSize={100}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="business"
                  pageSize={100}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="entertainment"
                  pageSize={100}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="health"
                  pageSize={100}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="science"
                  pageSize={100}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="sports"
                  pageSize={100}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="technology"
                  pageSize={100}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
