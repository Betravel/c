import { useSelector } from "react-redux";

function RecapEvent() {
  const event = useSelector((state) => state.event.event);

  return (
    <div className="container">
      <div class="card">
        <img
          src="https://res.cloudinary.com/betravel/image/upload/v1647176972/BeTravel/assets/Image_e9917i.jpg"
          alt=""
          width="100%"
        />

        <div class="card-body">
          <img
            src="https://img.icons8.com/android/20/000000/marker.png"
            alt=""
          />
          {event.location}
          <h2>{event.name} </h2>
          <br />
          <br />
          <h5 style={{ textDecoration: "underline", textAlign: "center" }}>
            Recap Reservation
          </h5>

          <p style={{ textAlign: "left" }}>
            Date : &ensp;
            <br />
            <p>{event.date}</p>
          </p>

          <p style={{ textAlign: "left" }}>
            Hour : &ensp;
            <br />
            <p>{event.hour}</p>
          </p>

          <p style={{ textAlign: "left" }}>
            Duration : &ensp;
            <br />
            <p>{event.periode}</p>
          </p>

          <p style={{ textAlign: "left" }}>
            Price : &ensp;
            <br />
            <p style={{ textAlign: "center" }}>{event.price} DT</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecapEvent;
