import { useEffect, useRef, useState } from "react";

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);

  const [rotationAnimation, setRotationAnimation] = useState(0);

  //   const [stickingRect, setStickingRect] = useState<DOMRect | null>(null);

  const handleMouseMove = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.dataset.interact === "true") {
      setRotation((prevRotation) => prevRotation + 360);

      setTimeout(() => {
        clearInterval(rotationAnimation);
      }, 200);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <img
        src="/cursors/arrow.svg"
        alt="cursor"
        className="absolute z-50 pointer-events-none w-8 h-8 origin-top-left transition-transform ease-in-out"
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
