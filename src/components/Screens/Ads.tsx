import * as Dialog from "@radix-ui/react-dialog";

import { CreateAdBanner } from "../CreateAdBanner";
import { GameBanner } from "../GameBanner";
import { AdBanner, AdBannerProps } from "../AdBanner";

import bannerImg from "../../../public/game-1.png";
import { CreateAdModal } from "../CreateAdModal";
import axios from "axios";
import { useEffect, useState } from "react";

export function Ads(gameId: string) {
  const [ads, setAds] = useState<AdBannerProps[]>([]);

  try {
    useEffect(() => {
      axios.get(`http://localhost:3333/games/4ca4ec1d-239c-4280-bbd2-1eecd9bdaa21/ads`).then((response) => {
        setAds(response.data);
        console.log(response.data)
      });
    }, []);

  } catch (err) {
    alert("Erro ao mostrar anúncios!");
  }

  return (
    <div className="max-w-[1480px] mx-auto my-20 flex flex-col items-center">
      <div className="flex items-center justify-between">
        <img
          src={bannerImg}
          className="w-[500px] h-60 object-cover rounded-md shadow-lg shadow-black/30 "
        />
        <h1 className="font-bold text-white text-6xl ml-20">
          League of Legends
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-8 mt-16 w-full">
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

      <div className="w-full">
        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}
