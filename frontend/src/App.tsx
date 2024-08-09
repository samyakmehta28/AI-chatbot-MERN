import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Chat, NotFound } from './pages';
import ProtectedRoute from './components/ProtectedRoute';
import { UseAuthContext } from './context/auth-context';

function App() {
  const auth = UseAuthContext();
  return (
    <>
      <main>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute
                  component={Chat}
                  isLoggedIn={auth?.isLoggedIn}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
