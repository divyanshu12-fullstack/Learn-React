import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/divyanshu12-fullstack"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: divyanshudwivedi1290@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
