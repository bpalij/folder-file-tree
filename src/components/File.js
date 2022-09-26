import React from "react";

class File extends React.Component {
  render() {
    return <p>{this.props.data.name}</p>;
  }
}

export default File
