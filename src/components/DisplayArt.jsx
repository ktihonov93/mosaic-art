import React from 'react'

export default function DisplayArt( { art }) {
    return (
        <div className='DisplayArt'>
            <img
        src={art.images.baseimageurl}
        alt={art.people.name}
      />
      <ul>
          <li>{art.people.name}</li>
      </ul>
        </div>
    )
}
