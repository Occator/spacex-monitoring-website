import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

export default function RocketDetailPage() {
  const { rocketsDataContext } = useContext(DataContext);
  const params = useParams();
  const rocket = rocketsDataContext?.find((rocket) => rocket.id === params.id);
  console.log("rocketParams", rocket);
  return (
    <div className="rocket">
      <div className="rocket__container">
        <div className="rocket__img">
          <img src={rocket?.flickr_images[0]} alt={rocket?.name} />
          <div className="rocket__title">{rocket?.name}</div>
        </div>
        <div className="rocket__content">
          <div className="rocket__info">
            <p>{rocket?.description}</p>
            <div className="rocket__specs">
              <p>height: {rocket?.height.meters} meters</p>
              <p>diameter: {rocket?.diameter.meters} meters</p>
              <p>mass: {rocket?.mass.kg} kg</p>
              <p>first flight: {rocket?.first_flight}</p>
              <p>{rocket?.active ? "active" : "inactive"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
