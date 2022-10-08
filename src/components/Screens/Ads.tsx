import * as Dialog from "@radix-ui/react-dialog";

import { CreateAdBanner } from "../CreateAdBanner";
import { AdBanner, AdBannerProps } from "../AdBanner";

import bannerImg from "../../../public/game-1.png";
import { CreateAdModal } from "../CreateAdModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Ads() {
  const [ads, setAds] = useState<AdBannerProps[]>([]);

  const location = useLocation();
  const { gameTitle, gameId, bannerUrl } = location.state;

  try {
    useEffect(() => {
      axios
        .get(`http://localhost:3333/games/${gameId}/ads`)
        .then((response) => {
          setAds(response.data);
          console.log(response.data);
        });
    }, []);
  } catch (err) {
    alert("Erro ao mostrar anúncios!");
  }

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={bannerUrl}
          className="w-[25rem] h-56 object-cover rounded-md shadow-2xl shadow-black/25 "
        />
        <h1 className="font-bold text-white bg-nlw-gradient bg-clip-text text-6xl mt-12 p-2">
          {gameTitle}
        </h1>
      </div>
      
      {ads.length == 0 ? (
        <p className="font-bold text-zinc-400 text-lg m-20">
          Nenhum anúncio publicado para este game!
        </p>
      ) : ( 
        <div className="grid grid-cols-6 gap-5 mt-16 w-full">
          {ads.map((ad) => {
            return (
              <AdBanner
                id={ad.id}
                name={ad.name}
                yearsPlaying={Number(ad.yearsPlaying)}
                discord={ad.discord}
                weekDays={ad.weekDays.map(Number)}
                hourStart={ad.hourStart}
                hourEnd={ad.hourEnd}
                useVoiceChannel={ad.useVoiceChannel}
                key={ad.id}
              />
            );
          })}
        </div>
      )}

      <div className="w-full">
        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}
