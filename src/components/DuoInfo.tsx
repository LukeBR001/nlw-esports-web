interface Props {
    label: string 
    value:string
    colorValue?: string
}

export function DuoInfo({colorValue = "text-white", ...props}:Props) {
  return (
    <div>
      <span className="text-zinc-300 block">{props.label}</span>
      <strong className={"font-bold " + colorValue}>{props.value}</strong>
    </div>
  );
}
