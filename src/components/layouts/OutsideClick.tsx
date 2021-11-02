import { useEffect, useRef } from "react";

interface OutsideClickProps {
  opened: boolean;
  onClose: () => void;
}

const OutsideClick: React.FC<OutsideClickProps> = ({
  opened,
  onClose,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (opened && ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [opened, onClose]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClick;
