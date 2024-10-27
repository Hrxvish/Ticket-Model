import React, { useEffect, useState } from "react";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/api/tickets");
      const data = await res.json();
      setTickets(data);
    };
    fetchTickets();
  }, []);

  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket._id}>
          {ticket.from} to {ticket.to} - ${ticket.price}
        </li>
      ))}
    </ul>
  );
};

export default TicketList;
