import React from "react";
import { Route, Switch } from "react-router-dom";
import Content from "../component/content/content";
import TeacherList from "../component/Teacher/teacherList";
import StudentList from "../component/Student/StudentList";
import ClassList from "../component/Class/ClassList";
export default function Homepage() {
  return (
    <>
      <Switch>
        {/* <Redirect exact from="/" to="/dashboard" /> */}
        <Route exact path="/" component={Content} />
        <Route exact path="/dashboard" component={Content} />
        <Route exact path="/teacher" component={TeacherList} />
        <Route exact path="/student" component={StudentList} />
        <Route exact path="/class" component={ClassList} />
      </Switch>
    </>
  );
}
