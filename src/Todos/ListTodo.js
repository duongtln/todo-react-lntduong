import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import AddTodo from './AddTodo';

export default class ListTodo extends React.Component {
  state = {
    listTodos: [],
    editTodo: {}
  };
  componentDidMount() {
    axios
      .get('https://613c8373270b96001798b17a.mockapi.io/api/v1/todo')
      .then(res => {
        const items = res.data;
        this.setState({
          listTodos: items
        });
      });
  }
  addNewTodo = todo => {
    this.setState({
      listTodos: [...this.state.listTodos, todo]
    });
    toast.success('Add ' + todo.title + ' todo');
  };
  handleDeteleTodo = todo => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter(item => item.id !== todo.id);
    this.setState({
      listTodos: currentTodo
    });
    toast.success('Deleted ' + todo.title + '  todo!');
  };
  handleClickEditTodo = todo => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;

    //Click Save
    if (!isEmptyObject && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {}
      });
      toast.success('Edit ' + todo.title + '  successfully!');
      return;
    }
    //Click Edit
    this.setState({
      editTodo: todo
    });
  };
  handleChangeEditTodo = event => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container container-fluid mt-5">
        <AddTodo addNewTodo={this.addNewTodo} />
        <ul className="list-group list-todo-content mx-auto align-items-center">
          {listTodos.map((item, index) => {
            return (
              <li
                className="list-group-item todo-child col-8 d-flex justify-center justify-content-between align-items-center "
                key={item.id}
              >
                <span>
                  <span className="badge rounded-pill bg-info text-dark me-2">
                    {index + 1}
                  </span>
                  {isEmptyObject ? (
                    <span>{item.title}</span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <input
                          type="text"
                          className="form-control d-inline-block w-auto"
                          value={editTodo.title}
                          onChange={event => this.handleChangeEditTodo(event)}
                        />
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </>
                  )}
                </span>
                <span className="action-btn">
                  <button
                    className="btn btn-primary me-3"
                    onClick={() => this.handleClickEditTodo(item)}
                  >
                    <FontAwesomeIcon icon={faEdit} className="me-2" />
                    {!isEmptyObject && editTodo.id === item.id
                      ? 'Save'
                      : 'Edit'}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeteleTodo(item)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
                    Delete
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
