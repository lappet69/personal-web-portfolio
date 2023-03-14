
type Props = {
  children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <main className='h-screen w-full bg-white relative'>{children}</main>
  )
}

export default Layout