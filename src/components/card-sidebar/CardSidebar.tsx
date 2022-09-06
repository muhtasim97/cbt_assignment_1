import { Link } from "react-router-dom";
import PostCard from "../post-card/PostCard";
import PersonCard from "../person-card/PersonCard";
import "./CardSidebar.scss";
import header_image_1 from "../../images/post-card/fox.png";
import header_image_2 from "../../images/post-card/bird.png";
import avatar_image from "../../images/person-card/Avatar 4.png"
import bodyimage_1 from "../../images/person-card/Image.png"
import bodyimage_2 from "../../images/person-card/image-2.png"


const CardSidebar = () => {
  return (
    <div className="p-sidebar">
      <div className="p-sidebar__header-post">
        <div className="p-sidebar__header-post__header-1">
          <p className="p-sidebar__header-post__header-1__header">
            Scheduled Posts
          </p>
        </div>
        <div className="p-sidebar__header-post__add-post">
          <Link className="p-sidebar__header-post__add-post__link" to="">
            Add Post
          </Link>
        </div>
      </div>
      <div className="p-sidebar__post-card">
        <PostCard
          header_image={header_image_1}
          header="For fox sake!"
          platform="Instagram"
          date="13 March 2022"
        />
        <PostCard
          header_image={header_image_2}
          header="Feeling good-natured"
          platform="Instagram"
          date="13 March 2022"
        />
      </div>
      <div className="p-sidebar__header-2">
        <p className="p-sidebar__header-2__header">Activities</p>
      </div>
      <div className="p-sidebar__person-card">
        <PersonCard
          person_image={avatar_image}
          person_name="Thomas Fletcher"
          body_paragraph="Great work deserves appreciations. This is so amazing! 😍🎉"
          body_image={bodyimage_1}
        />
         <PersonCard
          person_image={avatar_image}
          person_name="Thomas Fletcher"
          body_paragraph="Great work deserves appreciations. This is so amazing! 😍🎉"
          body_image={bodyimage_2}
        />
      </div>
    </div>
  );
};
export default CardSidebar;
