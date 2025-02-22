import Contact from "./Contact";
import UsefulLinks from "./UsefulLinks";

export default function Footer() {
  return (
    <div className="text-secondary grid grid-cols-1 md:grid-cols-2 gap-8">
      <Contact />
      <UsefulLinks />
    </div>
  );
}
