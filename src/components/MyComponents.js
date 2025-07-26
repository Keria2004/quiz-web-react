import React, { useState } from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfo from "./DisplayInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Sơn", age: 21 },
//       { id: 2, name: "Băng", age: 16 },
//       { id: 3, name: "Tiểu", age: 50 },
//     ],
//   };

//   handleAddNewUser = (objUser) => {
//     // console.log(objUser);
//     this.setState({
//       listUsers: [objUser, ...this.state.listUsers],
//     });
//     // console.log(this.state.listUsers);
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <DisplayInfo
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Sơn", age: 21 },
    { id: 2, name: "Băng", age: 16 },
    { id: 3, name: "Tiểu", age: 50 },
  ]);

  const handleAddNewUser = (objUser) => {
    setListUsers([objUser, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    const updatedList = listUsers.filter((user) => user.id !== userId);
    setListUsers(updatedList);
  };

  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
