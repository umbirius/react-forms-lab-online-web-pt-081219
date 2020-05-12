import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "enter message"
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message ({this.props.maxChars} Characters):</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
        <p>{(this.props.maxChars - this.state.message.length)} Characters Remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
