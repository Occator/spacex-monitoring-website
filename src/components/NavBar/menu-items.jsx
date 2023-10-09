// this file holds the menu items

export const menuItems = [
  {
    title: "Rockets",
    url: "/rockets",
    submenu: [
      {
        title: "Falcon 9",
        url: "falcon9",
      },
      {
        title: "Falcon Heavy",
        url: "falcon-heavy",
      },
      {
        title: "Falcon 1",
        url: "falcon1",
      },
      {
        title: "Starship",
        url: "starship",
      },
    ],
  },
  {
    title: "Launches",
    url: "/launches",
    submenu: [
      {
        title: "success",
        url: "success",
      },
      {
        title: "failed",
        url: "failed",
      },
      {
        title: "upcoming",
        url: "/",
      },
    ],
  },
];
