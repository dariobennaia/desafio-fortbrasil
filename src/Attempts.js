import React from 'react';

class Attempts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: 0
    };
  }

  handleChangeAttempts = e => {
    const { value: attempts } = e.target;
    this.setState({ attempts });
  }

  handleSave = e => {
    e.preventDefault();
    const { attempts } = this.state;

    if (!attempts || parseInt(attempts) <= 0) {
      return alert("informe a quantidade de tentativas!");
    }

    return this.props.saveAttempts(attempts);
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <div className="input-block">
          <label htmlFor="words">Quantas tentativas?</label>
          <input 
            type="number"
            onChange={this.handleChangeAttempts}
            autoFocus={true}
          />
        </div>
        <button className="btn-success" type="submit">
          Iniciar
        </button>
      </form>          
    );
  }
}

export default Attempts;
