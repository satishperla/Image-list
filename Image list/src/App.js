import "./App.css";

import SearchInput from "./components/SearchInput";

// function App() {
//   return (
//     <div className="ui container" style={{marginTop:'30px'}}>
//       <SearchInput></SearchInput>

//     </div>
//   );
// }
// export default App;

import React, { Component } from "react";
import axios from "axios";
import ImageList from "./components/ImageList";

export default class App extends Component {
  // async onSearchSubmit  (entry)  {

  //   // await axios.get(`https://pixabay.com/api/?key=33306981-199788f2177db7e306397585a&q=${entry}s&image_type=photo`)
  //   // console.log(entry);

  //   const response = await axios.get(`https://pixabay.com/api/?key=33306981-199788f2177db7e306397585a&q=${entry}s&image_type=photo`)
  //   console.log(response.data.hits);
  // };

  state = { image: [] };
  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=33306981-199788f2177db7e306397585a&q=${entry}s&image_type=photo`
    );
    console.log(this);
    this.setState({ image: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        We have {this.state.image.length} images
        <ImageList image={this.state.image}/>

      </div>
    );
  }
}
