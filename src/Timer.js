import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minLength: 9,
      maxLength: 1000,
      start: 0,
      end: 0,
      results: [],
      value: '',
    };
  }
  
  handleCount = (e) => {
    const { minLength, maxLength } = this.state;
    const { value } = e.target;
    const lengthValue = value.length;

    const time = new Date().getTime();

    if (lengthValue === 0) {
      this.handleResetTimer();
    }

    if (lengthValue === 1) {
      this.setState({ start: time, end: 0 });
    }

    if (lengthValue >= minLength && lengthValue <= maxLength) {
      this.setState({ end: time, value });
    }

    this.setState({ value });
  }

  handleCalcTimer = () => {
    const { start, end } = this.state;    
    const result = (end - start) / 1000;
    return parseFloat(result.toFixed(2));
  }

  handleRegisterTimer = e => {
    e.preventDefault();
    const { value, results, minLength, maxLength } = this.state;
    const { attempts } = this.props;
    const time = this.handleCalcTimer();

    if (results.length <= attempts && value.length >= minLength && value.length <= maxLength) {
      this.props.result({ value, time });
      return this.handleResetTimer();
    }

    return alert('Você não digitou o minimo de palavras');
  }

  handleResetTimer = () => {
    this.setState({
      value: '',
      start: 0,
      end: 0
    });
  }

  render() {
    const {start, end, maxLength, value} = this.state;
    const time = end > 0 && ((end - start) / 1000) || 0;
    return (
      <form onSubmit={this.handleRegisterTimer}>
        <div className="input-block">
          <label htmlFor="words">Tempo gasto:</label>
          <input 
            type="text"
            value={time}
            readOnly
          />
        </div>
        <div className="input-block">
          <label htmlFor="words">Digite uma paravra:</label>
          <input 
            type="text"
            id="words"
            value={value}
            onChange={this.handleCount}
            maxLength={maxLength}
            autoFocus={true}
          />
        </div>
        <button className="btn-success" type="submit">
          Proxima tentativa
        </button>
      </form>
    );
  }
}

export default Timer;
