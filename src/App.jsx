import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";
import RecipeDetails from "./components/recipe/RecipeDetails";
import CreateRecipe2 from "./components/Pages/create/CreateRecipe2";
import RecipeList2 from "./components/Pages/RecipesList/RecipeList2";
import Auth2 from "./components/auth/Auth2";
import Login2 from "./components/auth/Login2";
import MyProfile from "./components/Pages/MyProfile";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Auth2" element={<Auth2 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipes2" element={<PrivateRoute><RecipeList2 /></PrivateRoute>} />
        <Route path="/recipe/:recipeId" element={<PrivateRoute><RecipeDetails /></PrivateRoute>} />
        <Route path="/createRecipe2" element={<PrivateRoute><CreateRecipe2 /></PrivateRoute>} />
        <Route path="/myProfile" element={<PrivateRoute><MyProfile /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
export default App;
