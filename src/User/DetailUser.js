import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class DetailUser extends React.Component {
  state = {
    user: {}
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {}
      });
    }
  }
  handleBack = () => {
    this.props.history.push('/user');
  };
  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;
    return (
      <div className="container-fluid mt-5">
        <div className="list-group mx-auto align-items-center">
          {!isEmptyObject && (
            <>
              <div class="card card-user">
                <img src={user.avatar} class="card-img-top" alt="avatar" />
                <div class="card-body">
                  <h5 class="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p class="card-text">{user.email}</p>
                  <button
                    class="btn btn-primary"
                    onClick={() => this.handleBack()}
                  >
                    Back
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(DetailUser);
