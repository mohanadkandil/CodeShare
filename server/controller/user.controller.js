import { userRepository } from "../schema/user.schema"

export const auth = async (req, res) => {
  const { googleId } = req.body
  const issuer = await userRepository
    .search()
    .where("google_id")
    .eq(googleId)
    .return.all()

  if (issuer.length > 0) {
    return res.status(200).json({
      message: "login from client",
      token: googleId,
      user: req.body,
    })
  }

  const { name, imageUrl, email } = req.body

  const newUser = userRepository.createEntity({
    user_name: name,
    user_email: email,
    user_profile: imageUrl,
    google_id: google_id,
  })

  const id = await userRepository.save(newUser)

  if (id) {
    return res.status(201).json({
      message: "User registered",
      token: googleId,
    })
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params
  const user = await userRepository
    .search()
    .where("google_id")
    .eq(id)
    .return.all()
  res.status(200).json(user)
}
