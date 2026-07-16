import EmployeeListItem from "./EmployeeListItem";

import jamesKing from "../assets/JamesKing.png";
import julieTaylor from "../assets/JulieTaylor.png";
import eugeneLee from "../assets/EugeneLee.png";
import johnWilliams from "../assets/JohnWilliams.png";
import rayMoore from "../assets/RayMoore.png";
import paulJones from "../assets/PaulJones.png";

const employees = [
  {
    name: "James King",
    title: "President and CEO",
    image: jamesKing,
  },
  {
    name: "Julie Taylor",
    title: "VP of Marketing",
    image: julieTaylor,
  },
  {
    name: "Eugene Lee",
    title: "CFO",
    image: eugeneLee,
  },
  {
    name: "John Williams",
    title: "VP of Engineering",
    image: johnWilliams,
  },
  {
    name: "Ray Moore",
    title: "VP of Sales",
    image: rayMoore,
  },
  {
    name: "Paul Jones",
    title: "QA Manager",
    image: paulJones,
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
          image={employee.image}
        />
      ))}
    </section>
  );
}