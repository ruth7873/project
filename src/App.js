import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Header';
import Login from './login/LogIn';
import Signin from './login/SignUp';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipes';
import Shopping from './pages/Shopping';
import AddRecipe from './pages/AddRecipe';
function App() {

  return (
    <div className="App">
      <Header prop={true}/>
      <hr/>
   

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signin />}></Route>
        <Route path="/homePage" element={<HomePage />}></Route>
        <Route path="/recipe" element={<Recipes byUser={false}/>}></Route>
        <Route path="/recipe/:user" element={<Recipes byUser={true}/>}></Route>
        <Route path="/recipe/add" element={<AddRecipe/>}></Route>
        <Route path="/recipe/edit" element={<AddRecipe/>}></Route>

        <Route path="/shopping" element={<Shopping />}></Route>        
      </Routes>
      <h1>!!!!!!!!!!!אנחנו מתחילות את הפרוייקט בשעה טובה ומוצלחת</h1>
      <h2>בעזרת ה' ובס"ד אנחנו נעשה אותו בקלות ובשמחה ובהנאה מרובה</h2>
      <h3>מיליון הצלחות</h3>
      <ul>
        למתרגלת:
        <li>my recipe - V !!!בזכות טובי, שיהיה לה לזכות להצלחה בפרויאקט ובכל</li>
        <li>ריענון - למה כשמרעננים יוצא מהמשתמש ככה זה!!! אפשר לשמור בlocal storage</li>
        <li>למה כשמרעננים הטופס לא מתרוקן- עובד!!!!!</li>
        <li>delete- how to update or change the recipes</li>
        <li>האם להעביר את הקריאות שרת לרידקס ואיך</li>
        <li>קניות</li>


      </ul>
    </div>
  );
}

export default App;
