import React from 'react';
import DayContainer from './DayContainer';
import MonthContainer from './MonthContainer';

function App() {
  return (
    <div class="App row">
      <div class="col-md-6">
        <DayContainer />
      </div>
      <div class="col-md-6">
        <MonthContainer />
      </div>
    </div>
  );
}

export default App;
