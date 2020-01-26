import React from 'react';
import './style.css';
import Attempts from './Attempts';
import Timer from './Timer';
import ResultList from './ResultList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      attempts: 0,
    };
  }
  
  handleRegister = data => {
    const { results, attempts } = this.state;

    if (results.length < attempts) {
      results.push(data);
      return this.setState(results);
    }

    alert('Você excedeu o limite de tentativas!');
  }

  render() {
    const { results, attempts } = this.state;
    return (
      <main>
        {attempts === 0 && (
          <div className="content">
            <Attempts
             saveAttempts={attempts => this.setState({ attempts })}
            />
          </div>
        )}
        {attempts > 0 && (
          <div className="content">
            <Timer
             attempts={attempts}
             result={this.handleRegister}
            />
          </div>  
        )}
        <div className="content">
          <ResultList results={results} />
        </div>
      </main>      
    );
  }
}

export default App;
