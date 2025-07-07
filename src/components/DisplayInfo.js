import React from "react";

class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div>
        Display Info
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name's: {user.name} </div>
              <div>My age's: {user.age}</div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfo;
