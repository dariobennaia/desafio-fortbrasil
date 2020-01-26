import React from 'react';

class ResultList extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Palavra</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 && (results.map(v => (<tr key={v.value}>
            <td>{v.value}</td>
            <td>{v.time}</td>
          </tr>))) || (<tr><td colSpan="2">Nenhuma informação</td></tr>)}
        </tbody>            
      </table>             
    );
  }
}

export default ResultList;
