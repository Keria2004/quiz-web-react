import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { name, age } = this.props;
    console.log(this.props);
    return (
      <div>
        Display Info
        <div>My name is {name}</div>
        <div>My age is {age} </div>
      </div>
    );
  }
}

export default DisplayInfo;
