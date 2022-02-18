import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionsList from "./pages/questionsList/QuestionsList";
import Question from "./pages/question/Question";
import NewUser from "./pages/newUser/NewUser";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
import ExamenList from "./pages/examenList/ExamenList";
import FrontExamen from "./pages/frontExamen/FrontExamen";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={ <Login />} />
        <Route exact path='/questions' element={ <QuestionsList />} />
        <Route exact path='/examen' element={ <ExamenList />} />
        <Route exact path='/ex' element={ <FrontExamen/>} />
        <Route exact path='/adduser' element={ <NewUser />} />
        <Route exact path='/user' element={ <UserList />} />
        <Route exact path='/myuser' element={ <User />} />
        <Route exact path='/question/:id' element={<Question/>} />
        <Route exact path='/' element={ <Home />} />
      </Routes>
    </Router>
  );
}

export default App;
