import * as React from 'react';
import Dashboard from './dash/Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';



export default function App() {
  return (
    <Router>
    <Dashboard/>
    </Router>
    );
}
