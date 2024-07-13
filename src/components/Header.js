import "./common.css";
import "./Header.css";
import img from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem("loggedIn");
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("usertype");
    sessionStorage.removeItem("userData");
    setLoggedIn(false);
    navigate("/");
    window.location.reload();
  };

  const userInfo = JSON.parse(sessionStorage.getItem("userData"));
  const nav = useNavigate();
  return (
    <header>
      <div className="container_fix">
        <h1 className="logo" onClick={() => nav('/')}>
          <img src={img} alt="C2C" />
        </h1>
        <nav>
          <ul className="nav">
            <li className="menu">
              <a onClick={() => { nav('booking'); }}>빠른 예매</a>
            </li>
            <li className="menu"><a onClick={() => { nav('movie/1'); }}>요즘 영화</a></li>
            <li className="menu close"><a>요즘 극장</a></li>
            <li className="menu close">
              <a>공지사항/이벤트</a>
              <ul className="sub_menu"></ul>
            </li>
            <li className="menu"><a onClick={() => { nav('contact'); }}>고객센터</a></li>
          </ul>
        </nav>
        <ul className="member_info">
          {userInfo == null ? (
            <>
              <li><a onClick={() => { nav('signup'); }}>회원가입</a></li>
              <li><a onClick={() => { nav('login'); }}>로그인</a></li>
            </>
          ) : (
            <>
              <li><a onClick={() => { nav('mypage'); }}>마이페이지</a></li>
              <li><a onClick={handleLogout}>로그아웃</a></li>
            </>
          )}
          <li className="all_menu"><a href=""><span className="all_menu_span"></span></a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
