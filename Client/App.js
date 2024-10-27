import React from "react";
import TicketForm from "./components/TicketForm";
import TicketList from "./components/TicketList";

const App = () => {
  const addTicketHandler = async (ticket) => {
    const res = await fetch("/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
    const data = await res.json();
    console.log("Ticket Added:", data);
  };

  return (
    <div>
      <h1>Local Transportation Ticketing System</h1>
      <TicketForm onAdd={addTicketHandler} />
      <TicketList />
    </div>
  );
};

export default App;
