import "./PostCard.scss";
import React from "react";
import three_dot from "../../images/post-card/more.png";
interface Props {
  header_image: string;
  header: string;
  platform: string;
  date: string;
}
const PostCard: React.FC<Props> = ({
  header_image,
  header,
  platform,
  date,
}) => {
  return (
    <div className="p-post-card">
      <div className="p-post-card__header-image">
        <img
          className="p-post-card__header-image__image"
          src={header_image}
          alt=""
        />
      </div>
      <div className="p-post-card__body">
        <div className="p-post-card__body__header-more">
          <p className="p-post-card__body__header-more__header">{header}</p>
          <div className="p-post-card__body__header-more__more">
            <img
              className="p-post-card__body__more__image"
              src={three_dot}
              alt="three_dot"
            />
          </div>
        </div>
        <div className="p-post-card__body__extended">
          <div className="p-post-card__body__extended__label-platform">
            <p className="p-post-card__body__extended__label-platform__label">
              Posted on
            </p>
            <p className="p-post-card__body__extended__label-platform__platform">
              {platform}
            </p>
          </div>
          <div className="p-post-card__body__extended__label-date">
            <p className="p-post-card__body__extended__label-date__label">Posting Date</p>
            <p className="p-post-card__body__extended__label-date__date">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
