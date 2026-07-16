export default function EmployeeListItem({ name, title, image }) {
  return (
    <article className="employee-list-item">
      {image && (
        <img
          className="employee-image"
          src={image}
          alt={`${name} profile`}
        />
      )}

      <div className="employee-information">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </article>
  );
}