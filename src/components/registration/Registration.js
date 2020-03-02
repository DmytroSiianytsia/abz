import React, { Component } from 'react';
import './Registration.css';

class Registration extends Component {

  state = {
    token: null,
    formData: {
      name: '',
      email: '',
      phone: '',
      position_id: null
    },
    uploadPhoto: 'Upload your photo'
  };

  getToken = () => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(response => response.json())
      .then(data => this.setState({ token: data.token }))
      .catch(error => new Error(error));
  };

  handleChange = (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, position_id } = this.state.formData;
    const formData = new FormData();
    const fileField = document.querySelector('#customFile');

    formData.append('position_id', position_id);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('photo', fileField.files[0]);

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: {
        'Token': this.state.token,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        if (data.success) {
          this.props.getUsers();
          this.props.resetCountUsers();
        }
      })
      .catch(function (error) {
        console.error('Some error: ', error)
      });
  };

  getFileName = () => {
    if (document.querySelector('#customFile')) {     
      this.setState(
        {uploadPhoto: document.querySelector('#customFile').files[0].name}
        )
    }   
  }

  componentDidMount() {
    this.getToken()    
  }

  render() {    
    const { name, email, phone } = this.state.formData;
    const {scrollTo} = this.props;
    return (
      <div className="registration"  id="registration">
        <div className="container">
          <div className="registration__content">
            <div className="registration__title">
              Register to get a work
            </div>
            <div className="registration__subtitle">
              Attention! After successful registration and alert,
              update the list of users in the block from the top
            </div>

            <form className="needs-validated" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-control__label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  aria-describedby="nameHelp"
                  placeholder="Your name"
                  onChange={(e) => this.handleChange(e)}
                  required
                />               
                <label htmlFor="email" className="form-control__label">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  aria-describedby="emailHelp"
                  placeholder="Your email"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
                <label htmlFor="phone" className="form-control__label">Phone number</label>
                <input
                  className="form-control"
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  aria-describedby="phoneHelp"
                  placeholder="+380 XX XXX XX XX"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
                <small id="phoneHelp" className="form-text text-muted">
                  Еnter phone number in open format
                </small>
                <legend className="select-position">Select your position</legend>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input bg-primary"
                    type="radio"
                    id="customRadio1"
                    name="position_id"
                    value="1"
                    onChange={(e) => this.handleChange(e)}
                    required
                  />
                  <label className="custom-control-label text-dark" htmlFor="customRadio1">
                    Frontend developer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio2"
                    name="position_id"
                    value="2"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label className="custom-control-label text-dark" htmlFor="customRadio2">
                    Backend developer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio3"
                    name="position_id"
                    value="3"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label className="custom-control-label text-dark" htmlFor="customRadio3">
                    Designer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    className="custom-control-input"
                    type="radio"
                    id="customRadio4"
                    name="position_id"
                    value="4"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <label className="custom-control-label text-dark" htmlFor="customRadio4">
                    QA
                  </label>
                </div>
              </div>
              <div className="photo">Photo</div>
              <div className="custom-file custom-width">
                <input
                  className="custom-file-input uploadPhoto"
                  type="file"
                  id="customFile"
                  onChange={this.getFileName} 
                  required                
                />
                <label className="custom-file-label" htmlFor="customFile">{this.state.uploadPhoto}</label>
              </div>
              <div className="form__btn">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    scrollTo('users');                   
                  }}
                >
                  Sign up now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
