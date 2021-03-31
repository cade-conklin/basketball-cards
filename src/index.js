import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card" onClick={this.clickFunction}>
          <img src="noperson3.png" alt="my image"/>
          <div className="container">
            <h4><b>Damian Lillard</b></h4>
            <p>Portland Trail Blazers</p>
          </div>
          {/* TODO */}
        </div>
      );
    }
    clickFunction() {
      alert('Click');
    }
  }
  
  class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        first_name: "",
        last_name: "",
        doneAPI: false,
      };
    }

    renderCard(i) {
      return(
        <div className="card" onClick={this.clickFunction}>
          <img src="noperson3.png" alt="my image"/>
          <div className="container">
            <h4><b>{this.state.first_name}</b></h4>
            <p>{this.state.last_name}</p>
          </div>
          {/* TODO */}
        </div>
      );
    }

    clickFunction() {
          alert('Click');
        }

    myfunction() {
      fetch('https://www.balldontlie.io/api/v1/players/237')
        .then(async response => {
            const data = await response.json();
            console.log(data.first_name);
            console.log(data.last_name);

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            this.setState({first_name: data.first_name})
            this.setState({last_name: data.last_name}) 
            this.setState({doneAPI: true}) 
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    createTable = () => {
        let table = []
        if (!this.state.doneAPI) {
          this.myfunction();
        }
      //  const first_name = data.parse("first_name");
      //  const last_name = data.parse("last_name");
      //  console.log(first_name);
      //  console.log(last_name);
       
    
        // Outer loop to create parent
        for (let i = 0; i < 18; i++) {
          let children = []
          console.log("Here");
            children.push(this.renderCard(i))
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
  