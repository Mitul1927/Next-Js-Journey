import { movies } from "./db";
export async function GET() {
  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
export async function POST(req:Request){
    const movie = await req.json();
    const newmovie = {...movie};
    movies.push(newmovie);
    return new Response(JSON.stringify(newmovie),{status: 201,headers:{'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',}});
}
