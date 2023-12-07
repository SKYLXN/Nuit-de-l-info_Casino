import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './App.css';
import HomePage from './screens/homePage';
import Page404 from './screens/404';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<HomePage />} />

          {/*<Route path="/quizz" element={<ConcoursScreen />} />
          <Route path="/about" element={<MessageScreen />} />*/}

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}