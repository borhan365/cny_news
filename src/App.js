import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// user
import AllUserScreen from './screens/user/AllUserScreen';
import CreateUserScreen from './screens/user/CreateUserScreen';
import UpdateUserScreen from './screens/user/UpdateUserScreen';
// category
import AllCategoryScreen from './screens/category/AllCategoryScreen';
import CreateCategoryScreen from './screens/category/CreateCategoryScreen';
import CreateSubCategoryScreen from './screens/category/CreateSubCategoryScreen';
import UpdateCategoryScreen from './screens/category/UpdateCategoryScreen';

// news
import AllNewsScreen from './screens/news/AllNewsScreen';
import CreateNewsScreen from './screens/news/CreateNewsScreen';
import UpdateNewsScreen from './screens/news/UpdateNewsScreen';

import { useState } from 'react';

function App() {

  const [isCollaps, setIsCollaps] = useState(false)

  return (
    <>
    <BrowserRouter>
      <div className='main-dashboard'>
        <div className={isCollaps ? 'dashboard-sidebar' : 'dashboard-sidebar active'}>
          <Sidebar isCollaps={isCollaps} setIsCollaps={setIsCollaps} />
        </div>
        <div className={isCollaps ? 'dashboard-wrapper active' : 'dashboard-wrapper'}>
            <Header isCollaps={isCollaps} setIsCollaps={setIsCollaps}/>
          <div className='dashboard-body'>
          <Routes>

            {/* news */}
            <Route path="/News" element={<AllNewsScreen />} />
            <Route path="/create-new-News" element={<CreateNewsScreen />} />
            <Route path="/news/:id" element={<UpdateNewsScreen />} />

            {/* user */}
            <Route path="/users" element={<AllUserScreen />} />
            <Route path="/create-new-user" element={<CreateUserScreen />} />
            <Route path="/user/:id" element={<UpdateUserScreen />} />

            {/* category */}
            <Route path="/categories" element={<AllCategoryScreen />} />
            <Route path="/create-new-category" element={<CreateCategoryScreen />} />
            <Route path="/create-sub-category" element={<CreateSubCategoryScreen />} />
            <Route path="/category/:id" element={<UpdateCategoryScreen />} />
            
          </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
