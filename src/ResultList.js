import React from 'react';

class ResultList extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Palavra</th>
            <th>Tempo (Real)</th>
            <th>Tempo (Com base na quantidade de letras)</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 && (results.map(v => (<tr key={v.value}>
            <td>{v.value}</td>
            <td>{v.time.calc1}</td>
            <td>{v.time.calc2}</td>
          </tr>))) || (<tr><td colSpan="3">Nenhuma informação</td></tr>)}
        </tbody>            
      </table>             
    );
  }
}

export default ResultList;
