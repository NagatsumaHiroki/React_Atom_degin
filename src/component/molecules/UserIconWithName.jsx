export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <div>
      <img heigth={160} width={160} src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
