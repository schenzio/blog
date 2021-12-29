// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//API routes create an API endpoint inside the app
//access at at http://localhost:3000/api/hello to see json data
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
//req is an instance of http.IncomingMessage, plus some pre-built middlewares.
//res is an instance of http.ServerResponse, plus some helper functions.

/*Do Not Fetch an API Route from getStaticProps or getStaticPaths
Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).

*/
