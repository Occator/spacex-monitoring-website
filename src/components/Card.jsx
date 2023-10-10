import "../App.css";
import DateIcon from "../components/ui/icons/date-icon";
import AddressIcon from "../components/ui/icons/address-icon";

export default function Card({
  title,
  missionDetail,
  image,
  flightNumber,
  rocketsInfo,
  launchPadInfo,
  launchDate,
}) {
  const formattedLaunchDate = new Date(launchDate).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="rocket name" />
        <h2 className="card__title">{title}</h2>
      </div>
      <div className="card__content">
        {missionDetail === null ? (
          <p className="mission__details">No details available</p>
        ) : (
          <p className="mission__details">{missionDetail}</p>
        )}
        <span className="status upcoming">upcoming</span>
        <div className="launch__details">
          <div className="flight__info">
            <p>{`Flight number: ${flightNumber}`}</p>
            <p>{rocketsInfo[0].name}</p>
          </div>
          <div className="date">
            <div className="date__icon">
              <DateIcon />
            </div>
            <p>{formattedLaunchDate}</p>
          </div>
          <div className="address">
            <div className="address__icon">
              <AddressIcon />
            </div>
            <p>{launchPadInfo[0].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
