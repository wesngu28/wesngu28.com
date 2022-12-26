interface Props {
  color: string
  tech: string
}

export default function ProjectColor({ color, tech }: Props) {
  return (
    <li class={`m-2 p-1 bg-[${color}] text-black rounded-lg`}>
      <p>{tech}</p>
    </li>
  )
}
