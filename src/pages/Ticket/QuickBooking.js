import React, { useState } from 'react';
import MovieSelection from './MovieSelection';
import DateSelection from './DateSelection';
import TimeSelection from './TimeSelection';
import '../Ticket/Ticket.css';
import Subbanner from '../../components/Subbanner';

const QuickBooking = ({ movie, setSelectedMovie, setSelectedDate, setSelectedTime, selectedMovie, selectedDate, selectedTime }) => {
  return (
    <div> {/*전체 내용을 감싸는 큰 상자*/}
      <Subbanner title={'빠른 예매'} text={'Come 2 Cinema에서 만나요.'} pageName={`sub_booking`}/>
      <div className="content">
        <MovieSelection
          movie={movie} // 영화 목록을 전달
          onSelect={setSelectedMovie} // 선택한 영화를 설정하는 함수를 전달
          selectedMovie={selectedMovie} // 선택한 영화를 전달
        />
        <DateSelection
          movie={movie} // 영화 목록을 전달
          selectedMovie={selectedMovie} // 선택한 영화를 전달
          onSelect={setSelectedDate} // 선택한 날짜를 설정하는 함수를 전달
          selectedDate={selectedDate} // 선택한 날짜를 전달
        />
        {selectedMovie && selectedDate && (
          <TimeSelection
            onSelect={setSelectedTime} // 선택한 시간을 설정하는 함수를 전달
            selectedTime={selectedTime} // 선택한 시간을 전달
          />
        )}
      </div>
    </div>
  );
};

export default QuickBooking; // QuickBooking 컴포넌트를 내보내서 다른 파일에서 사용할 수 있게 함
