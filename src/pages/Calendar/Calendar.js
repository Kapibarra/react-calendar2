import React, { useState, useEffect } from "react";
import classes from "./Calendar.module.css";
import EventFilters from "../../components/Filters/Filters";
import banner from "../../assets/banner.png";
import Card from "../../components/Card/Card";

import calendarData from "../../assets/calendar/calendar.json";
// const queryParams = new URLSearchParams(window.location.search);
// const locationParam = queryParams.get("location");

function CalendarPage() {
  const eventsData = calendarData.events;
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  // const [locationParam, setLocationParam] = useState(null);
  useEffect(() => {}, []);
  const filterEvents = (filters) => {
    setFilteredEvents(
      eventsData.filter((event) => {
        return (
          (!filters.sport_type || event.sport_type === filters.sport_type) &&
          (!filters.event_type || event.event_type === filters.event_type) &&
          (!filters.event_status ||
            event.event_status === filters.event_status) &&
          (!filters.age || event.age === filters.age) &&
          (!filters.event_region ||
            event.event_region === filters.event_region) &&
          (!filters.start_date || isDateInRange(event, filters.start_date))
        );
      })
    );
  };
  // Функция для проверки, находится ли дата в диапазоне
  const isDateInRange = (event, filterDate) => {
    const startDate = new Date(event.start_date);
    const endDate = new Date(event.end_date);
    const filter = new Date(filterDate);
    return filter >= startDate && filter <= endDate;
  };
  return (
    <div className={classes.Calendar}>
      <img className={classes.calendarImage} alt="main banner" src={banner} />
      <EventFilters
        // initialLocation={locationParam}
        onFilterChange={filterEvents}
        events={eventsData}
      />
      <div className={classes.CardWrapper}>
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            mainImg={event.mainImg}
            time={event.start_date}
            location={event.event_region}
            title={event.event_name}
            description={event.additional_info}
          />
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
