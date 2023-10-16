import React, { useEffect, useState } from "react";
import classes from "./Filters.module.css";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

function EventFilters({ initialLocation, onFilterChange, events }) {
  // Создайте списки уникальных значений для фильтров
  const sportsOptions = [...new Set(events.map((event) => event.sport_type))];
  const eventTypeOptions = [
    ...new Set(events.map((event) => event.event_type)),
  ];
  const statusOptions = [...new Set(events.map((event) => event.event_status))];
  const ageOptions = [...new Set(events.map((event) => event.age))];
  const locationOptions = [
    ...new Set(events.map((event) => event.event_region)),
  ];

  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    sport_type: null,
    event_type: null,
    event_status: null,
    age: null,
    event_region: null,
    start_date: null,
  });
  const handleFiltersChange = () => {
    const filters = {
      sport_type: selectedSport,
      event_type: selectedEventType,
      event_status: selectedStatus,
      age: selectedAge,
      event_region: selectedLocation,
      start_date: selectedDate,
    };
    onFilterChange(filters);
  };

  useEffect(() => {
    // Внутри useEffect() можно выполнить побочный эффект после обновления состояния.
    handleFiltersChange();
  }, [
    selectedSport,
    selectedEventType,
    selectedStatus,
    selectedAge,
    selectedLocation,
    selectedDate,
  ]);

  const resetFilters = () => {
    setSelectedSport(null);
    setSelectedEventType(null);
    setSelectedStatus(null);
    setSelectedAge(null);
    setSelectedLocation(null);
    setSelectedDate(null);
    setSelectedFilters({
      sport: null,
      eventType: null,
      status: null,
      age: null,
      location: null,
      date: null,
    });
    onFilterChange({});
  };
  return (
    <div className={classes.filters}>
      <Dropdown
        style={{ width: "180px" }}
        value={selectedSport}
        filter // Включение фильтра
        showClear // Показывать кнопку очистки поля
        options={[
          { label: "Все виды спорта", value: null }, // Добавьте эту опцию
          ...sportsOptions.map((sport) => ({ label: sport, value: sport })),
        ]}
        onChange={(e) => {
          setSelectedSport(e.value);
          handleFiltersChange();
        }}
        placeholder="Вид спорта"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedEventType}
        filter // Включение фильтра
        showClear // Показывать кнопку очистки поля
        options={eventTypeOptions.map((eventType) => ({
          label: eventType,
          value: eventType,
        }))}
        onChange={(e) => {
          setSelectedEventType(e.value);
          handleFiltersChange();
        }}
        placeholder="Вид мероприятия"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedStatus}
        filter // Включение фильтра
        showClear // Показывать кнопку очистки поля
        options={statusOptions.map((status) => ({
          label: status,
          value: status,
        }))}
        onChange={(e) => {
          setSelectedStatus(e.value);
          handleFiltersChange();
        }}
        placeholder="Cтатус мероприятия"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedAge}
        filter // Включение фильтра
        showClear // Показывать кнопку очистки поля
        options={ageOptions.map((age) => ({ label: age, value: age }))}
        onChange={(e) => {
          setSelectedAge(e.value);
          handleFiltersChange();
        }}
        placeholder="Возрастная группа"
      />
      <Dropdown
        style={{ width: "180px" }}
        value={selectedLocation}
        filter // Включение фильтра
        showClear // Показывать кнопку очистки поля
        options={locationOptions.map((location) => ({
          label: location,
          value: location,
        }))}
        onChange={(e) => {
          setSelectedLocation(e.value);
          handleFiltersChange();
        }}
        placeholder="Место проведения"
      />
      <Calendar
        style={{ width: "180px" }}
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e.value);
          handleFiltersChange();
        }}
        placeholder="Дата проведения"
      />
      <button className={classes.resetButton} onClick={resetFilters}>
        Сбросить фильтры
      </button>
    </div>
  );
}

export default EventFilters;
