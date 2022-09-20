import { codeRepository } from "../schema/code.schema"

export const postCode = async (req, res) => {
  const code = codeRepository.createEntity(req.body)
  const id = await codeRepository.save(code)
  if (!id) return res.status(404).json({ message: "Something went wrong" })
  res.status(201).json({ message: "POSTED" })
}

export const getUserCode = async (req, res) => {
  const { user_id } = req.params
  const userCode = await codeRepository
    .search()
    .where("user_id")
    .eq(user_id)
    .return.all()
  res.status(200).json(userCode)
}

export const deleteUserCode = async (req, res) => {
  try {
    await codeRepository.remove(req.params.code_id)
    res.status(200).send("Your code is deleted")
  } catch (error) {
    res.status(400).send("Can not delete your code ", error)
  }
}

export const searchCode = async (req, res) => {
  const { term } = req.params
  try {
    const result = await codeRepository
      .search()
      .where("code_title")
      .eq(term)
      .return.all()

    if (result.length < 1)
      return res.status(204).json({ message: "No code found !" })

    res.status(200).json(result)
  } catch (error) {
    res.status.send(error)
  }
}
