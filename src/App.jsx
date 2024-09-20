import React from 'react';
import { Route, Routes , Link, useLocation} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Create from './components/Create';
import Edit from './components/Edit';


const App = () => {
  const {search, pathname} = useLocation();
  console.log(search, pathname);
  return (
    <>
    <div className="h-screen w-screen flex">
      {(pathname!="/" || search.length>0) && 
      (<Link to="/" className='text-red-200 absolute left-[17%] top-[5%]'>Home</Link>)}
    
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
     </Routes>
    </div>
    </>
  );
};

export default App;
