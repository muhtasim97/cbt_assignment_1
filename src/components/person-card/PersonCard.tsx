import "./PersonCard.scss";
import heart from "../../images/person-card/Frame 69.png"
import back from "../../images/person-card/Frame 70.png"
import three_dot from "../../images/person-card/Frame 71.png"

interface Props {
  person_image: string;
  person_name: string;
  body_paragraph: string;
  body_image: string;
}
const PersonCard: React.FC<Props> = ({
  person_image,
  person_name,
  body_paragraph,
  body_image,
}) => {
  return (
    <div className="p-person-card">
      <div className="p-person-card__body-first">
        <img
          className="p-person-card__body-first__image"
          src={person_image}
          alt="person_image"
        />
        <div className="p-person-card__body-first__name-comment">
          <p className="p-person-card__body-first__name-comment__name">{person_name}</p>
          <p className="p-person-card__body-first__name-comment__comment">Commented your photo</p>
        </div>
      </div>
      <div className="p-person-card__body-middle">
        <p className="p-person-card__body-middle__paragraph">{body_paragraph}</p>
        <div className="p-person-card__body-middle__image">
        <img src={body_image} alt="body_image" />
        </div>
        
      </div>
      <div className="p-person-card__body-last">
        <p className="p-person-card__body-last__paragraph">1 hr ago</p>
        <div className="p-person-card__body-last__images-group">
            <img className="p-person-card__body-last__images-group__image" src={heart} alt="heart_icon" />
            <img className="p-person-card__body-last__images-group__image" src={back} alt="back_icon" />
            <img className="p-person-card__body-last__images-group__image" src={three_dot} alt="dot_icon" />
        </div>
      </div>
    </div>
  );
};
export default PersonCard;
