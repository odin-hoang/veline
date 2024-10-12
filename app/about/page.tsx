import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1
        className={title({
          color: "foreground",
        })}
      >
        About
      </h1>
    </div>
  );
}
