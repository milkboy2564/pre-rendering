export default function Isr({element, time}){
  return (
    <>
      <div>
        <h1>ISR TEST</h1>
        <h1>{time}</h1>
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

export async function getStaticProps(){
  const element = await fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json());

  return {
    props: {
      element : element.splice(0,20),
      time : new Date().toISOString()
    },
    revalidate : 10,
  }
}