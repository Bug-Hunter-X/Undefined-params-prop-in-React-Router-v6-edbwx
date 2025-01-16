```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {/* ... */}
function About() {/* ... */}
function User() {
  const params = useParams();
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