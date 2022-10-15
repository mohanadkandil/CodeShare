import React from "react"
import Select from "react-select"
import { customStyles } from "../constants/customStyles"
import { languageOptions } from "../constants/languageOptions"

export default function LanguagesDropdown({ onSelectChange }: any) {
  return (
    <Select
      placeholder={"Filter by category"}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  )
}
