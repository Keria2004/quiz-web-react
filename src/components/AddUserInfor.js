import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     address: "TPHCM",
//     age: "",
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {/* I am child My name is {this.state.name} and I {this.state.age} */}
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <label>Your name </label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => {
//               this.handleOnChangeName(event);
//             }}
//           ></input>
//           <br />
//           <label>Your age </label>
//           <input
//             type="text"
//             value={this.state.age}
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "TPHCM",
    age: "",
  });

  const handleOnChangeName = (event) => {
    setUserInfo({
      ...userInfo,
      name: event.target.value,
    });
  };

  const handleOnChangeAge = (event) => {
    setUserInfo({
      ...userInfo,
      age: event.target.value,
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: userInfo.name,
      age: userInfo.age,
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Your name </label>
        <input
          type="text"
          value={userInfo.name}
          onChange={handleOnChangeName}
        />
        <br />
        <label>Your age </label>
        <input type="text" value={userInfo.age} onChange={handleOnChangeAge} />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfo;
