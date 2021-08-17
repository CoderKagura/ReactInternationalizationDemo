import React, { Component } from "react";
import intl from "react-intl-universal";

const IntlTestTable = ({ list }) => {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">{intl.get("TABLECOL.NAME")}</th>
          <th scope="col">{intl.get("TABLECOL.AGE")}</th>
          <th scope="col">{intl.get("TABLECOL.MONEY")}</th>
          <th scope="col">{intl.get("TABLECOL.BIRTHDAY")}</th>
        </tr>
      </thead>
      <tbody>
        {list.length &&
          list.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{intl.get("AGE.FORMAT", { age: item.age })}</td>
              <td>{intl.get("PRICE.FORMAT", { price: item.money })}</td>
              <td>
                {intl.get("DATE.FORMAT", {
                  date: new Date(item.date),
                })}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default IntlTestTable;
