import axios from 'axios';

import UserSection from './components/UserSection'; 
import 'antd/dist/reset.css';
import './App.css';

const baseURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() { 
  return (
    <UserSection />
  );
}

export default App;
