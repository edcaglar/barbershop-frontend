
export default function Banner() {
  return (
    <section className= "m-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"+")"}}>
            <div className="md:w-1/2">
                <p className="font-bold text-sm uppercase">Services</p>
                <p className="text-3xl font-bold">Multimedia products</p>
                <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
                <a href="#"                         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contact us</a>
            </div>  
        </div>
    </section>
  )
}