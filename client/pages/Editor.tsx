import { useContext, useEffect, useRef, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import EdidtorSidebar from "../components/EditorSidebar"
import { ContextStore } from "../utils/Context"
import { initSocketClient } from "../utils/socket"
import { join, joined, disconnecting } from "../utils/libs.jsx"
import { languageOptions } from "../constants/languageOptions"
import LanguagesDropdown from "../components/LanguageDropdown"
import ThemeDropdown from "../components/ThemeDropdown"
import { defineTheme } from "../lib/defineTheme"
import CodeEditorWindow from "../components/CodeEditorWindow"

const javascriptDefault = "// some comment"

export default function Editor() {
  const [code, setCode] = useState(javascriptDefault)
  const [customInput, setCustomInput] = useState("")
  const [outputDetails, setOutputDetails] = useState(null)
  const [processing, setProcessing] = useState(null)
  const [theme, setTheme] = useState("cobalt")
  const [language, setLanguage] = useState(languageOptions[0])

  const onSelectChange = (option: {
    id: number
    name: string
    label: string
    value: string
  }) => {
    console.log("Selected option...", option)
    setLanguage(option)
  }

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data)
        break
      }
      default: {
        console.warn("Case not handled", action, data)
      }
    }
  }

  const handleCompile = () => {}

  const checkStatus = async (token: string) => {}

  const handleThemeChange = (th: any) => {
    const theme = th
    console.log("theme....", theme)

    if (["light", "vs-dark"].includes(theme.value)) setTheme(theme)
    else defineTheme(theme.value).then(() => setTheme(theme))
  }

  // useEffect(() => {})

  const showSuccessToast = (message: string) => {}

  const showErrorToast = (message: string) => {}

  return (
    <>
      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        {/* <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
          </div>
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}
