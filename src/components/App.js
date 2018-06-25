import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadState from './SquadState';


class App extends Component {
  render() {
    return (
      <div className="App row">
        <h3>SuperSquad</h3>
        <div className="col-md-4">
          <CharacterList />
        </div>        
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadState />
        </div>
      </div>
    );
  }
}

export default App;
