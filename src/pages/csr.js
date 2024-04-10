import { useEffect, useState } from "react"

export default function Csr(){
  const [element , setElement] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setElement(data));
  },[]);

  console.log('element',element);

  return (
    <>
      <div>
        <h1>CSR TEST</h1>
        <div>
          {element?.slice(0,20).map(el => {
            return (
              <>
                <li>{el.albumId}</li>
                <li>{el.title}</li>
                <li>{el.thumbnailUrl}</li>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}