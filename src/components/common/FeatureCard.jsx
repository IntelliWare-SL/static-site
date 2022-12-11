const FeatureCard = ({title, content}) => {
  return (
    <div className="custom-card py-4 px-5">
      <h2>{title}</h2>
      <p className="m-0 py-1">{content}</p>
    </div>
  );
}

export default FeatureCard;
