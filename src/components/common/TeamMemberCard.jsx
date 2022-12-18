const TeamMemberCard = ({name, role, imgUrl}) => {
  return (
    <div className="team-member-card mb-5 mb-md-0">
      <div className="image-with-role d-flex">
        <div className="media-wrapper">
          <img src={imgUrl} width="100%" height="100%" alt=""/>
        </div>
        <h6 className="member-role mt-1 mb-2 py-0 ps-2 pe-1">{role}</h6>
      </div>
      <h3 className="member-name mt-2 pt-2 mb-0">{name}</h3>

    </div>
  );
}

export default TeamMemberCard;
