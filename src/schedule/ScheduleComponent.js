import React from 'react';
import {Table} from 'react-bootstrap';
class ScheduleComponent extends React.Component {
  render() {
    return (
      <div id="schedule" className="schedule">
        <div className="container">
          <h1 className="text-center">Schedule</h1>
          <Table bordered condensed responsive>
            <thead>
              <tr>
                <th>Day</th>
                <th>Morning</th>
                <th>Evening</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>We train to kick their asses</td>
                <td>something</td>
              </tr>
              <tr>
                <td>They use machines to train</td>
                <td>We are the machines</td>
                <td>something</td>
              </tr>
              <tr>
                <td>After quitting, they will be left with nothing</td>
                <td>Even if we quit (not that we will) we will still have learnt something,
                which carries for the rest of our lives.</td>
                <td>something</td>
              </tr>
              <tr>
                <td>They train with non-living things</td>
                <td>We train with ourselves and real opponents</td>
                <td>something</td>
              </tr>
              <tr>
                <td>Fitness they gain will be lost quickly</td>
                <td>With MMA, our bodies will be designed to stay fit
                for long and will be strong in our daily lives. </td>
                <td>something</td>
              </tr>
              <tr>
                <td>Arrogance</td>
                <td>Humility</td>
                <td>something</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
};

export default ScheduleComponent;
