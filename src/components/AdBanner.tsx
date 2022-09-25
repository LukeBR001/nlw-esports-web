import { DuoInfo } from "./DuoInfo";

export interface AdBannerProps {
  id: string;
  name: string;
  hourStart: string;
  hourEnd: string;
  discord: string;
  useVoiceChannel: boolean;
  weekDays: number[];
  yearsPlaying: number;
}

export function AdBanner(props: AdBannerProps) {
  return (
    <div className="flex flex-col gap-4 bg-zinc-700 p-4 rounded-lg">
      <DuoInfo label="Nome" value={props.name} />
      <DuoInfo label="Tempo de jogo" value={props.yearsPlaying.toString() + " ano(s)"} />
      <DuoInfo label="Disponibilidade" value={props.weekDays.length + " dias \u2022 " + props.hourStart + " - " + props.hourEnd} />
      <DuoInfo label="Chamada de áudio?" value={props.useVoiceChannel ? "Sim" : "Não"} colorValue={props.useVoiceChannel ? "text-green-400" : "text-red-400"}/>
    </div>
  );
}
