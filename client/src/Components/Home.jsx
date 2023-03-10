import { Paper } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { styled } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Calendar from "./calendar";
import NavegationBar from "./NavegationBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

dayjs.extend(isBetweenPlugin);

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== "dayIsBetween" && prop !== "isFirstDay" && prop !== "isLastDay",
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  }),
  ...(isLastDay && {
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  }),
}));

function Day(props) {
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf("week");
  const end = selectedDay.endOf("week");

  const dayIsBetween = day.isBetween(start, end, null, "[]");
  const isFirstDay = day.isSame(start, "day");
  const isLastDay = day.isSame(end, "day");

  return (
    <CustomPickersDay
      {...other}
      day={day}
      disableMargin
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

Day.propTypes = {
  /**
   * The date to show.
   */
  day: PropTypes.object.isRequired,
  selectedDay: PropTypes.object,
};

export function Home({ mode, setMode }) {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  const handleEvent = () => {
    var dateStr = prompt("Enter a date in YYYY-MM-DD format");
    var date = new Date(dateStr + "T00:00:00"); // will be in local time

    if (!isNaN(date.valueOf())) {
      FullCalendar.Calendar.addEvent({
        title: "dynamic event",
        start: date,
        allDay: true,
      });
      alert("Great. Now, update your database...");
    } else {
      alert("Invalid date.");
    }
  };

  // const renderEventContent = (eventInfo) => {
  //   return (
  //     <>
  //       <b>{eventInfo.timeText}</b>
  //       <i>{eventInfo.event.title}</i>
  //     </>
  //   );
  // };

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <NavegationBar mode={mode} setMode={setMode} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DateCalendar
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{ day: Day }}
          slotProps={{
            day: {
              selectedDay: value,
            },
          }}
        /> */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          droppable={true}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next", // will normally be on the left. if RTL, will be on the right
            center: "addEventButton",
            end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
          }}
          height={"90vh"}
          dateClick={handleDateClick}
          // eventContent={renderEventContent}
          customButtons={{
            addEventButton: {
              text: "add event...",
              click: {handleEvent},
            },
          }}
        />
      </LocalizationProvider>
    </Paper>
  );
}
