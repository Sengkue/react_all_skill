// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Sheetapi() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Make an HTTP request to the Google Sheets API
//     axios
//       .get('https://sheets.googleapis.com/v4/spreadsheets/1Ior58W0F1JwJL0wkXOx5cppLVZjOsb0jHyps7osB-Ek/values/test')
//       .then((response) => {
//         // Check if the request was successful
//         if (response.status === 200) {
//           // Extract data from the response
//           const values = response.data.values;

//           // Skip the first row (header row) and convert the data into an array of objects
//           const sheetData = values.slice(1).map((row) => ({
//             name: row[0],
//             age: row[1],
//             salary: row[2],
//             hobby: row[3],
//           }));

//           // Update the component state with the data
//           setData(sheetData);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Google Sheets Data</h1>
//       <ul>
//         {data.map((row, index) => (
//           <li key={index}>
//             Name: {row.name}, Age: {row.age}, Salary: {row.salary}, Hobby: {row.hobby}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sheetapi;
































import React, { useEffect, useState } from 'react';
import { Table, Header } from 'semantic-ui-react';

function Sheetapi() {
  const [data, setData] = useState([]);

  const fetchGoogleSheetData = () => {
    const query = new window.google.visualization.Query(
      'https://docs.google.com/spreadsheets/d/1Ior58W0F1JwJL0wkXOx5cppLVZjOsb0jHyps7osB-Ek/gviz/tq?tqx=reqId%3A1'
    );

    query.send((response) => {
      if (response.isError()) {
        console.error('Error fetching Google Sheets data:', response.getMessage());
      } else {
        const dataTable = response.getDataTable();
        const parsedData = [];

        // Extract column names
        const columns = dataTable.getNumberOfColumns();
        const columnNames = [];
        for (let i = 0; i < columns; i++) {
          columnNames.push(dataTable.getColumnLabel(i));
        }

        // Extract rows
        const rows = dataTable.getNumberOfRows();
        for (let i = 0; i < rows; i++) {
          const rowData = {};
          for (let j = 0; j < columns; j++) {
            const columnName = columnNames[j];
            const cellValue = dataTable.getValue(i, j);
            rowData[columnName] = cellValue;
          }
          parsedData.push(rowData);
        }

        // Update the state with the parsed data
        setData(parsedData);
      }
    });
  };

  useEffect(() => {
    // Load the Google Visualization API
    window.google.charts.load('current', { packages: ['corechart'] });

    // Set a callback to run when the Google Visualization API has loaded
    window.google.charts.setOnLoadCallback(fetchGoogleSheetData);
  }, []);

  return (
    <div>
      <Header as="h1">Google Sheets Data</Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            {Object.keys(data[0] || {}).map((key) => (
              <Table.HeaderCell key={key}>{key}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((row, index) => (
            <Table.Row key={index}>
              {Object.values(row).map((value, i) => (
                <Table.Cell key={i}>{value}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Sheetapi;
