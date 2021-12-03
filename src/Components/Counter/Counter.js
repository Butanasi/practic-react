import React, { Component } from 'react';
import style from './Counter.module.scss';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={style.Counter}>
        <span className={style.Couter__value}>{value}</span>

        <div className={style.Couter__controls}>
          <button
            type="button"
            className={style.Counter__button}
            onClick={this.increment}
          >
            +1
          </button>
          <button
            type="button"
            className={style.Counter__button}
            onClick={this.decrement}
          >
            -1
          </button>
        </div>
      </div>
    );
  }
}
