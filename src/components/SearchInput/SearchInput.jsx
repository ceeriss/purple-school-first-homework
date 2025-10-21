export default function SearchInput({ placeholder, img }) {
  return (
    <div>
      <input
        className="w-[384px] h-[64px] border border-[#323B54] rounded-[12px] bg-[##0000001A] font-[400] text-[14px] leading-[16px] text-[#475069] px-[56px]"
        type="search"
        placeholder={placeholder}
      />
      {img}
    </div>
  );
}
