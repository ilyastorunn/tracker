export default function signUpBtn() {
  return (
    <div className="p-[2px] rounded-[16px] bg-gradient-to-r from-[#4FD1C5] to-[#F7FAFC] inline-block">
      <button
        type="submit"
        className="w-[106px] h-[24px] rounded-[14px] bg-[#0b0b10] text-[#F7FAFC] text-xs font-normal font-['Familjen_Grotesk'] flex items-center justify-center focus:outline-none border-none"
        style={{ letterSpacing: 0 }}
      >
        sign up
      </button>
    </div>
  );
}
