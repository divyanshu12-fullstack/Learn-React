import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/divyanshu12-fullstack"
    );
    const json = data.json();
    console.log(json);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Lucknow</h3>
        <h3>Contact: divyanshudwivedi1290@gmail.com</h3>
      </div>
    );
  }
}
export default UserClass;
