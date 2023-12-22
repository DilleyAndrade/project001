import Image from "next/image";

interface CommentProps{
  commentText: string
  commentName: string
  commentProfession: string
  commentImage: string
}

export default function Comment({ commentText, commentName, commentProfession, commentImage }:CommentProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-64 bg-middleLight dark:bg-middleDark p-2 rounded-lg">
      <p className="text-textLight dark:text-textDark text-xs text-justify">
        {commentText}
      </p>
      </div>
      <Image className="rounded-tl-3xl rounded-br-3xl" src={commentImage} width={170} height={170} alt="Image comment" />
      <div className="text-center">
        <h5 className="text-textLight dark:text-textDark text-2xl font-bold">
          {commentName}
        </h5>

        <h6 className="text-textLight dark:text-textDark text-base font-bold">
          {commentProfession}
        </h6>
      </div>
      
    </div>
  )
}
