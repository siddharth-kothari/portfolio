import Link from "next/link";

export default function NotFound() {
  return (
    <div className="app-page">
      <p className="eyebrow">Finder</p>
      <h1>File not found.</h1>
      <p className="lede">That folder is empty — or it never existed.</p>
      <Link href="/" className="mac-btn mt-6 inline-flex">
        Back to desktop
      </Link>
    </div>
  );
}
