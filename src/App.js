import React, { useState } from "react";
import ContactList from "./components/addContact/ContactList";
import Section from "./components/addContact/Section";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  let [todos, setTodos] = useState([]);

  console.log(todos);

  // функция котороя обновлять состояние todos принимает task который получает из дочернего компонента AddTodo
  function handleTask(newObj) {
    // копируем все что есть в todos до этого
    let newTodos = [...todos];
    // добавляем новый таск (обьект )в массив newTodos
    newTodos.push(newObj);
    // обновляем состояние todos на актуальные данные
    setTodos(newTodos);
  }
  return (
    <div>
      <Header />

      <Section handleTask={handleTask} />
      <ContactList todos={todos} />
      <Footer />
    </div>
  );
};

export default App;
