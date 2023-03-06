import React from "react";
import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div>
      <table className="nana">
        <thead>
          <tr>
            <th width="1250px">Имя</th>
            <th width="1250px">Фамилия</th>
            <th width="1250px">Возраст</th>
          </tr>
        </thead>

        <tbody>
          {props.todos.map((item) => (
            <tr key={item.id}>
              <td className="td" width="1250px">
                {item.name}
              </td>
              <td className="td" width="1250px">
                {item.surname}
              </td>
              <td className="td" width="1250px">
                {item.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
