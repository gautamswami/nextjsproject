import About from "./about";
export default function Content({ active }) {
  return (
    <>
      <div className="m-4 translucentbg w-full">
        {active === 'ABOUT' && <About/>}
        
      </div>
    </>
  );
}
