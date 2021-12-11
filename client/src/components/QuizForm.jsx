import React from 'react';
import axios from 'axios';
import DogResult from './DogResult.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

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
      <Form className="col-md-8 mx-auto">


        {this.state.dogFound ? <DogResult dogResult={this.state.dogMatch} /> :
          <>
            <Form.Group className="mb-3 border">
              <Form.Label className="fw-bold">What size is your home?</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="zillow almost can't legally call it a residence"
                  name="homeSize"
                  value="small"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="It's cozy but plenty"
                  name="homeSize"
                  value="medium"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Is there someone living in my 8th bedroom?"
                  name="homeSize"
                  value="large"
                  type="radio" />

              </div>
            </Form.Group>

            <Form.Group className="mb-3 border">
              <Form.Label className="fw-bold" >Do you have small children?</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="There are tiny people underfoot"
                  name="children"
                  value="children"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Only furry ones"
                  name="children"
                  value="pets"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="I have children of the bipedal and four legged varieties"
                  name="children"
                  value="both"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="I am alone"
                  name="children"
                  value="both"
                  type="radio" />


              </div>
            </Form.Group>

            <Form.Group className="mb-3 border">
              <Form.Label className="fw-bold">Describe your activity level</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="My couch and I are no longer seperate beings"
                  name="activity"
                  value="inactive"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="I try to touch grass on the weekends"
                  name="activity"
                  value="inactive"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Kind of like the floor is lava but if you sit down you perish"
                  name="activity"
                  value="active"
                  type="radio" />

              </div>
            </Form.Group>

            <Form.Group className="mb-3 border">
              <Form.Label className="fw-bold">What life stage suits you?</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Puppy"
                  name="age"
                  value="baby"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Young"
                  name="age"
                  value="young"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Adult"
                  name="age"
                  value="adult"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="Senior"
                  name="age"
                  value="senior"
                  type="radio" />

              </div>
            </Form.Group>

            <Form.Group className="mb-3 border">
              <Form.Label className="fw-bold">Have you ever had a dog?</Form.Label>
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="This is my first dog"
                  name="experience"
                  value="inexperienced"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="I have had one/a handful of dogs"
                  name="experience"
                  value="inexperienced"
                  type="radio" />

                <Form.Check
                  inline
                  onChange={this.handleChange}
                  label="I have never existed without a dog"
                  name="experience"
                  value="experienced"
                  type="radio" />

              </div>
            </Form.Group>



            <Button variant="primary" onClick={this.submitQuiz} >Show me my dog!</Button>




          </>}
        {/* // <div>
          //   <br />
          //   <p>What size is your home?</p>

          //   <Form direction="horizontal" gap={3}>
            //     <input type="radio" id="homeSize" name="homeSize" value="small" onChange={this.handleChange} />
          //     <label htmlFor="homeSize">zillow almost can't legally call it a residence</label>

          //     <input type="radio" id="homeSize" name="homeSize" value="medium" onChange={this.handleChange} />
          //     <label htmlFor="homeSize">It's cozy but plenty</label>

          //     <input type="radio" id="homeSize" name="homeSize" value="large" onChange={this.handleChange} />
          //     <label htmlFor="homeSize">Is there someone living in my 8th bedroom?</label>
          //   </Form>

          //   <br />
          //   <p>Do you have small children?</p>

          //   <Form direction="horizontal" gap={2}>
            //     <input type="radio" id="children" name="children" value="children" onChange={this.handleChange} />
          //     <label htmlFor="children">There are tiny people underfoot</label>

          //     <input type="radio" id="children" name="children" value="pets" onChange={this.handleChange} />
          //     <label htmlFor="children">Only furry ones</label>

          //     <input type="radio" id="children" name="children" value="both" onChange={this.handleChange} />
          //     <label htmlFor="children">I have children of the bipedal and four legged varieties</label>

          //     <input type="radio" id="children" name="children" value="both" onChange={this.handleChange} />
          //     <label htmlFor="children">I am alone</label>
          //   </Form>

          //   <br />
          //   <p>Describe your activity level</p>

          //   <Form direction="horizontal" gap={2}>
            //     <input type="radio" id="activity" name="activity" value="inactive" onChange={this.handleChange} />
          //     <label htmlFor="activity">My couch and I are no longer seperate beings</label>

          //     <input type="radio" id="activity" name="activity" value="inactive" onChange={this.handleChange} />
          //     <label htmlFor="activity">I try to touch grass on the weekends</label>

          //     <input type="radio" id="activity" name="activity" value="active" onChange={this.handleChange} />
          //     <label htmlFor="activity">Kind of like the floor is lava but if you sit down you perish</label>
          //   </Form>

          //   <br />
          //   <p>What life stage suits you?</p>

          //   <Form direction="horizontal" gap={3}>
            //     <input type="radio" id="age" name="age" value="baby" onChange={this.handleChange} />
          //     <label htmlFor="age">Puppy</label>

          //     <input type="radio" id="age" name="age" value="young" onChange={this.handleChange} />
          //     <label htmlFor="age">Young</label>

          //     <input type="radio" id="age" name="age" value="adult" onChange={this.handleChange} />
          //     <label htmlFor="age">Adult</label>

          //     <input type="radio" id="age" name="age" value="senior" onChange={this.handleChange} />
          //     <label htmlFor="age">Senior</label>
          //   </Form>

          //   <br />
          //   <p>Have you ever had a dog?</p>

          //   <Form direction="horizontal" gap={3}>
            //     <input type="radio" id="experience" name="experience" value="inexperienced" onChange={this.handleChange} />
          //     <label htmlFor="experience">This is my first dog</label>

          //     <input type="radio" id="experience" name="experience" value="inexperienced" onChange={this.handleChange} />
          //     <label htmlFor="experience">I have had one/a handful of dogs</label>

          //     <input type="radio" id="experience" name="experience" value="experienced" onChange={this.handleChange} />
          //     <label htmlFor="experience">I have never existed without a dog</label>
          //   </Form>
          //   <Button variant="primary" onClick={this.submitQuiz} >Show me my dog!</Button>
          // </div>
        } */}

      </Form>
    )
  }
}

export default QuizForm;