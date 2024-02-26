import React, { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";

function Fantacy() {
  const [fantacy, setFantacy] = useState([]);
  const anime = useContext(AnimeContext);

  useEffect(() => {
    const fantacyAnime = anime.filter(
      (item) => item.genres.toLowerCase() == "fantacy"
    );
    setFantacy(fantacyAnime);
  }, []);

  return (
    <div className="pt-3">
      <h1 className="font-bold text-4xl text-center">Fantacy</h1>
      <div className="flex flex-col items-center gap-6 pt-6">
        {fantacy &&
          fantacy.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-9 rounded-md border-2 border-slate-500 w-[70vw]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-1/2 h-[350px]"
              />
              <div>
                <h2 className="text-6xl font-bold mb-3">{item.title}</h2>
                <p className="text-3xl">{item.genres}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Fantacy;
