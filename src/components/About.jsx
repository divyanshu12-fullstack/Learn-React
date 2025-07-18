import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserClass name={"Divyanshu"} />
      </div>
    );
  }
}

export default About;
