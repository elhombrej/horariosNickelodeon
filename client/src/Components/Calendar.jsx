import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {

    handleDateClick = (arg) => { // bind with an arrow function
        alert(arg.dateStr)
      }
    
  return (
    // <div>
    //   <Fullcalendar
    //     plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    //     droppable={true}
    //     initialView={"dayGridMonth"}
    //     headerToolbar={{
    //       start: "today prev,next", // will normally be on the left. if RTL, will be on the right
    //       center: "title",
    //       end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
    //     }}
    //     height={"90vh"}
    //     dateClick={this.handleDateClick}
    //   />
    // </div>
    <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={this.handleDateClick}
      />
  );
}

export default Calendar;
