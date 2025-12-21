import ClassicBen10 from "../ben10s/ben10";
import Ben10AlienForce from "../ben10s/ben10_alienforce";
import Ben10UltimateAlien from "../ben10s/ben10_ultimatealien";
import Ben10Omniverse from "../ben10s/ben10_omniverse";
import Ben10Reboot from "../ben10s/ben10_reboot";

type Ben10Series = "classic" | "alien-force" | "ultimate-alien" | "omniverse" | "reboot";
type ThumbnailProps = {
  onSelect: (series: Ben10Series) => void;
};

export function Ben10Thumbnails({ onSelect }: ThumbnailProps) {
  return (
    <div className="thumbnail-row">
      <img onClick={() => onSelect("classic")} src="/ben10right.png" />
      <img onClick={() => onSelect("alien-force")} src="/ben10alienforce.jpeg" />
      <img onClick={() => onSelect("ultimate-alien")} src="/ultimate_alien.png" />
      <img onClick={() => onSelect("omniverse")} src="/ben10omniverse.jpg" />
      <img onClick={() => onSelect("reboot")} src="/reboot.jpeg" />
    </div>
  );
}

type LayoutProps = {
  series: Ben10Series | null;
};

export function Ben10Layout({ series }: LayoutProps) {
  if (!series) {
    return <p>Select a Ben 10 universe ⌚</p>;
  }

  switch (series) {
    case "classic":
      return <ClassicBen10 />;

    case "alien-force":
      return <Ben10AlienForce />;

    case "ultimate-alien":
      return <Ben10UltimateAlien/>;

    case "omniverse":
      return <Ben10Omniverse />;

    case "reboot":
      return <Ben10Reboot />;
  }
}

