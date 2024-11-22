import { useState } from 'react'
const Statistics = ({ task, good, bad, all}) => {
  let average = all === 0 ? 0 : Math.round((good / all) * 100) / 100;
  let percentage = all === 0 ? 0 : Math.round(good / all * 100);

  let label, result, suffix;
  if (task === "average") {
    label = "Average";
    result = average;
  } else {
    label = "Percentage";
    result = percentage;
    suffix = "%"
  }

  return(
    <div>
      <p>{label}: {result}{suffix}</p>
    </div>
  );
};



const Display = ({ good, neutral, bad, all }) => {
  if (all === 0) {
    return (
      <div>
        <p>No feedback given yet!</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {all}</p>
        <Statistics task="average" good={good} bad={bad} all={all}/>
        <Statistics task="percentage" good={good} bad={bad} all={all}/>
      </div>
    );
  };
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => { setGood(good + 1); setAll(all + 1); }}>Good</button>
      <button onClick={() => {setNeutral(neutral + 1); setAll(all + 1); }}>Neutral</button>
      <button onClick={() => {setBad(bad + 1); setAll(all + 1); }}>Bad</button>
      <h2>Statistics:</h2>
      <Display good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App