import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // super() refers to the parent class ie. React component
    super(props);
    //initialize state inside constructor. It is a huge object where it stores all the state variables as objs
    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(`${this.props.name}  constructor`);
  }

  // All children will be batched together and updated to dom in commit phase
  componentDidMount() {
    console.log(`${this.props.name}  did mount`);
  }

  render() {
    console.log(`${this.props.name}  render`);
    return (
      <div>
        <h3> Hello {this.props.name} from class Components </h3>
      </div>
    );
  }
}

export default UserClass;
