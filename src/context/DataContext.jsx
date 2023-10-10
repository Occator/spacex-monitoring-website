import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const [launchesDataContext, setLaunchesDataContext] = useState([]);
  const [rocketsDataContext, setRocketsDataContext] = useState([]);
  const [launchpadsDataContext, setLaunchpadsDataContext] = useState([]);

  const launchesURL = "https://api.spacexdata.com/v5/launches";
  const rocketsURL = "https://api.spacexdata.com/v4/rockets";
  const launchpadsURL = "https://api.spacexdata.com/v4/launchpads";

  const fetchHelperFunction = async (url) => {
    try {
      const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      switch (url) {
        case launchesURL:
          setLaunchesDataContext(data);
          break;
        case rocketsURL:
          setRocketsDataContext(data);
          break;
        case launchpadsURL:
          setLaunchpadsDataContext(data);
          break;
        default:
          return data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHelperFunction(launchesURL);
    fetchHelperFunction(rocketsURL);
    fetchHelperFunction(launchpadsURL);
  }, []);

  return (
    <DataContext.Provider
      value={{
        launchesDataContext,
        rocketsDataContext,
        launchpadsDataContext,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
