import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AddTodo extends React.Component {
  state = {
    title: ''
  };

  handleAddTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleClickAdd = () => {
    if (!this.state.title) {
      toast.error('Missing title!');
      return;
    }
    this.props.addNewTodo({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title
    });
    this.setState({
      title: ''
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo col-8 mx-auto">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Do something"
            aria-label="Do something"
            aria-describedby="button-addon2"
            value={title}
            onChange={event => this.handleAddTitle(event)}
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={() => this.handleClickAdd()}
          >
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            Add
          </button>
          <ToastContainer />
        </div>
      </div>
    );
  }
}
