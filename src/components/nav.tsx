
function Nav() {
  
  return (

<div className="navbar bg-white">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-green-400 to-green-200 text-transparent bg-clip-text">Green Marmot</a>
  </div>
</div>

  )
}

export default Nav;