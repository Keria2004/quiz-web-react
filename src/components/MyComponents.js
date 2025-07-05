import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Son",
    address: "TPHCM",
    age: 21,
  };

  handleClick = (event) => {
    this.setState({
      name: "tieuBANG",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };

  handleOnMouseOver(event) {
    //console.log(event.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I {this.state.age}
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}

export default MyComponent;
