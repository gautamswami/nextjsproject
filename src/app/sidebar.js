"use client";
const lidata = ["ABOUT", "CAREER", "PROJECTS", "RESUME", "EDUCATION"];
export default function SideBar({active,setActive}) {
  
  return (
    <>
      <ul className="sidebarul translucentbg">
        {lidata?.map((names) => {
          return (
            <li
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
