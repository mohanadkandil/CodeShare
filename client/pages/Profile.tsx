export default function Profile() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#1B1E25] absolute">
        <div className="flex flex-col justify-center items-center">
          <div className="rounded-lg bg-[#00C39A] w-3/4 h-[240px] mt-[54px] relative">
            <div className="flex justify-center">
              <div className="rounded-full bg-gray-200 w-[200px] h-[200px] absolute -bottom-20"></div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-28 space-y-3">
            <span className="text-white font-bold text-3xl">
              Mohanad kandil
            </span>
            <span className="text-base font-bold text-[#00C39A]">
              4 snippets
            </span>
          </div>
          <div className="flex">
            <div className="bg-[#00C39A] w-[140px] h-[140px] rounded-lg mt-[60px] flex justify-center items-center">
              <span className="text-2xl font-bold text-white">Code 1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
