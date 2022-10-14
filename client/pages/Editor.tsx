import EdidtorSidebar from "../components/EditorSidebar"

export default function Editor() {
  return (
    <>
      <div className="flex">
        <EdidtorSidebar />
        <textarea id="editor" wrap="hard"></textarea>
      </div>
    </>
  )
}
