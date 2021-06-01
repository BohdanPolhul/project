import React, { useState } from 'react'
import Home from './Components/Home/Home';
const App = (props) =>{
  const [isAuth,SetisAuth] = useState(false);
  const [data,setData] = useState();
  const [getdata,setAllData] = useState()
  return(
      <div>
        <Home isAuth={isAuth} SetisAuth={SetisAuth} data={data} setData={setData} getdata={getdata} setAllData={setAllData}/>
      </div>
    
    
  )
}
export default App;