import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
class ListUser extends React.Component {
  state = {
    listUser: []
  };
  async componentDidMount() {
    // axios.get('https://reqres.in/api/users?page=2').then(res => {
    //   console.log(res.data.data);
    // });
    let res = await axios.get('https://reqres.in/api/users');
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : []
    });
  }
  handleClickDetail = user => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="container-fluid mt-5">
        <ul className="list-group mx-auto align-items-center">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <li
                  className="list-group-item col-4 d-flex justify-center justify-content-between align-items-center "
                  key={item.id}
                >
                  <span className="badge rounded-pill bg-info text-dark me-2">
                    {index + 1}
                  </span>
                  {item.first_name} {item.last_name}
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.handleClickDetail(item)}
                  >
                    <FontAwesomeIcon icon={faInfo} className="me-2" />
                    Detail
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
export default withRouter(ListUser);
