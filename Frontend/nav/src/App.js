import { BsArrowLeftShort, BsSearch, BsChevronDown, BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { useState } from "react";
import { AiOutlineLogout, AiTwotonePieChart } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const App = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (event) => {
    event.preventDefault();
    const newCategoryName = event.target.elements.categoryName.value;
    setCategories([...categories, { name: newCategoryName, id: Math.random().toString(36).substring(2, 15) }]);
  };

  const [open, setOpen] = useState(true);
  const [submenuOpen, setsubmenuOpen] = useState(false);

  const Menus = [
    { title : "Dashboard"},
    { 
      title : "Asset",
      icon: <BsReverseLayoutTextSidebarReverse/>,
      submenu: true,
      submenuItems:[
        {title:"Category"},
        {title:"Asset"},
        {title:"Allocation"},
      ],
    },
    {title: "logout", icon: <AiOutlineLogout />},
  ];


  return(
  <div className="flex">

    <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ?"w-72" : "w-20"} duration-300 relative`}>

      <BsArrowLeftShort className={`bg-red-600 text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"} `}onClick={() => setOpen(!open)}/>

      <div className="inline-flex">
        <AiTwotonePieChart className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left duration-500 mr-2 ${open && "rotate-[360deg]"}`}/>
        <h1 className={`text-black origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
           Virtual Coders
        </h1>
          
      </div>

      <div className={`flex items-center rounded bg-slate-300 mt-6 ${!open ? "px-2.5" :"px-4"}`}>
        <BsSearch className={`text-black text-lg block float-left cursor-pointer ${open && "mr-2"} `}/>

        <input type="search" placeholder="search" className={`text-base bg-transparent w-full text-black focus:outline-none ${!open && "hidden"}`} />

      </div>

      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <>
            <li 
            key={index} 
            className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-300 rounded-md ${menu.spacing ? "mt-9" :"mt-9"} `}
            >
              <span className="text-2xl block float-left">
              {menu.icon ? menu.icon : <RiDashboardFill />}
              </span>

            <span 
            className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
              {menu.title}
            </span>

            {menu.submenu && open &&(
                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => setsubmenuOpen(!submenuOpen)} />
            )}
            </li>

            {menu.submenu && submenuOpen && open &&(
              <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index} className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2  px-5 hover:bg-slate-300 rounded-md ">
                    {submenuItem.title}

                  </li>
              ))}
            </ul>
          )}
          
          </>
        ))}

      </ul>
      </div>
     



      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div> 

  







      <div className="category-section">
      <h2>Categories</h2>
      <form onSubmit={addCategory} className="flex space-x-2 p-10" >
        <input type="text" name="categoryName" placeholder="Add Category" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
      </form>
      <ul className="list-none p-0">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
    

  </div>
  );
};



export default App;
