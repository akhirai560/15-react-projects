import React, { useState, useCallback, useEffect } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  const [openedMap, setOpenedMap] = useState({});

  useEffect(() => {
    questions.forEach((question, index) => {
      setOpenedMap((obj) => {
        return { ...obj, [index]: false };
      });
    });
  }, [questions]);

  const updateOpenedMapOnToggle = useCallback((index, state) => {
    Object.keys(openedMap).forEach((key) => {
      if (openedMap[key] === true) {
        setOpenedMap((obj) => {
          return { ...obj, [key]: false };
        });
      }
    });
    setOpenedMap((obj) => {
      return { ...obj, [index]: state };
    });
  });

  return (
    <main>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion
                key={question.id}
                {...question}
                showInfo={openedMap[question.id]}
                onQuestionToggle={updateOpenedMapOnToggle}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
