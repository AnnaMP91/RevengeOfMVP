import React from 'react';
import QuizForm from './QuizForm.jsx';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      this.state.quizButtonClicked ? <QuizForm /> :
        <Card style={{ width: '500px' }} className="text-center mx-auto">
          <div>
            <h1>Houndr</h1>
            <div>Are you in the market for a furry friend? Are you struggling to determine
            what kind of dog will best suit your lifestyle? We can help! Take the quiz below and we
            will find your match!
        </div>
            <Button variant="primary" onClick={this.swapButtonVal}>Start Quiz!</Button>
          </div>
        </Card>
    )
  }
}

export default App;