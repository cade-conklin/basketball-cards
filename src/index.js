import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card" onClick={this.myfunction}>
          <img src="noperson3.png" alt="my image"/>
          <div class="container">
            <h4><b>Damian Lillard</b></h4>
            <p>Portland Trail Blazers</p>
          </div>
          {/* TODO */}
        </div>
      );
    }
    myfunction() {
      alert("Clicked");
      console.log("CLICKED");
  }
  }
  
  class Board extends React.Component {
    renderCard(i) {
      return <Card />;
    }

    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 3; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 6; j++) {
            children.push(this.renderCard(i))
          }
          //Create the parent and add the children
          table.push(<div className="board-row">{children}</div>)
        }
        return table
      }

    render() {
      const status = 'Basketball Cards';
  
      return (
        <div>
          <div className="status">{status}</div>
          {this.createTable()}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  