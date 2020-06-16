import React from 'react';
import Header from './Header';
import DayContainer from './DayContainer';
import MonthContainer from './MonthContainer';

function App() {
  return (
    <div class="App">
      <div class="row">
        <div class="col-md-12 text-center">
          <Header />
          <br/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 text-right">
          <DayContainer />
        </div>
        <div class="col-md-6">
          <MonthContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
