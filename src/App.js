import React, { useReducer, useRef, createContext, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import Signup from './pages/signup/Signup';
import { TicketModal } from './pages/Ticket/TicketModal';
import TicketCompleteOrder from './pages/Ticket/TicketCompleteOrder';
import Login from './components/Logins/Login';
import Mypage from './components/moviepage/MyPage';
import Userinfoupdate from './components/Userinfoupdate/Userinfoupdate';
import Main from './components/Main';
import QuickBooking from './pages/Ticket/QuickBooking';
import SeatBooking from './pages/Ticket/SeatBooking';
import MovieInfo from './pages/Ticket/MovieInfo';
import Reservations from './pages/Ticket/Reservations';
import PaymentPage from './pages/Ticket/PaymentPage';
import MovieList from './pages/movie/Movielist';
import MovieWrite from './pages/movie/Moviewrite';
import MovieEdit from './pages/movie/Movieedit';
import MovieView from './pages/movie/Movieview';
import Contact from './pages/cs/Contact';

const response = await axios.get('//localhost:8000/board_movie');
const mockData = response.data;

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const PostStateContext = createContext();
export const PostDispatchContext = createContext();

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  const [selectedMovie, setSelectedMovie] = useState([null]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [localmovie, setLocalMovie] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function resData() {
      const movies = await axios.get(`http://localhost:8000/movie`, {});
      const data = movies.data;
      setMovie(data);
    }
    resData();
  }, []);

  const [movieId, setMovieId] = useState(1);

  useEffect(() => {
    movie.map((movie) => {
      if (movie.name === selectedMovie)
        return setMovieId(movie.id);
    });
  }, [selectedMovie]);

  useEffect(() => {
    movie.map((movie) => {
      if (movie.name === selectedMovie)
        return localStorage.setItem("movie", JSON.stringify(movie));
    });
  }, [selectedMovie]);

  console.log(movieId);

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onCreate = (title, movie_status, img, content, userid) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        movie_status,
        img,
        content,
        userid,
      },
    });
  };

  const onEdit = (id, title, movie_status, img, content, userid) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        title,
        movie_status,
        img,
        content,
        userid
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id
    });
  };

  return (
    <PostStateContext.Provider value={data}>
      <PostDispatchContext.Provider value={{ onCreate, onEdit, onDelete }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={
              <QuickBooking
                movie={movie}
                setSelectedMovie={setSelectedMovie}
                setSelectedDate={setSelectedDate}
                setSelectedTime={setSelectedTime}
                selectedMovie={selectedMovie}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            } />
            <Route path="/seat-booking" element={
              <SeatBooking
                movieId={movieId}
                movie={movie}
                selectedMovie={selectedMovie}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }>
              {background && <Route path="/seat-booking/modal" element={<TicketModal />} />}
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/completeOrder" element={<TicketCompleteOrder />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/userinfoupdate" element={<Userinfoupdate />} />
            <Route path="/movie/:page" element={<MovieList />} />
            <Route path='/movie/write' element={<MovieWrite />} />
            <Route path='/movie/edit/:id' element={<MovieEdit />} />
            <Route path='/movie/post/:id' element={<MovieView />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Layout>
      </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
};

export default App;
