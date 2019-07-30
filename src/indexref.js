import React from "react";
import ReactDOM from "react-dom";
import { tsPropertySignature } from "@babel/types";

const Header = props => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Part = props => {
  return (
    <p>
      {props.parts} {props.points}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part part={props.parts[0]} points={props.points[0]} />
      <Part part={props.parts[1]} points={props.points[2]} />
      <Part part={props.parts[3]} points={props.points[3]} />
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[part1, part2, part3]}
        points={[exercises1, exercises2, exercises3]}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
