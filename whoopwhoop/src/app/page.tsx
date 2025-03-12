import Link from "next/link";
import MyButton from "./MyButton";
export default function HomePage() {
  return ( <div >
    <main className="bg-white">

    <h1 className="text-4xl">
      Notes App!
    </h1>   
    <img src="https://play-lh.googleusercontent.com/hJ9hjYfV5akC9X7r-WkdxMK39tPUJ5-2OmU6kAaeqOozXPKpjFkFns5yR2LkbSh2SXo"></img>
<div className="card bg-base-100 image-full w-96 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">Notes</h2>
    <p>Notes Description</p>
    <figure>
    
  </figure>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-cyan-500 hover:bg-green-600">Edit</button>
    </div>
  </div>
</div>
<div className="card card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://th.bing.com/th/id/R.222d80144e6451ee88569fbb5d88fe24?rik=8kLicZF31hqIXA&riu=http%3a%2f%2fil2.picdn.net%2fshutterstock%2fvideos%2f697816%2fthumb%2f1.jpg&ehk=TiTUb7vPMjRdUqP3RtKys8AYP9FQVMKNpRKtG3HjQEM%3d&risl=&pid=ImgRaw&r=0"
      alt="Happy Face" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Click to Create a New Note</h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Create</button>
    </div>
  </div>
</div>
    </main>
    </div>
  );
}

//<img
//src="https://th.bing.com/th/id/OIP.1FJi-WIVDg3DEt6zh0x-mAHaEK?rs=1&pid=ImgDetMain"
//alt="Note"></img>