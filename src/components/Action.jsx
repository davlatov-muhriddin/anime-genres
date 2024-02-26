import React, { useContext, useEffect, useState } from "react";
import AnimeContext from "../context/AnimeContext";

function Action() {
  const [actions, setActions] = useState([]);
  const anime = useContext(AnimeContext);

  useEffect(() => {
    const actionAnime = anime.filter(
      (item) => item.genres.toLowerCase() == "action"
    );
    setActions(actionAnime);
  }, []);

  return (
    <div className="py-3">
      <h1 className="font-bold text-4xl mb-5 text-center">Actions</h1>
      <div className="flex gap-3 flex-wrap justify-center">
        {actions &&
          actions.map((item) => (
            <div
              key={item.id}
              className="w-[350px] overflow-hidden rounded-md border-2 border-slate-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px]"
              />
              <div className="p-2">
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <p>{item.genres}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Action;
