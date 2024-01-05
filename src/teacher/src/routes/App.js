import { About } from './about';
import Login from './login'
import Signin from './signin';

import { Route, Routes } from 'react-router-dom'
import Header from './header';
import UsersGet from './usersGet';
import MyPost from './myPost';


function App() {
    return (
        <>
            <h1 className="App" >
                דף ראשי
            </h1>
            <Header />
            <hr />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/User" element={<UsersGet />} >
                    {/* <Route path="aaa" element={<Login />} />
                    <Route path="kkk" element={<div>שלום</div>} /> */}
                    <Route path="post" element={<MyPost />} />
                    {/* <Route path=":userId/:name" element={<MyPost />} /> */}

                </Route>
                {/* <Route path="User" element={<UsersGet />} /> */}
                {/* <Route path="User/aaa" element={<Login />} /> */}

            </Routes>
            <hr />

            <h1> FOOTER</h1>






        </>
    );
}

export default App;
