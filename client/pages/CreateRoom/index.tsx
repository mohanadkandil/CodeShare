export default function CreateRoom() {
  return (
    <>
      <div className="min-h-screen w-full bg-[#1B1E25] text-4xl">
        <div className="w-full h-16 bg-[#00B08B] px-10 flex items-center">
          <span className="text-3xl font-semibold text-white">CodeShare</span>
        </div>
        <div className="w-full h-full py-20 flex justify-center items-center">
          <div className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] rounded-2xl bg-[#00C39A] flex items-center flex-col py-4 md:py-16">
            <span className="text-white font-semibold md:text-4xl text-3xl">
              Let&apos;s start a CodeShare
            </span>
            <div className="flex flex-col justify-center space-y-12 h-full mt-10">
              <input
                type="text"
                className="md:rounded-2xl rounded-xl md:p-4 p-2 font-semibold md:text-xl text-lg"
                placeholder="Room Id"
              />
              <input
                type="text"
                className="md:rounded-2xl rounded-xl md:p-4 p-2 font-semibold md:text-xl text-lg"
                placeholder="Username"
              />
              <div className="w-full flex justify-center">
                <button className="py-4 px-5 bg-white rounded-lg text-base font-semibold">
                  Join Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
