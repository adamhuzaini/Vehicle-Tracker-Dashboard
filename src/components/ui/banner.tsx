import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="w-full">
      <Link to="/about">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full max-h-[500px] object-cover rounded-none shadow-md"
        />
      </Link>
    </div>
  );
}
