import React from "react";
export default function DisplayArt({ art }) {
  return (
    <div className="DisplayArt">
      <img
        src={
          art.images &&
          art.images[0] !== null &&
          art.images[0] !== undefined &&
          art.images !== null &&
          art.images !== undefined
            ? art.images[0].baseimageurl
            : "https://im0-tub-by.yandex.net/i?id=4f2334f6efb09fa290872f88bf03235e&n=13"
        }
        alt={
          art.people &&
          art.people[0].name != null &&
          art.people[0].name !== undefined
            ? art.people[0].name
            : "unknown"
        }
      />
      <ul>
        <li>
          Artist:{" "}
          {art.people &&
          art.people[0].name !== null &&
          art.people[0].name !== undefined &&
          art.people[0] !== null &&
          art.people[0] !== undefined
            ? art.people[0].name
            : "unknown"}
        </li>
        <li>Art type: {art.division}</li>
        <li>Description: {art.description}</li>
        <li>Dimensions: {art.dimensions}</li>
      </ul>
    </div>
  );
}
