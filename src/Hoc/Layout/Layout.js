import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Component } from "react";
import classes from "./Layout.module.css";
import CalendarPage from "../../pages/Calendar/Calendar";
import ResultsPage from "../../pages/Results/Results";
import Navigation from "../../components/Navigation/Navigation";

class Layout extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className={classes.Calendar}>
            <h1 className={classes.Title}>
              Физкультурные и спортивные мероприятия
            </h1>
            {/* Добавьте контент для страницы календаря */}
          </div>
          <Navigation />
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default Layout;
