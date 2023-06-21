function Footer() {
  
    return (
        <footer className="footer p-10 bg-white text-base-content">
        <div>
          <span className="footer-title">Contact</span> 
          <a className="link link-hover">Emails</a> 
          <a className="link link-hover">Address</a> 
          <a className="link link-hover">About us</a> 
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 

        </div> 
        <div>
          <span className="footer-title">Deals</span> 
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
  
    )
  }
  
  export default Footer;