import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className="fixed top-0 flex items-center justify-between w-full h-auto px-4 py-5 tracking-wide bg-orange-400">
      <div>
        <h1 className="font-bold">my-Food-app</h1>
      </div>
      <Cart className='px-4 py-5'/>
    </header>
  );
};

export default Header;
