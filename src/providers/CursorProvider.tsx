import { useEffect, useRef, useState } from "react";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const baseRotation = -45;
  const [rotation, setRotation] = useState(0);
  const stickingElement = useRef(null as HTMLElement | null);

  //   const [stickingRect, setStickingRect] = useState<DOMRect | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
    const element = document.elementFromPoint(
      event.clientX,
      event.clientY
    ) as HTMLElement;
    if (element.dataset.stick === "true") {
      stickingElement.current = element;
    }

    if (stickingElement.current) {
      const rect = stickingElement.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const centerX = rect.left + rect.width / 2;

      const xDistanceFromBorder = Math.min(
        Math.abs(event.clientX - rect.left),
        Math.abs(event.clientX - rect.right)
      );
      const yDistanceFromBorder = Math.min(
        Math.abs(event.clientY - rect.top),
        Math.abs(event.clientY - rect.bottom)
      );

      if (xDistanceFromBorder > 45 || yDistanceFromBorder > 45) {
        stickingElement.current = null;
        setRotation(0);
      } else {
        const xDistance = event.clientX - centerX;
        const yDistance = event.clientY - centerY;
        const angle =
          baseRotation + Math.atan2(yDistance, xDistance) * (180 / Math.PI);
        setRotation(angle);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <img
        src="/cursors/arrow.svg"
        alt="cursor"
        className="absolute z-50 pointer-events-none w-8 h-8 origin-top-left"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      />
      {children}
    </div>
  );
}
