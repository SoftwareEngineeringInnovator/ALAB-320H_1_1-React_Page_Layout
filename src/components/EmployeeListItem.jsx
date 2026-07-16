export default function EmployeeListItem({ name, title, image }) {
    return (
        <article className="employee-list-item">
        <img classNmae="employee-imge" src={image} alt={'${name} profile'}/>
        
        <div className="employee-information">
            <h2>{name}</h2>
            <p>{tittle}</p>
        </div>
        </article>
    );
}