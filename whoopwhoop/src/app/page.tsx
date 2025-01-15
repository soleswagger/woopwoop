import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white">
<div className="card bg-base-100 image-full w-96 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">Notes</h2>
    <p>Notes Description</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Edit</button>
    </div>
  </div>
</div>
    </main>
  );
}
