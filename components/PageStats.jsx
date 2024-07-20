import {
  faCommentDots,
  faBookOpen,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PageStats() {
  return (
    <div className="page-stats">
      <div className="stats-creators">
        <h2>
          <FontAwesomeIcon icon={faPen} />
          27.5k
        </h2>
        <p>CREATORS</p>
      </div>
      <div className="stats-creators">
        <h2>
          <FontAwesomeIcon icon={faCommentDots} />
          32.1k
        </h2>
        <p>COMICS</p>
      </div>
      <div className="stats-creators">
        <h2>
          <FontAwesomeIcon icon={faBookOpen} />
          8.9k
        </h2>
        <p>REARDS</p>
      </div>
    </div>
  );
}
