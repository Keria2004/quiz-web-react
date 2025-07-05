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

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    alert("me");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
