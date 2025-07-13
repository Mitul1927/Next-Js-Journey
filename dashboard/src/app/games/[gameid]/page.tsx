import React from 'react'

const Games = async ({ params }: { params: { gameid: string } }) => {
  const { gameid } = await params;

  return <div>Game: {gameid}</div>
}

export default Games
