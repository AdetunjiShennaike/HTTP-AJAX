import React from 'react';

class UpdateForm extends React.Component {
  state = {
    friend: this.props.bestFriend || {
      name: '',
      age: '',
      email: '',
      // gender: '',
      // hobby: ''
    }
  };

  changeHandler = event => {
    event.persist();
    let value = event.target.value;
    if (event.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div>
        <h2>New Friend Acquired Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="Name"
            value={this.state.friend.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="Age"
            value={this.state.friend.age}
          />
          <div className="baseline" />

          <input
            type="email"
            name="email"
            onChange={this.changeHandler}
            placeholder="Email"
            value={this.state.friend.email}
          />
          <div className="baseline" />

          {/* <input
            type="string"
            name="gender"
            onChange={this.changeHandler}
            placeholder="gender"
            value={this.state.friend.gender}
          />
          <div className="baseline" />

          <input
            type="string"
            name="hobby"
            onChange={this.changeHandler}
            placeholder="Hobby"
            value={this.state.friend.Hobby}
          /> */}
          <div className="baseline" />

          <button className="md-button form-button">Add Friend</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;