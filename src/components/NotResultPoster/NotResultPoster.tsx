interface IProps{
    text:string
}

const NotResultPoster = ({text}:IProps) => {


  return (
      <div style={{ textAlign: "center", height: "100vh" ,backgroundColor:"#f1f1f1"}}>
          <p style={{paddingTop:25}}>За запитом "{text}" не знайдено результатів</p>  </div>
  )
}

export default NotResultPoster
