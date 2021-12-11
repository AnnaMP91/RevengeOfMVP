import React from 'react';
import axios from 'axios';
import DogResult from './DogResult.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

class QuizForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSize: '',
      children: '',
      activity: '',
      experience: '',
      age: '',
      dogMatch: [],
      dogFound: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
    this.updateDogMatch = this.updateDogMatch.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  submitQuiz() {
    axios.get('/gimmeMyDog', {
      params: {
        homeSize: this.state.homeSize,
        children: this.state.children,
        activity: this.state.activity,
        age: this.state.age,
        experience: this.state.experience
      }
    })
      .then((response) => {
        console.log('success getting dog');
        this.setState({
          dogMatch: response.data,
          dogFound: true
        })
      })
      .catch((error) => {
        console.log('error getting dog');
      })
  }

  updateDogMatch(data) {
    this.setState({
      dogMatch: data
    })
  }

  render() {
    return (
      <Stack className="col-md-8 mx-auto">


        {this.state.dogFound ? <DogResult dogResult={this.state.dogMatch} /> :
          <div>
            <br />
            <p>What size is your home?</p>

            <Stack direction="horizontal" gap={3}>
              <input type="radio" id="homeSize" name="homeSize" value="small" onChange={this.handleChange} />
              <label htmlFor="homeSize">zillow almost can't legally call it a residence</label>

              <input type="radio" id="homeSize" name="homeSize" value="medium" onChange={this.handleChange} />
              <label htmlFor="homeSize">It's cozy but plenty</label>

              <input type="radio" id="homeSize" name="homeSize" value="large" onChange={this.handleChange} />
              <label htmlFor="homeSize">Is there someone living in my 8th bedroom?</label>
            </Stack>

            <br />
            <p>Do you have small children?</p>

            <Stack direction="horizontal" gap={2}>
              <input type="radio" id="children" name="children" value="children" onChange={this.handleChange} />
              <label htmlFor="children">There are tiny people underfoot</label>

              <input type="radio" id="children" name="children" value="pets" onChange={this.handleChange} />
              <label htmlFor="children">Only furry ones</label>

              <input type="radio" id="children" name="children" value="both" onChange={this.handleChange} />
              <label htmlFor="children">I have children of the bipedal and four legged varieties</label>

              <input type="radio" id="children" name="children" value="both" onChange={this.handleChange} />
              <label htmlFor="children">I am alone</label>
            </Stack>

            <br />
            <p>Describe your activity level</p>

            <Stack direction="horizontal" gap={2}>
              <input type="radio" id="activity" name="activity" value="inactive" onChange={this.handleChange} />
              <label htmlFor="activity">My couch and I are no longer seperate beings</label>

              <input type="radio" id="activity" name="activity" value="inactive" onChange={this.handleChange} />
              <label htmlFor="activity">I try to touch grass on the weekends</label>

              <input type="radio" id="activity" name="activity" value="active" onChange={this.handleChange} />
              <label htmlFor="activity">Kind of like the floor is lava but if you sit down you perish</label>
            </Stack>

            <br />
            <p>What life stage suits you?</p>

            <Stack direction="horizontal" gap={3}>
              <input type="radio" id="age" name="age" value="baby" onChange={this.handleChange} />
              <label htmlFor="age">Puppy</label>

              <input type="radio" id="age" name="age" value="young" onChange={this.handleChange} />
              <label htmlFor="age">Young</label>

              <input type="radio" id="age" name="age" value="adult" onChange={this.handleChange} />
              <label htmlFor="age">Adult</label>

              <input type="radio" id="age" name="age" value="senior" onChange={this.handleChange} />
              <label htmlFor="age">Senior</label>
            </Stack>

            <br />
            <p>Have you ever had a dog?</p>

            <Stack direction="horizontal" gap={3}>
              <input type="radio" id="experience" name="experience" value="inexperienced" onChange={this.handleChange} />
              <label htmlFor="experience">This is my first dog</label>

              <input type="radio" id="experience" name="experience" value="inexperienced" onChange={this.handleChange} />
              <label htmlFor="experience">I have had one/a handful of dogs</label>

              <input type="radio" id="experience" name="experience" value="experienced" onChange={this.handleChange} />
              <label htmlFor="experience">I have never existed without a dog</label>
            </Stack>
            <button onClick={this.submitQuiz} >Show me my dog!</button>
          </div>
        }

      </Stack>
    )
  }
}

export default QuizForm;