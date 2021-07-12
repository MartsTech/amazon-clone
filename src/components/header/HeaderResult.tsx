interface HeaderResultProps {}

const HeaderResult: React.FC<HeaderResultProps> = ({}) => {
  return (
    <div
      className="flex items-center transition-colors duration-200
    cursor-pointer hover:bg-gray-100"
    >
      <div className="w-24 pb-12 bg-white flex relative">
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="object-contain p-1 absolute"
          src={
            "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
          }
          alt="product"
        />
      </div>
      <span className="overflow-hidden p-4 pl-2 flex-shrink">
        <p
          className="whitespace-nowrap overflow-ellipsis overflow-hidden
        w-11/12 text-sm font-medium"
        >
          {"White Gold Plated Princess"}
        </p>
        <small
          className="text-sm whitespace-nowrap overflow-ellipsis
        overflow-hidden w-full block opacity-70"
        >
          {
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..."
          }
        </small>
      </span>
    </div>
  );
};

export default HeaderResult;
