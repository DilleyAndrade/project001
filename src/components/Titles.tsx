interface TitlesProps{
  titles: string
  titleDetail: string
}

export default function Titles({titles, titleDetail}:TitlesProps) {
  return (
    <div className=" text-blueColor text-center mb-10">
      <h2 className=" text-4xl sm:text-5xl font-bold">{titles}</h2>
      <p className="text-textLight dark:text-textDark text-xl mt-1 font-light">{titleDetail}</p>
      <div className="w-8/12 border-b-4 border-blueColor mt-3"></div>
    </div>
  )
}
