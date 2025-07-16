import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Inception",
      description:
        "A cinematic masterpiece that seamlessly blends reality and dreams, Inception is a captivating story of a dream within a dream.",
      genre: "Sci-Fi",
      releaseDate: new Date("2010-07-16"),
      rating: 8.8,
    },
  });
}
async function createMany() {
  const movies = await prisma.movie.createMany({
    data: [
      {
        title: "The Dark Knight",
        description: "A superhero movie that follows the story of Batman.",
        genre: "Action",
        rating: 8.8,
        releaseDate: new Date("2008-07-18"),
      },
      {
        title: "Interstellar",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
      {
        title: "Alien Covenant",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
    ],
  });
}

async function getMovies() {
  const movies = await prisma.movie.findMany();
  console.log(movies);
}
async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });
  console.log(movie);
}
async function updateMovie(
  movieId: number,
  updatedTitle: string,
  updatedDescription: string
) {
  const updateMovie = await prisma.movie.update({
    where: { id: movieId },
    data: {
      title: updatedTitle,
      description: updatedDescription,
    },
  });
  console.log(updateMovie);
}
async function deleteMovie(movieId: number) {
  const deletedMovie = await prisma.movie.delete({
    where: { id: movieId },
  });
}
async function main() {
  //   await createMovie();
  // await createMany();
  // await getMovies();
  //   await getMovieById(2);
//   await updateMovie(4, "Raaz", "horror movie");
    await deleteMovie(4);
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
