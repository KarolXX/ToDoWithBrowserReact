import React, { useState } from "react";

const Browser = ({ tasksList, setTasksList }) => {
  const [searchTask, setSearchTask] = useState("");

  const inputSearchHandler = (e) => {
    setSearchTask(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    tasksList.map((task) => {
      //   const words = task.content.split(" ");
      //   for (let n = 0; n < words.length; n++) {
      //     if (words[n] === searchTask) {
      //       const tasksUlList = document.getElementsByClassName("#tasksWrapper");
      //       console.log(tasksUlList);
      //       //tasksUlList.removeChild(tasksUlList.childNodes[0]);
      //     }
      //   }

      return task;
    });
    // let str = "kar ol";
    // let re = /(\w+)\s(\w+)/;
    // console.log(re.test(str));
    const text =
      "the colors of the rainbow have many colours but not a single colour ";
    const regularExpression = /colou?rs?/;
    console.log(regularExpression.test(text));
  };

  return (
    <section className="browser">
      <h2 className="browser__title">Browser</h2>
      <form className="form">
        <input
          className="form__input"
          type="text"
          onChange={(e) => inputSearchHandler(e)}
        ></input>
        <button
          className="form__button"
          type="submit"
          onClick={(e) => submitSearchHandler(e)}
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Browser;
