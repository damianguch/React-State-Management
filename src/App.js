/**
 * REACT STATE MANAGEMENT
 * 1. Using Redux(RTK)
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import FeedbackForm from './components/FeedbackForm';
import GoalApp from './components/GoalApp';
import Employees from './components/Employees';
import NavBar from './components/NavBar';
import Reducer from './components/Reducer';
import Composition from './components/Composition';
import { PostList, UserList } from './components/HOC2';
import { EnhancedPostList, EnhancedUserList } from './components/HOC3';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/effect" element={<Composition />} />
          <Route
            path="/hoc"
            element={
              <div>
                <UserList />
                <PostList />
                <EnhancedUserList />
                <EnhancedPostList />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="mb-5">
                <Provider store={store}>
                  <div className="mb-5">
                    <MealsList />
                    <Counter />
                  </div>
                </Provider>
                <Calculator />
                <FeedbackForm />
                <GoalApp />
                <Employees />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
