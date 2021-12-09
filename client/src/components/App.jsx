import React from 'react';
import QuizForm from './QuizForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizButtonClicked: false
    }
    this.swapButtonVal = this.swapButtonVal.bind(this);
  }

  swapButtonVal() {
    this.setState({
      quizButtonClicked: true
    })
  }

  render() {
    return (
      <div>


        {this.state.quizButtonClicked ? <QuizForm /> :
          <div>
            <div>Are you in the market for a furry friend? Are you struggling to determine
            what kind of dog will best suit your lifestyle? We can help! Take the quiz below and we
            will choose one for you!
        </div>
            <button onClick={this.swapButtonVal}>Start Quiz!</button>
          </div>}

      </div>
    )
  }
}

export default App;