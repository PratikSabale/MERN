import React from "react";

class ClassParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((previousCount) => ({
      count: previousCount.count + 1,
    }));
  };

  decreaseCount = () => {
    this.setState((previousCount) => ({
      count: previousCount.count - 1,
    }));
  };

  resetCount = () => {
    this.setState((previousCount) => ({
      count: 0,
    }));
  };
  render() {
    return (
      <div>
        <div>Class Components</div>
        <div>{this.state.count}</div>
        <div>
          <button
            className="border border-gray-700 px-5 mx-2"
            onClick={this.incrementCount}
          >
            Increase Count
          </button>
          <button
            className="border border-gray-700 px-5"
            onClick={this.decreaseCount}
          >
            Decrease Count
          </button>
          <button
            className="border border-gray-700 px-5  mx-2"
            onClick={this.resetCount}
          >
            Reset Count
          </button>
        </div>
      </div>
    );
  }
}

export default ClassParent;
