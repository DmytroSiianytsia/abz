import React, {Component} from 'react';
import './Registration.css';

class Registration extends Component {
    state = {
        token: null,
        formData: {
            name: '',
            email: '',
            phone: '',
            position_id: null,
            photo: ''
        }
    };

    getToken = () => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(response => response.json())
            .then(data => this.setState({token: data.token}))
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

    handleLoad = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                photo: e.target.value
            }
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    postForm = (e) => {
        e.preventDefault();
        console.log('formData: ', this.state.formData);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: JSON.stringify(this.state.formData),
            headers: {
                'Token': this.state.token,
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                    // process success response
                } else {
                    // proccess server errors
                }
            })
            .catch(function (error) {
                // proccess network errors
            });
    };

    componentDidMount() {
        this.getToken()
    }

    render() {
        const {name, email, phone} = this.state;
        return (
            <div className="registration">
                <div className="container">
                    <div className="registration__content">
                        <div className="registration__title">
                            Register to get a work
                        </div>
                        <div className="registration__subtitle">
                            Attention! After successful registration and alert,
                            update the list of users in the block from the top
                        </div>

                        <form onSubmit={this.postForm}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-control__label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={name}
                                    aria-describedby="nameHelp"
                                    placeholder="Your name"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label htmlFor="email" className="form-control__label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    aria-describedby="emailHelp"
                                    placeholder="Your email"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <label htmlFor="phone" className="form-control__label">Phone number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    aria-describedby="phoneHelp"
                                    placeholder="+380 XX XXX XX XX"
                                    onChange={(e) => this.handleChange(e)}
                                />
                                <small id="phoneHelp" className="form-text text-muted">
                                    Еnter phone number in open format
                                </small>
                                <legend className="select-position">Select your position</legend>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio1"
                                        name="position_id"
                                        value="1"
                                        className="custom-control-input"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio1">
                                        Frontend developer
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio2"
                                        name="position_id"
                                        value="2"
                                        className="custom-control-input"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio2">
                                        Backend developer
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio3"
                                        name="position_id"
                                        value="3"
                                        className="custom-control-input"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio3">
                                        Designer
                                    </label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        id="customRadio4"
                                        name="position_id"
                                        value="4"
                                        className="custom-control-input"
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                    <label className="custom-control-label" htmlFor="customRadio4">
                                        QA
                                    </label>
                                </div>
                            </div>
                            <div className="photo">Photo</div>
                            <div className="custom-file custom-width">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFile"
                                    value={this.state.photo}
                                    onChange={(e) => this.handleLoad(e)}
                                />
                                <label className="custom-file-label" htmlFor="customFile">Upload your photo</label>
                            </div>
                            <div className="form__btn">
                                <button type="submit" className="btn btn-primary">Sign up now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;
