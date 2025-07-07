import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Sơn", age: 21 },
      { id: 2, name: "Băng", age: 16 },
      { id: 3, name: "Tiểu", age: 50 },
    ],
  };

  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
