import { IReview } from 'interfaces';
import styles from './MovieReviews.module.css';

export default function MovieReviewsItem({ author, content }: IReview) {
  return (
    <li className={styles.review}>
      <h3 className={styles.author}>author: {author}</h3>
      <p className={styles.text}>review:{content}</p>
    </li>
  );
}
