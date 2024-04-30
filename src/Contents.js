import React, { useState, useEffect } from 'react';
import './App.css'
function DebtorList() {
  const [debtors, setDebtors] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7103/api/debtors')
      .then(response => response.json())
      .then(data => {
        setDebtors(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Debtors List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Debt Amount</th>
            <th>Phone Number</th>
            <th>Debt Date</th>
            <th>Citizen ID</th>
          </tr>
        </thead>
        <tbody>
          {debtors.map(debtor => (
            <tr key={debtor.debtorId}>
              <td>{debtor.name}</td>
              <td>{debtor.address}</td>
              <td>{debtor.debtAmount}</td>
              <td>{debtor.phoneNumber}</td>
              <td>{new Date(debtor.debtDate).toLocaleString()}</td>
              <td>{debtor.citizenId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DebtorList;

