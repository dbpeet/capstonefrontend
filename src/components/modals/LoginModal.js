import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';


class LoginModal extends Component {
  state = {
    show: false,
    email: '',
    password: '',
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  clearModal = () => {
    const modal = document.getElementById('loginModal');
    const body = document.querySelector('.modal-open');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    modal.classList.remove('show');
    modal.style.display = 'none';
    modal.removeAttribute('aria-modal');
    modal.setAttribute('aria-hidden', true);
    body.classList.remove('modal-open');
    modalBackdrop.parentNode.removeChild(modalBackdrop);
  };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = this.state;
    console.log('Login Submit - ', this.state);
    axios.post(`${API_URL}/auth/login`, userInfo, { withCredentials: true })
      .then(res => {
        console.log(res);
        this.props.setCurrentUser(res.data.id);
        this.props.history.push('/cities');
        this.clearModal();
      })
      .catch(err => {
        console.log(err);
      });
  };

  showModal = () => {
    this.setState({ show: true });
  };



  render() {
    return (
      <>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">Log in</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <section id="login" className="col-md-12">
                    {this.state.error}
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control form-control-lg" type="email" id="login-email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="example@example.com" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control form-control-lg" type="password" id="login-password" name="password" value={this.state.password} onChange={this.handleChange} />
                      </div>
                      <button type="submit" className="btn btn-primary float-right">Login</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
};


export default LoginModal;

