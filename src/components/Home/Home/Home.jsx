import moment from "moment";
import React, { useState } from "react";

import SelectApppointment from "../../Appointment/SelectApppointment";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectTime, setSelectTime] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD HH:mm:ss"));
  };

  return (
    <>
      HOME
      <SelectApppointment
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
        selectTime={selectTime}
        setSelectTime={setSelectTime}
      />
    </>
  );
};

export default Home;
