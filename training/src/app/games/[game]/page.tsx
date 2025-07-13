import React from 'react'

const Game =  async ({params}:{params:{game:string}}) => {
    const {game} = await params;
    console.log(game);
  return (
    <div className='bg-blue-200 text-black border-amber-500'>Game = {game}</div>
  )
}

export default Game