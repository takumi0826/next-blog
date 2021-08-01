import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <footer className="pt-[16px] pb-[32px] px-[40px] text-center">
      <div className="flex justify-center pb-[16px]">
        <a href="https://twitter.com/jpnwtgmd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="lg" className="text-[#00acee]" />
        </a>
        <a
          href="https://github.com/takumi0826/next-blog"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" className="text-[#171515]" />
        </a>
      </div>
      <p className="text-sm">© 2021 lapis</p>
    </footer>
  )
}

export default Footer
