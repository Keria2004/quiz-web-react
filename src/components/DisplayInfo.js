import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

// stateless vs stateful

// class DisplayInfo extends React.Component {
//   render() {
//     const { listUsers } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
//                   <div>My name's: {user.name} </div>
//                   <div>My age's: {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <br />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  //Hook
  const [isShowHideListUsers, setShowHideListUser] = useState(true);

  const handleShowHideUser = () => {
    setShowHideListUser(!isShowHideListUsers);
  };

  console.log("call me render");

  useEffect(() => {
    setTimeout(() => {
      document.title = "Vo Huynh Son";
    }, 3000);
    console.log("call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideUser()}>
          {isShowHideListUsers === true ? "Hide List User" : "Show List User"}
        </span>
      </div>
      {isShowHideListUsers && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                <div>My name's: {user.name} </div>
                <div>My age's: {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
                <br />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
