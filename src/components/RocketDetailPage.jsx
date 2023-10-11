import { useContext } from "react";
import "../App.css";
import { DataContext } from "../context/DataContext";

export default function RocketDetailPage() {
  const { rocketsDataContext } = useContext(DataContext);
  return (
    <div className="rocket">
      <div className="rocket__container">
        <div className="rocket__img">
          <img
            src={rocketsDataContext[0]?.flickr_images[0]}
            alt={rocketsDataContext[0]?.name}
          />
          <div className="rocket__title">{rocketsDataContext[0]?.name}</div>
        </div>
        <div className="rocket__content">
          <div className="rocket__info">
            <p>{rocketsDataContext[0]?.description}</p>
            <div className="rocket__specs">
              <p>height: {rocketsDataContext[0]?.height.meters} meters</p>
              <p>diameter: {rocketsDataContext[0]?.diameter.meters} meters</p>
              <p>mass: {rocketsDataContext[0]?.mass.kg} kg</p>
              <p>first flight: {rocketsDataContext[0]?.first_flight}</p>
              <p>active: {rocketsDataContext[0]?.active ? "yes" : "no"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
