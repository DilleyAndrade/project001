import { useContext } from "react";
import Comment from "./Comment";
import Titles from "./Titles";
import { LangContext } from "@/context/langContext";
import { commentList } from "./listComment";

import {motion} from 'framer-motion'

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
      
      <motion.div 
        initial={{opacity:0, y:50}} 
        whileInView={{opacity:1, y:0}} 
        transition={{duration: .5}} 
        className="flex justify-around gap-9 mt-8 lg:mt-0 flex-wrap"
      >
        {commentList.map((comment)=>(
          <Comment
          key={comment.commentName}
          commentImage={comment.commentImage}
          commentName={comment.commentName}
          commentProfession={comment.commentProfession}
          commentText={comment.commentText}
        />
        ))}
      </motion.div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </main>
  )
}
