import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Signup, Chat, NotFound } from './pages';

function App() {
  // console.log(UseAuthContext()?.isLoggedIn);
  return (
    <>
      <main>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
