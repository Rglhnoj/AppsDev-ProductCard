import ProductCard from "./components/ProductCard";


function App() {
  const ProductData = [
   { image:"/camera.jpeg",
    name: "Camera",
    price: "$100",
    description: "High quality camera for photography enthusiasts"
   },
    
   { image: "/laptop.jpeg",
    name: "laptop",
    price:  "$800",
    description:  "Powerful laptop for professionals and gamers"
   },
  
   {
   image:"/Headset.jpg",
    name:   "Computer Headset",
    price:  "$600",
    description:  "Comfortable headset with noise cancellation for immersive sound"
    
   },
    {
       image: "/Printer.jpeg", 
    name: " Printer",
    price: "  $200",
    description: "  High-speed printer for home and office use"
   },

   { image:"Razor.jpeg",
    name: "Razor",
    price: "$150",
    description: "  High-performance razor for a smooth shave"
   },

   { image:"/RunningShoes.jpeg",
    name: "Nike Running Shoes",
    price: "$80",
    description: "Lightweight and comfortable running shoes for athletes"
  
   }
  ]

  return (
      <div className='center-ui'>
        <ProductCard ProductData={ProductData[0]} />
    </div>
  )
}

export default App;
