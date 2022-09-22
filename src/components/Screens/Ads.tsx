import * as Dialog from "@radix-ui/react-dialog";

import { CreateAdBanner } from "../CreateAdBanner";
import { GameBanner } from "../GameBanner";

import bannerImg from "../../../public/game-1.png";
import { CreateAdModal } from "../CreateAdModal";

export function Ads() {
  return (
    <div className="max-w-[1344px] max-h-[775px] mx-auto my-20 flex flex-col items-center justify-between">
      <div className="flex items-center justify-between">
        <img src={bannerImg} className="w-[500px] h-60 object-cover rounded-md shadow-lg shadow-black "/>
        <h1 className="font-bold text-white text-6xl">
            League of Legends
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="1"
          adsCount={3}
        />

        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="2"
          adsCount={3}
        />

        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="3"
          adsCount={3}
        />

        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="4"
          adsCount={3}
        />

        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="5"
          adsCount={3}
        />

        <GameBanner
          title="Game Title"
          bannerUrl={bannerImg}
          key="6"
          adsCount={3}
        />
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  );
}
