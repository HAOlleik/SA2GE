// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  // add 1s delay to simulate a server call
  await sleep(1000);
  // send the response
  // res.status(200).json({ name: "John Doe" });
  // or
  res.send({ name: "John Doe" });
}
