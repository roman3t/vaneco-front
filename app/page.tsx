import { WorkStrip } from "@/components/WorkStrip";
import { SITE } from "./content/site";
import { HOME } from "./content/home";

export default function HomePage() {
  return (
    <main style={{ maxHeight: "100vh", paddingTop: 90 }}>
      <section style={{ padding: "0 18px" }}>
        <div className="max-w-2xl mt-10 ml-10 ">
          <h1 className="text-4xl">{HOME.title}</h1>
          <p className="text-2xl">{HOME.preview}</p>
        </div>
      </section>

      <WorkStrip />
    </main>
  );
}
