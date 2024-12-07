import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DietaryPlan from "./DietaryPlan";
import Feedback from "./Feedback";
import Subscription from "./Subscription";


function Orders() {
  return <h1>Orders Page</h1>; // Placeholder component
}


function Payment() {
  return <h1>Payment Page</h1>; // Placeholder component
}

function Home() {
  return <h1>Welcome to the Home Page</h1>; // Placeholder component
}

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dietary-plan" element={<DietaryPlan />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/subscriptions" element={<Subscription />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
