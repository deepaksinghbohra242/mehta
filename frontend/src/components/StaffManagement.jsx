import React from 'react';

function StaffManagement() {
  return (
    <div>
      <h2>Staff Management</h2>
      <table>
        {/* Table to display staff and bus assignment data */}
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Assigned Bus</th>
            <th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {/* Dummy data for demonstration */}
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Bus 101</td>
            <td>Morning</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StaffManagement;
