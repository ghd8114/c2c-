import React from 'react';
import './Main.css';
import image6 from '../assets/icon1.png';
import image7 from '../assets/개봉예정작슬라이드.png';
import image8 from '../assets/Maskgroup.png';
import image9 from '../assets/free-icon-question-5668097(1).png';
import image10 from '../assets/free-icon-customer-service-10041643(1).png';
import image11 from '../assets/free-icon-map-3969582(1).png';
// import Sliderwrap from './Sliderwrap.js';

const Main = () => { 
  return (
    <main class="main">
  {/* <Sliderwrap/> */}

    <section id="reserve" class="reserve">
      <div className="text_box_title">
        <div className="container_fix">
          <div className="title">
            <p>빠른 예매</p>
          </div>
          <div className="reserve_box">
            <div className="icon">
              <nav className="menu_box">
              <img src={image6} alt="img6"/>
                <ul>
                  <li>
                    <a className="movie_name">영화명</a>
                    <ul className="movie_name_list">
                      <li><a href="#">그녀가 죽었다</a></li>
                      <li><a href="#">챌린저스</a></li>
                      <li><a href="#">범죄도시4</a></li>
                      <li><a href="#">극장판 하이큐!! 쓰레기장의 결전</a></li>
                      <li><a href="#">악마와의 토크쇼</a></li>
                    </ul>
                  </li>
                </ul>
               </nav>
               </div>
              
             <input type="date" 
                    id="currentDate" 
                    name="reserve_date" 
                    value="2024-06-19" 
                    min="currentDate" 
                    max="2024-09-19" />
                   
                    <div className="icon">
            <select required>
              <option value="select_time_box">시간 선택</option>
              <option value="0930">09:30</option>
              <option value="1100">11:00</option>
              <option value="1200">12:00</option>
              <option value="0900">13:10</option>
              <option value="0900">14:00</option>
              <option value="0900">15:30</option>
              <option value="0900">17:40</option>
              <option value="0900">19:00</option>
              <option value="0900">21:00</option>
              <option value="0900">23:00</option>
            </select>
            </div>
            <div className="quick_reserve">
              <p>예매하기</p>
            
          </div>
        </div>
      </div>
      </div>
    </section>
    <section id="board_wrap">
      <div className="container_fix">
        <div className="board_title">
          <div className="board_text">
            <p>공지사항/이벤트</p>
            <a href="#">+ 더보기</a>
          </div>
          <hr />
          <div className="board_content">
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr /> 
            <div className="board_con">
              <p>게시글 제목이 노출됩니다.</p> <span>2024-05-27</span>
            </div>
            <hr />
          </div>
        </div>
        <div className="todays_movie">
          <div className="board_text">
            <p>요즘 영화</p>
            <a href="#">+더보기</a>
          </div>
          <img src={image7} alt="img7"/>
        </div>
      </div>
    </section>
    <section id="todays_theater">
      <div className="container_fix">
        <div className="theater_img">
          <img src={image8} alt="img8"/>
        </div>
        <div class="theater_text">
          <p>요즘 극장</p>
        </div>
      </div>
    </section>
    <section id="info">
      <div className="container_fix">
        <div className="qna">
        <img src={image9} alt="img9"/>
          <p>자주묻는 질문</p>
        </div>
        <div className="service">
        <img src={image10} alt="img10"/>
          <p>1:1 문의 게시판</p>
        </div>
        <div className="map">
        <img src={image11} alt="img11"/>
          <p>찾아오시는 길</p>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Main;