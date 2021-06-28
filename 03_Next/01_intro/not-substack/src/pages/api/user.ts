import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
      {id:1, name: "Mariela"},
      {id:2, name: "Glenda"},
      {id:3, name: "Vernon"},
    ]

    return response.json(users)
}