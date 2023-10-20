import React from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Buttons/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddFeedback = name => {
    // console.log(name);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  // handleAddGoodFeedback = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };

  // handleAddNeutralFeedback = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };

  // handleAddBadFeedback = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  handlecountPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.handleTotalFeedback()) * 100 || 0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={data => this.handleAddFeedback(data)}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.handleTotalFeedback()}
          positivePercentage={this.handlecountPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
