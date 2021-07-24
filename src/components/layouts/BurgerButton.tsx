type Props = {
  open: boolean
  toggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const BurgerButton: React.FC<Props> = (props) => {
  return (
    <div onClick={props.toggle} className="sm:hidden w-[40px] h-[40px] relative z-40">
      <span
        className={`w-full h-[3px] absolute left-0 translate-y-[-50%] duration-200
        ${props.open ? 'rotate-45 top-[50%] bg-primary-100' : 'bg-primary-700 top-[25%]'}`}
      ></span>
      <span
        className={`w-full h-[3px] absolute top-[50%] left-0 translate-y-[-50%] duration-200
        ${props.open ? 'opacity-0 bg-primary-100' : 'bg-primary-700 block'}`}
      ></span>
      <span
        className={`w-full h-[3px] absolute left-0 translate-y-[-50%] duration-200
        ${props.open ? 'rotate-[135deg] top-[50%] bg-primary-100' : 'bg-primary-700 top-[75%]'}`}
      ></span>
    </div>
  )
}

export default BurgerButton
