"use client";
const lidata = ["ABOUT", "CAREER", "PROJECTS", "RESUME", "EDUCATION"];
export default function SideBar({active,setActive}) {
  
  return (
    <>
      <ul className="sidebarul translucentbg">
        {lidata?.map((names,id) => {
          return (
            <li
            key={id}
              className={active === names ? "sidebarliactive" : "sidebarli"}
              onClick={() => {
                setActive(names);
              }}
            >
              <h1>{names}</h1>
            </li>
          );
        })}
      </ul>
    </>
  );
}
