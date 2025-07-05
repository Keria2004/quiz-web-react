import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  render() {
    const myAge = 50;
    return (
      <div>
        <UserInfo></UserInfo>
        <br />
        <br />
        <DisplayInfo name="Tieu Bang" age="22"></DisplayInfo>
        <hr></hr>
        <DisplayInfo name="Tieu Ban" age={myAge}></DisplayInfo>
      </div>
    );
  }
}

export default MyComponent;
