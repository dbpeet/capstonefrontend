import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class SignupModal extends Component {
  state = {
    show: false,
    username: '',
    email: '',
    home_city: '',
    password: '',
    password2: '',
    errors: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearModal = () => {
    const modal = document.getElementById('signupModal');
    const body = document.querySelector('.modal-open');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    modal.classList.remove('show');
    modal.style.display = 'none';
    modal.removeAttribute('aria-modal');
    modal.setAttribute('aria-hidden', true);
    body.classList.remove('modal-open');
    modalBackdrop.parentNode.removeChild(modalBackdrop);
  };


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register Submit - ', this.state);
    const newUser = this.state;
    axios.post(`${API_URL}/auth/register`, newUser)
      .catch(err => {
      console.log(err.response);
      })
      .then(res => {
        console.log(res);
        this.props.history.push('/login');
        this.clearModal();
      });
  };

  render() {
    return (
      <>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalScrollableTitle">Sign Up</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <section id="register" className="col-md-12">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="username" id="username" name="username" value={this.state.username} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="homeCity">Current City</label>
                      <input type="homeCity" id="homeCity" name="homeCity" value={this.state.homeCity} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password2">Confirm Password</label>
                      <input type="password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange} className="form-control form-control-lg" />
                    </div>
                    <button type="submit" className="btn btn-primary float-right">Register</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
};


export default SignupModal;




