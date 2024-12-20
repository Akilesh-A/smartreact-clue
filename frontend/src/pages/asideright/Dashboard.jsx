import React from 'react';
import '../asideright/Dashboard.css';

function Dashboard() {
  let data = [
    { id: 1, name: "Sales", score: 0, link: "" },
    { id: 2, name: "Expenses", score: 0, link: "" },
    { id: 3, name: "Users", score: 0, link: "" },
    { id: 4, name: "Table Management", score: 0, link: "" },
    { id: 5, name: "Bookings", score: 0, link: "" },
    { id: 6, name: "Table Rate Rule", score: 0, link: "" },
    { id: 7, name: "Supplier", score: 0, link: "" },
    { id: 8, name: "Purchase order", score: 0, link: "" },
    { id: 9, name: "Members", score: 0, link: "" },
    { id: 10, name: "Recipies", score: 0, link: "" },
    { id: 11, name: "Canteen sale", score: 0, link: "" },
  ];

  return (
    <div className="container-fluid">
      <div className="admin-wrap">
        <form className="date-filter-form">
          <div className="row">
            <p className="greeting-text">Hi User !</p>
            <div className="col-md-4 col-lg-2">
              <label htmlFor="date-from" className="form-label">Date From</label>
              <input type="date" id="date-from" className="form-control" />
            </div>
            <div className="col-md-4 col-lg-2">
              <label htmlFor="date-to" className="form-label">Date To</label>
              <input type="date" id="date-to" className="form-control" />
            </div>
            <div className="col-md-2 col-lg-2 filterbtn">
              <button type="submit" className="btn btn-outline-dark">Filter</button>
            </div>
          </div>
          <div className="mt-2">
            <a href="#" className="das-a-p">Today</a>
            <a href="#" className="das-a-p">Last 7 days</a>
            <a href="#" className="das-a-p">Last 30 days</a>
          </div>
        </form>

        <div className="row mt-4">
        <div className="row mt-4">
  {data.map((item) => {
    let bgColors = [
      "#FFCCCC", // Light red
      "#CCE5FF", // Light blue
      "#D4EDDA", // Light green
      "#FFF3CD", // Light yellow
      "#F8D7DA", // Light pink
      "#E2E3E5", // Light gray
      "#D1ECF1", // Light teal
      "#F5C6CB", // Light rose
      "#C3E6CB", // Light lime
      "#B8DAFF", // Light sky blue
      "#FCE8B2", // Light peach
    ];
    let bgColor = bgColors[item.id%bgColors.length];
    // console.log(bgColors);
    

    return (
      <div className="col-md-4 mb-3" key={item.id}>
        <div className="card" style={{ backgroundColor: bgColor }}>
          <div className="card-header dashboard-cardHeadere ">
            <h5>{item.name}</h5>
          </div>
          <div className="card-body">
            <p>Score: {item.score}</p>
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
  })}
</div>


      
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
