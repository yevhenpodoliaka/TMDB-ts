import style from "./MovieDetails.module.css"
import defaultPoster from "images/no-poster.jpg";

interface IProps{
    production_companies: {
    logo_path: string;
    name: string;
    origin_country: string;
    }[]
}

const MoviesCompany = ({ production_companies }: IProps) => {
     
  return ( <ul className={style.companiesWrap}>
              {production_companies.map(({logo_path,name,origin_country})=>{
                  return <li key={name} className={style.companyCard}>
                            <img  src={logo_path? `https://image.tmdb.org/t/p/w500/${logo_path}`
                    :            `${defaultPoster}`}alt=" movies poster"/>
                      <p className={style.companyName}>{name} </p>
                      <p className={style.companyCountry}>{origin_country}</p>
                  </li>
              })} 
      </ul>
  )
}

export default MoviesCompany
