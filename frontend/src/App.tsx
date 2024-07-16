import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Blogs } from "./pages/Blogs";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { HomePage } from "./pages/Homepage";
import { AuthProvider } from "./contexts/Auth";
import { ReadBlog } from "./pages/ReadBlog";
import { useAuth } from "./contexts/Auth";
const AppContent = () => {
    const { isAuthenticated } =useAuth();
  return (
    <div className="bg-white dark:bg-zinc-900">
      <Navbar/>
      <main className="z-5 min-h-screen md:pt-20 pt-12">
        <Routes>
           <Route path="/" element={<HomePage/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/blogs" element={isAuthenticated ?<Blogs />:<Signin/>} />
          <Route path="blogs/readblog/:id" element={isAuthenticated ?<ReadBlog/>:<Signin/>}/>
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
     <AuthProvider>
     <Router>
        <AppContent />
      </Router>
     </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
