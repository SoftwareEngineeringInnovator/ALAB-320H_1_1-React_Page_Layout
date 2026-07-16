import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";

export default function Homepage() {
  return (
    <main className="homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </main>
  );
}