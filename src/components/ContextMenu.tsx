import useContextMenu from "./useContextMenu";
import { Motion, spring } from "react-motion";

const ContextMenu = ({ menu }: any) => {
  const { xPos, yPos, showMenu } = useContextMenu();
  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: !showMenu ? spring(0) : spring(1) }}
    >
      {(interpolatedStyle: any) => (
        <>
          {showMenu ? (
            <div
              className="absolute rounded p-4 w-50 h-50 bg-gray-700"
              style={{
                top: yPos,
                left: xPos,
                opacity: interpolatedStyle.opacity,
              }}
            >
              {menu}
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  );
};

export default ContextMenu;
