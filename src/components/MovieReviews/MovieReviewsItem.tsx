
import { IReview } from "interfaces";
import style from "./MovieReviews.module.css"

export default function MovieReviewsItem({ author, content }:IReview) {
  return (
    <li className={style.review}>
      <h3 className={style.author}>author: {author}</h3>
      <p className={style.text}>review:{content}</p>
    </li>
  );
}

