import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Son",
    address: "TPHCM",
    age: 21,
  };

  hanleClick(event) {
    //console.log("Click me");
    console.log("My name is", this.state.name); // => lỗi
  }

  handleOnMouseOver(event) {
    //console.log(event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I from {this.state.address}
        <button onClick={this.hanleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
