import EmployeeListItem from "./EmployeeListItem";

const employees = [
  {
    name: "James King",
    title: "President and CEO",
  },
  {
    name: "Julie Taylor",
    title: "VP of Marketing",
  },
  {
    name: "Eugene Lee",
    title: "CFO",
  },
  {
    name: "John Williams",
    title: "VP of Engineering",
  },
  {
    name: "Ray Moore",
    title: "VP of Sales",
  },
  {
    name: "Paul Jones",
    title: "QA Manager",
  },
];

export default function EmployeeList() {
  return (
    <section className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItem
          key={employee.name}
          name={employee.name}
          title={employee.title}
        />
      ))}
    </section>
  );
}