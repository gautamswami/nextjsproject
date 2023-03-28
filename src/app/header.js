import {HiBriefcase} from 'react-icons/hi'
export default function Header() {
  return (
    <>
    <div className="flex justify-between items-center p-3 headercontainer translucentbg"> 
      <div  className="inline-flex items-center gap-3 p-4 hellodiv">
        <img className="w-16 helloimage" alt='logo' src="/icons/undraw_breakfast_psiw.svg" />
        <h1 className="hellotext text-4xl font-semibold">HELLO !</h1>
      </div>
      <div>
        <div className='flex items-center gap-3'>
        <HiBriefcase size={30} color='#5f4f7b'/>

        </div>
      </div>
      </div>
      
    </>
  );
}
