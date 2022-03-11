import React from "react";
import './hex.css';

class Hex extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return <div className="hexagon"></div>;
  }
}

export default Hex;
