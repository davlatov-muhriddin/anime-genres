import React from "react";
import { useState } from "react";
import Action from "./components/Action";
import Fantacy from "./components/Fantacy";
import Romantic from "./components/Romantic";
import AnimeContext from "./context/AnimeContext";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://avatars.mds.yandex.net/i?id=6ec1a906239ad98231e0d7f404a07a79b2eb4641-10702829-images-thumbs&n=13",
      title: "Naruto",
      genres: "Action",
    },
    {
      id: 2,
      image:
        "https://avatars.mds.yandex.net/i?id=7271ee756014fa07923975378c67fc63191c369d-10868638-images-thumbs&n=13",
      title: "Demon Slayer",
      genres: "Fantacy",
    },
    {
      id: 3,
      image:
        "https://avatars.mds.yandex.net/i?id=c1da3b30d6e490e663d8e2e75aafa0bf1381194a-8497314-images-thumbs&n=13",
      title: "Fly me to the moon",
      genres: "Romantic",
    },
    {
      id: 4,
      image:
        "https://avatars.mds.yandex.net/i?id=82f27b28a99118ddd78bed941792ce265d20c054-10727469-images-thumbs&n=13",
      title: "Attack on titan",
      genres: "Action",
    },
    {
      id: 5,
      image:
        "https://staticg.sportskeeda.com/editor/2022/05/50cfd-16539303352430-1920.jpg",
      title: "Jujutsu kaisen",
      genres: "Fantacy",
    },
    {
      id: 6,
      image:
        "https://avatars.mds.yandex.net/i?id=2470ea196eef4c7aee94b2cf55657319197a4540-10159322-images-thumbs&n=13",
      title: "angel next door",
      genres: "Romantic",
    },
    {
      id: 7,
      image:
        "https://avatars.mds.yandex.net/i?id=34ca52f2232cb134de805d91c034ff1ce5ff1e2e-11395806-images-thumbs&n=13",
      title: "My hero academiya",
      genres: "Action",
    },
    {
      id: 8,
      image:
        "https://avatars.mds.yandex.net/i?id=34ba38ef6e158dfef73c43aca12bee4fdd2d4bc4-11538780-images-thumbs&n=13",
      title: "Black Clover",
      genres: "Fantacy",
    },
    {
      id: 9,
      image:
        "https://avatars.mds.yandex.net/i?id=a9af5c56fc3d580fe41eb24e87bd5e7b95c3d1f4-6945470-images-thumbs&n=13",
      title: "you lie in april",
      genres: "Romantic",
    },
  ]);
  return (
    <div>
      <AnimeContext.Provider value={data}>
        <Action />
        <Fantacy />
        <Romantic />
      </AnimeContext.Provider>
    </div>
  );
}

export default App;
