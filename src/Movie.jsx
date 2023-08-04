import React from 'react'

export default function movie(props) {
  return (
    <div className="Card">
      <h2 className="MovieTitle">{props.name}</h2>
      <img className="product--image" src={props.url} alt="" />
      <p className="clasification">{props.clasification}</p>
      <p>{props.description}</p>
      <p>
        <button class="button">Reproducir</button>
      </p>
    </div>
  )
}

