import React from "react"
import Select from "react-select"
import monacoThemes from "monaco-themes/themes/themelist.json"
import { customStyles } from "../constants/customStyles"

export default function ThemeDropdown({
  handleThemeChange,
  theme,
}: {
  handleThemeChange: React.ChangeEventHandler
  theme: string
}) {
  return (
    <Select
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  )
}
