import React, { useState } from "react";
import StaffManagement from './StaffManagement';
import RoutePlanning from './RoutePlanning';
import View from './View';

function Main() {
  const [view, setView] = useState('main');

  return (
    <>
      <button onClick={() => setView('staff')}>Staff Management</button>
      <button onClick={() => setView('route')}>Route Planning</button>
      <button onClick={() => setView('view')}>Visual View</button>

      {view === 'staff' && <StaffManagement />}
      {view === 'route' && <RoutePlanning />}
      {view === 'view' && <View />}
    </>
  );
}

export default Main;
