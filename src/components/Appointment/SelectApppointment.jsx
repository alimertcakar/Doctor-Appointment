import "./index.css";

import { Button } from "antd";
import moment from "moment";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaLink,
  FaLocationArrow,
  FaRegClock,
} from "react-icons/fa";

import { doctorTimeSlot } from "../../constant/global";

const SelectApppointment = ({
  selectedDate,
  handleDateChange,
  selectTime,
  setSelectTime,
}) => {
  const handleSelectTime = (date) => {
    setSelectTime(date);
  };

  const amTimeSlot = doctorTimeSlot.filter((item) => item.includes("AM"));
  const pmTimeSlot = doctorTimeSlot.filter((item) => item.includes("PM"));

  const last5Days = Array.from({ length: 5 }, (_, index) =>
    moment().clone().subtract(index, "days")
  );

  return (
    <div style={{ marginTop: "1rem" }}>
      <div>
        <h3 className="text-center">Select Appointment</h3>
      </div>
      <div className="p-3" style={{ background: "#f8f9fa" }}>
        <div className="row">
          <div className="col-md-5 col-sm-12 mt-3 border-end">
            <div className="info-date-card row">
              {last5Days.map((item, index) => (
                <div
                  key={index + 5}
                  className="mb-3 col-md-6"
                  onClick={() => handleDateChange(item)}
                >
                  <div
                    className={`p-3 mb-3 rounded text-center select-date ${
                      moment(item).format("LL") ===
                      moment(selectedDate).format("LL")
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="select-month">
                      {moment(item).format("MMMM YYYY")}
                    </div>
                    <div className="select-day-num">
                      {moment(item).format("D")}
                    </div>
                    <div className="select-month">
                      {moment(item).format("dddd")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <div className="select-time-div">
              <h4>
                Morning Hours{" "}
                <span className="text-secondary">(8AM - 12PM)</span>
              </h4>
              <div className="row text-center mt-3">
                {amTimeSlot.map((item, id) => (
                  <div className="col-md-4 col-sm-6" key={id + 155}>
                    <Button
                      type={item === selectTime ? "primary" : "default"}
                      shape=""
                      size="small"
                      className="mb-3"
                      onClick={() => handleSelectTime(item)}
                    >
                      {item}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="select-time-div">
              <h4>
                Afternoon Hours{" "}
                <span className="text-secondary">(1PM - 5PM)</span>
              </h4>
              <div className="row text-center mt-3">
                {pmTimeSlot.map((item, id) => (
                  <div className="col-md-4" key={id + 155}>
                    <Button
                      type={item === selectTime ? "primary" : "default"}
                      shape=""
                      size="small"
                      className="mb-3"
                      onClick={() => handleSelectTime(item)}
                    >
                      {" "}
                      {item}{" "}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectApppointment;
