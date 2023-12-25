import { useContext } from "react";
import Comment from "./Comment";
import Titles from "./Titles";
import { LangContext } from "@/context/langContext";
import { commentList } from "./listComment";

export default function Testemonial() {

  const { isEnglish } = useContext(LangContext)

  const allComments = commentList

  return (
    <main className="mt-10">
      <div className="flex justify-center">
        <Titles 
          titles={isEnglish ? 'Comments' : 'Comentários'}
        />
      </div>
      
      <div className="flex justify-around gap-7 flex-wrap">
        {commentList.map((comment)=>(
          <Comment
          key={comment.commentName}
          commentImage={comment.commentImage}
          commentName={comment.commentName}
          commentProfession={comment.commentProfession}
          commentText={comment.commentText}
        />
        ))}
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </main>
  )
}
