import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AllBlog } from "./pages/AllBlog";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { HomePage } from "./pages/Homepage";

const AppContent = () => {
  return (
    <div className="bg-white dark:bg-zinc-900">
      <Navbar />
      <main className="z-5">
        <Routes>
           <Route path="/" element={<HomePage/>}/>
          <Route path="/all" element={<AllBlog />} />
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
