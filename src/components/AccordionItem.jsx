import { BsDashCircleFill, BsFillPlusCircleFill } from "react-icons/bs";

export default function AccordionItem({
  num,
  title,
  curOpen,
  onOpen,
  children,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`border boxShadow-md text-[#54595F] ${
        isOpen ? "" : ""
      } transition-all duration-500 ease-in-out mb-5`}
      onClick={handleToggle}
    >
      <div className="flex items-center justify-between px-5 py-4 cursor-pointer">
        <span className="text-[18px] md:text-[21px] leading-[1] font-semibold">
          {title}
        </span>
        <span className="text-[20px] md:text-[25px] font-medium">
          {isOpen ? (
            <BsDashCircleFill color="#000033" />
          ) : (
            <BsFillPlusCircleFill color="#000033" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="px-5 pt-4 pb-5 text-[16px] leading-7 border-t">
          {children}
        </div>
      )}
    </div>
  );
}
