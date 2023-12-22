import Comment from "./Comment";
import Titles from "./Titles";

export default function Testemonial() {
  return (
    <main className="mt-10">
      <Titles 
        titles="Depoimentos"
      />
      <div className="flex justify-around gap-7 flex-wrap">
        <Comment
          commentImage="/imageDepoiment.jpg"
          commentName="Nanda Paes"
          commentProfession="Designer no google"
          commentText="é um profissional atencioso, dedicado e competente. Ele se 
            mostrou sempre disponível para esclarecer minhas dúvidas e atender às minhas
            necessidades. Também gostei do fato de ele trabalhar com uma equipe de 
            profissionais experientes e qualificados."
        />

        <Comment
          commentImage="/imageDepoiment.jpg"
          commentName="Nanda Paes"
          commentProfession="Designer no google"
          commentText="é um profissional atencioso, dedicado e competente. Ele se 
            mostrou sempre disponível para esclarecer minhas dúvidas e atender às minhas
            necessidades. Também gostei do fato de ele trabalhar com uma equipe de 
            profissionais experientes e qualificados."
        />

        <Comment
          commentImage="/imageDepoiment.jpg"
          commentName="Nanda Paes"
          commentProfession="Designer no google"
          commentText="é um profissional atencioso, dedicado e competente. Ele se 
            mostrou sempre disponível para esclarecer minhas dúvidas e atender às minhas
            necessidades. Também gostei do fato de ele trabalhar com uma equipe de 
            profissionais experientes e qualificados."
        />

        <Comment
          commentImage="/imageDepoiment.jpg"
          commentName="Nanda Paes"
          commentProfession="Designer no google"
          commentText="é um profissional atencioso, dedicado e competente. Ele se 
            mostrou sempre disponível para esclarecer minhas dúvidas e atender às minhas
            necessidades. Também gostei do fato de ele trabalhar com uma equipe de 
            profissionais experientes e qualificados."
        />

        <Comment
          commentImage="/imageDepoiment.jpg"
          commentName="Nanda Paes"
          commentProfession="Designer no google"
          commentText="é um profissional atencioso, dedicado e competente. Ele se 
            mostrou sempre disponível para esclarecer minhas dúvidas e atender às minhas
            necessidades. Também gostei do fato de ele trabalhar com uma equipe de 
            profissionais experientes e qualificados."
        />
        
      </div>
      <div className="border-middleLight dark:border-middleDark my-8 border-t-2" />
    </main>
  )
}
