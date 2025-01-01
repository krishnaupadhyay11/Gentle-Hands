import { Link } from "react-router-dom"

export default function PrimaryButton({link, title}) {
  return (
    <Link to={link}>
      <button className="primary-button mt-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-offset="20">
          {title}
      </button>
    </Link>
  )
}
