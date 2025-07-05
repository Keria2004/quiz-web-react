import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Son",
    address: "TPHCM",
    age: 21,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
