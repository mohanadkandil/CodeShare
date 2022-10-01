import { Listbox } from "@headlessui/react"
import { useState } from "react"
const languages = [
  { id: 1, name: "Python" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Ruby" },
  { id: 4, name: "C++" },
  { id: 5, name: "C" },
]
export default function EdidtorSidebar() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  return (
    <>
      <div className="bg-[#00C39A] w-1/6 min-h-screen p-6">
        <div className="flex flex-col">
          <div className="text-center mb-10">
            <span className="text-white font-bold text-4xl">CodeShare</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-base">Connected</span>
            <div className="flex items-center justify-between overflow-hidden py-4">
              <div className="flex flex-col">
                <div className="bg-[#1B1E25] rounded-lg w-[80px] h-[80px] cursor-pointer">
                  <span className="font-bold text-4xl text-white flex items-center justify-center h-full ">
                    K
                  </span>
                </div>
                <span className="text-base font-bold text-white text-center mt-2">
                  Kandil
                </span>
              </div>
              <div className="flex flex-col">
                <div className="bg-[#1B1E25] rounded-lg w-[80px] h-[80px] cursor-pointer">
                  <span className="font-bold text-4xl text-white flex items-center justify-center h-full ">
                    K
                  </span>
                </div>
                <span className="text-base font-bold text-white text-center mt-2">
                  Kandil
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mt-10">
            <div className="w-3/4 h-56">
              <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
                <Listbox.Button className="bg-white w-full py-1 rounded-lg font-semibold">
                  {selectedLanguage.name}
                </Listbox.Button>
                <Listbox.Options className="bg-white rounded-lg mt-2 w-full">
                  {languages.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      value={language}
                      className="hover:bg-[#00c39a] w-full py-2 px-4 font-semibold"
                    >
                      {language.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
