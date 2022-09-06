import "./CardHeader.scss";
import React from "react";


interface Props {
  image: string;
  arrow: string,
  action: string;
  count: string;
  growth: string;
  week: string;
  color: string;
}
const CardHeader: React.FC<Props> = ({
  image,
  arrow,
  action,
  count,
  growth,
  week,
  color,
}) => {
 
  return (
    <section className="p-header-card">
      <div className="p-header-card__image-paragraph">
        <div className="p-header-card__image-paragraph__image">
          <img
            className="p-header-card__image-paragraph__image__custom"
            src={image}
            alt="card_image"
          />
        </div>
        <p className="p-header-card__image-paragraph__paragraph">{action}</p>
      </div>
      <div className="p-header-card__count-growth-week">
        <div className="p-header-card__count-growth-week__count">
          <p className="p-header-card__count-growth-week__count__paragraph">{count}</p>
        </div>
        <div className="p-header-card__count-growth-week__growth-week">
          <div
            className={`p-header-card__count-growth-week__growth-week__growth p-header-card__count-growth-week__growth-week__growth--${color}`}
          >
            <img className="p-header-card__count-growth-week__growth-week__growth__image" src={arrow} alt="arrow_image" />
            <p className="p-header-card__count-growth-week__growth-week__growth__paragraph">
              {growth}
            </p>
          </div>
          <div className="p-header-card__count-growth-week__growth-week__week">
            <p>{week}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardHeader;
