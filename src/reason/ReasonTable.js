import React from 'react';
import {Table} from 'react-bootstrap';
class ReasonTable extends React.Component {
  render() {
    return (
      <div>
      <Table bordered condensed responsive>
        <thead>
          <tr>
            <th align="center">Regular Folks</th>
            <th>MMA Folks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>They train to get a good body</td>
            <td>We train to kick their asses</td>
          </tr>
          <tr>
            <td>They use machines to train</td>
            <td>We are the machines</td>
          </tr>
          <tr>
            <td>After quitting, they will be left with nothing</td>
            <td>Even if we quit (not that we will) we will still have learnt something,
            which carries for the rest of our lives.</td>
          </tr>
          <tr>
            <td>They train with non-living things</td>
            <td>We train with ourselves and real opponents</td>
          </tr>
          <tr>
            <td>Fitness they gain will be lost quickly</td>
            <td>With MMA, our bodies will be designed to stay fit
            for long and will be strong in our daily lives. </td>
          </tr>
          <tr>
            <td>Arrogance</td>
            <td>Humility</td>
          </tr>
        </tbody>
      </Table>

      </div>
    );
  }
};

export default ReasonTable;
