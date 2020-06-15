
export default function useFuncsUtils() {
   

   function formatedDate (props) {

            const date = props.slice(0,10)
            const ano = date.split("-")[0]
            const mes = date.split("-")[1]
            const dia = date.split("-")[2]
            return dia + "/" + mes + "/" + ano 
   }

   return {formatedDate}
}