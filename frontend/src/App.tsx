import React, {useState, useEffect} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        setData(responseData.message);
      } catch (error) {
        console.error('Error fetching data : error.message');
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {
          !data ? "Loading..." : data
         }
        </p>
        
      </header>
    </div>
  );
}

export default App;