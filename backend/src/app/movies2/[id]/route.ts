import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }
  try {
    const updateMovie = await req.json();
    const index = movies.findIndex((m) => m.id === movieId);
    movies[index] = { ...movie, ...updateMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 400 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;
  const index = movies.findIndex((m) => m.id === movieId);
  if (index == -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }
  const movie = movies[index];
  movies.splice(index, 1);
  return new Response(
    JSON.stringify({ movie: movie, message: "Movie deleted successfully" }),
    { status: 200 }
  );
}
