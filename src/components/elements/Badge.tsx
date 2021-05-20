interface BadgeProps {
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ count }) => {
  return (
    <span
      className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
            text-center rounded-full text-black font-bold"
    >
      {count}
    </span>
  );
};

export default Badge;
