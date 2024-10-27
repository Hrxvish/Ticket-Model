import React, { useState } from "react";

const TicketForm = ({ onAdd }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onAdd({ from, to, price });
    setFrom("");
    setTo("");
    setPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        placeholder="From"
        required
      />
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <button type="submit">Add Ticket</button>
    </form>
  );
};

export default TicketForm;
