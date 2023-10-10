import "../App.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Card from "./Card";

export default function CardsGrid() {
  const { launchesDataContext, rocketsDataContext, launchpadsDataContext } =
    useContext(DataContext);

  return (
    <section className="cards__grid">
      {launchesDataContext?.map((launchInfo, index) => (
        <Card
          key={index}
          title={launchInfo.name}
          missionDetail={launchInfo.details}
          image={launchInfo?.links.patch.small}
          flightNumber={launchInfo.flight_number}
          rocketsInfo={rocketsDataContext.filter(
            (rocket) => rocket.id === launchInfo.rocket
          )}
          launchPadInfo={launchpadsDataContext.filter(
            (launchPad) => launchPad.id === launchInfo.launchpad
          )}
          launchDate={launchInfo.date_utc}
        />
      ))}
    </section>
  );
}
