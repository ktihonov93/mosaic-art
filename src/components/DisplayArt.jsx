import React from 'react'

export default function DisplayArt( { art }) {
    return (
        <div className='DisplayArt'>
            <img
        src={art.images[0]!=null? art.images[0].baseimageurl : "image is not availible"}
        alt={art.people[0].name}
      />
      <ul>
          <li>{art.people[0].name}</li>
          <li>{art.division}</li>
      </ul>
        </div>
    )
}
