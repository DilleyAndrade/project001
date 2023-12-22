interface TitlesProps{
  titles: string
}

export default function Titles({titles}:TitlesProps) {
  return (
    <div className="max-w-max mb-10">
      <h2 className="text-textLight dark:text-textDark text-5xl font-bold">{titles}</h2>
      <div className=" w-8/12 border-b-4 border-blueColor mt-3"></div>
    </div>
  )
}
