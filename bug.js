```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function User({params}) { //Missing params destructuring
  console.log(params);
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.userId}</p>
    </div>
  );
}
export default App;
```