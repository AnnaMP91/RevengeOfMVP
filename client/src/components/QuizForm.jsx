import React from 'react';
import axios from 'axios';

class QuizForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeSize: '',
      children: '',
      activity: '',
      job: '',
      experience: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitQuiz = this.submitQuiz.bind(this);
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
        job: this.state.job,
        experience: this.state.experience
      }
    })
      .then(function (response) {
        console.log('quiz submitted successfully: ', response);
      })
      .catch(function (error) {
        console.log('error submitting quiz: ', error);
      });
  }

  render() {
    return (
      <div>
        <p>What size is your home?</p>

        <div>
          <input type="radio" id="homeSize" name="homeSize" value="small" onChange={this.handleChange} />
          <label htmlFor="homeSize">zillow almost can't legally call it a residence</label>

          <input type="radio" id="homeSize" name="homeSize" value="medium" onChange={this.handleChange} />
          <label htmlFor="homeSize">It's cozy but plenty</label>

          <input type="radio" id="homeSize" name="homeSize" value="large" onChange={this.handleChange} />
          <label htmlFor="homeSize">Is there someone living in my 8th bedroom?</label>
        </div>

        <p>Do you have small children?</p>

        <div>
          <input type="radio" id="children" name="children" value="children" onChange={this.handleChange} />
          <label htmlFor="children">There are tiny people underfoot</label>

          <input type="radio" id="children" name="children" value="other pets" onChange={this.handleChange} />
          <label htmlFor="children">Only furry ones</label>

          <input type="radio" id="children" name="children" value="both" onChange={this.handleChange} />
          <label htmlFor="children">I have children of the bipedal and four legged varieties</label>

          <input type="radio" id="children" name="children" value="neither" onChange={this.handleChange} />
          <label htmlFor="children">I am alone</label>
        </div>

        <p>Describe your activity level</p>

        <div>
          <input type="radio" id="activity" name="activity" value="inactive" onChange={this.handleChange} />
          <label htmlFor="activity">My couch and I are no longer seperate beings</label>

          <input type="radio" id="activity" name="activity" value="moderatelyActive" onChange={this.handleChange} />
          <label htmlFor="activity">I try to touch grass on the weekends</label>

          <input type="radio" id="activity" name="activity" value="veryActive" onChange={this.handleChange} />
          <label htmlFor="activity">Kind of like the floor is lava but if you sit down you perish</label>
        </div>

        <p>Do you want a dog that can do a job?</p>

        <div>
          <input type="radio" id="job" name="job" value="no" onChange={this.handleChange} />
          <label htmlFor="job">I don't want to work so I shouldn't expect my dog to</label>

          <input type="radio" id="job" name="job" value="yes" onChange={this.handleChange} />
          <label htmlFor="job">My dog is going to pay my bills</label>
        </div>

        <p>Have you ever had a dog?</p>

        <div>
          <input type="radio" id="experience" name="experience" value="inexperienced" onChange={this.handleChange} />
          <label htmlFor="experience">This is my first dog</label>

          <input type="radio" id="experience" name="experience" value="moderatelyExperienced" onChange={this.handleChange} />
          <label htmlFor="experience">I have had one/a handful of dogs</label>

          <input type="radio" id="experience" name="experience" value="experienced" onChange={this.handleChange} />
          <label htmlFor="experience">I have never existed without a dog</label>
        </div>
        <button onClick={this.submitQuiz} >Show me my dog!</button>
      </div>
    )
  }
}

export default QuizForm;