import React from 'react';
import { getCurrent } from './utils';

class Demo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {
    this.setState({
      value: this.state.value + Math.floor(Math.random() * 100),
    });
  }

  render() {
    const { value } = this.state;
    const renderTime = getCurrent();
    return (
      <div>
        <p>hello current value is {value}</p>
        <button onClick={this.handleChange}>click me to change.</button>
        <p>last render time is {renderTime}</p>
      </div>
    )
  }
}

export default Demo1;