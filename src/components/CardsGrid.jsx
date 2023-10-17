import "../App.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function CardsGrid() {
  const { launchesDataContext, rocketsDataContext, launchpadsDataContext } =
    useContext(DataContext);
  const params = useParams();
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [launchStatus, setLaunchStatus] = useState("");

  useEffect(() => {
    switch (params.status) {
      case "success":
        setFilteredLaunches(
          launchesDataContext.filter(
            (status) => status.success === null || status.success === true
          )
        );
        setLaunchStatus("success");
        break;
      case "failed":
        setFilteredLaunches(
          launchesDataContext.filter((status) => status.success === false)
        );
        setLaunchStatus("failed");
        break;
      case "upcoming":
        setFilteredLaunches(
          launchesDataContext.filter(
            (status) => status.upcoming === null || status.upcoming === true
          )
        );
        setLaunchStatus("upcoming");
        break;
      default:
        setFilteredLaunches(launchesDataContext);
        break;
    }
  }, [params]);

  console.log("### filteredLaunches ###", filteredLaunches);
  return (
    <section className="cards__grid">
      {filteredLaunches?.map((launchInfo, index) => (
        <Card
          launches={filteredLaunches}
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
          launchStatus={launchStatus}
        />
      ))}
    </section>
  );
}
