import {
  RiArchiveDrawerLine as Drawer,
  RiArchiveDrawerFill as DrawerFill
} from "react-icons/ri";

import {
  GiOpenTreasureChest as TreasureChest,
  GiLockedChest as LockedChest,
  GiOpenChest as UnlockedChest,
  GiChest as TreasureLocked
} from "react-icons/gi";

import {
  ImDrawer2 as ShortDrawer,
  ImDrawer as ShortDrawerFill
} from "react-icons/im";

const Chest = () => {
  return (
    <div className="pattern-chests">
      {LockedChest({
        color: "rgba(249, 246, 238, 1)",
        size: "3rem",
        className: "locked-chest-left"
      })}
      {TreasureLocked({
        color: "rgba(249, 246, 238, 1)",
        size: "3.33rem",
        className: "treasure-locked"
      })}
      {LockedChest({
        color: "rgba(249, 246, 238, 1)",
        size: "3rem",
        style: { transform: "scaleX(-1)" },
        className: "locked-chest-right"
      })}
    </div>
  );
};

export default Chest;
