import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Test from '../pages/Test';
import Test2 from '../pages/Test2';

function Navigation() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">TEST!</Link>
          </li>
          <li>
            <Link to="/about">TEST!</Link>
          </li>
        </ul>
      </nav>
    </div>
      <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/about" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
