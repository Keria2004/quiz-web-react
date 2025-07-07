import React from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Sơn", age: 21 },
      { id: 2, name: "Băng", age: 16 },
      { id: 3, name: "Tiểu", age: 50 },
    ],
  };

  handleAddNewUser = (objUser) => {
    console.log(objUser);
    this.setState({
      listUsers: [objUser, ...this.state.listUsers],
    });
    console.log(this.state.listUsers);
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
