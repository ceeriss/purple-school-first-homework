export default function Button ({btnText}) {
  const Clicked = (e) => {
    e.preventDefault();
    console.log(e.target)
  }
	return (
    <button
      onClick={Clicked}
      className="w-[119px] h-[58px] bg-[#7B6EF6] p-[16px 32px] border border-none rounded-[12px] font-[Poppins] text-[16px] leading-[24px] font-[400] text-[#FFFFFF] mt-[3px] cursor-pointer"
    >
      {btnText}
    </button>
  );
}	