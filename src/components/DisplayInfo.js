import React from "react";

class DisplayInfo extends React.Component {
  state = {
    showList: true,
  };

  handleShowHide = () => {
    this.setState({
      showList: !this.state.showList,
    });
  };

  render() {
    const { listUsers } = this.props;
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.showList ? "Hide list users" : "Show list users"}
          </span>
        </div>
        {this.state.showList && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age >= 18 ? "green" : "red"}>
                  <div>My name's: {user.name} </div>
                  <div>My age's: {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
