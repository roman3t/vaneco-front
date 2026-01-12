export type WorkItem = {
  slug: string;
  title: string;
  subtitle: string;
  color: string; // background card
  heroImage?: string; // luego usarás next/image
};

export const WORK: WorkItem[] = [
  { slug: "mikkeller", title: "Mikkeller", subtitle: "CMO as a service", color: "#F2B8AE" },
  { slug: "tandem", title: "Tandem", subtitle: "Built around you", color: "#E9E3DA" },
  { slug: "pokalen", title: "Pokalen", subtitle: "Celebrating the cup", color: "#0B1434" },
  { slug: "oktogird", title: "Oktogird", subtitle: "Stable energy supply", color: "#0E1F1C" },
  { slug: "goodhabitco", title: "GoodHabitCo.", subtitle: "Don't change. Upgrade", color: "#F4F1EA" },
];
