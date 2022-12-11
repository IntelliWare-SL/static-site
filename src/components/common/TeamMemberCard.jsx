const TeamMemberCard = ({name, role, imgUrl}) => {
  return (
    <div className="team-member-card">
      <div className="image-wrapper">
        <img src={imgUrl} width="100%" height="100%" alt=""/>
      </div>
      <h3 className="member-name mt-2 pt-2 mb-0">{name}</h3>
      <h6 className="member-role mt-1 mb-2 py-0">{role}</h6>
    </div>
  );
}

export default TeamMemberCard;
