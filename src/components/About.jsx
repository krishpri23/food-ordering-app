import { Component } from "react";
import UserClass from "./UserClass";

class AboutUs extends Component {
  constructor() {
    super();
    console.log("Parent const");
  }

  componentDidMount() {
    console.log("Parent did mount ");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h2> About Page</h2>
        <UserClass name="Krishnapriya" />
        <UserClass name="Shamanthan" />
      </div>
    );
  }
}

export default AboutUs;
