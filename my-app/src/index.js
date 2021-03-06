import React from 'react';
import ReactDOM from 'react-dom';


class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleChange  = (e) => {
      var newName = e.target.value;

      this.setState({
        name: newName
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!!</h1>

        <p>
          Please input your name here:
          <input ref="input"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </p>

        <p>Hello, <span ref="name">{this.state.name}</span> </p>
      </div>
    );
  }
}

export default Root;
  // ========================================
  
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
  