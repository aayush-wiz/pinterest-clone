import "./postInteractions.css";
import Image from "../image/Image";

const PostInteractions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="react" />
        273
        <Image path="/general/share.svg" alt="share" />
        <Image path="/general/more.svg" alt="more" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
