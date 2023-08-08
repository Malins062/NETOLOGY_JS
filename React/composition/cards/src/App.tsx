import { Card } from "./components/Card"
import { CardBody } from "./components/CardBody"

const propsCard1 = {
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  btn: {
    caption: "Go somewhere",
    href: "#",
  }
}

const propsCard2 = {
  title: "Special title treatment",
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  btn: {
    caption: "Go somewhere",
    href: "#",
  }
}

const propsImage = {
  img: {
    src: "https://w-dog.ru/wallpapers/0/9/546481573484686/amanda-bunes-aktrisa-ulybka-model-portret.jpg",
    alt: "face"  
  }
}

function App() {
  return (
    <>
      <Card {...propsImage}>
        <CardBody {...propsCard1}/>
      </Card>

      <Card>
        <CardBody {...propsCard2}/>
      </Card>
    </>
  )
}

export default App
