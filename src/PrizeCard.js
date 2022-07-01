import React from "react";
let Data=[
  {
    Price:"$0",
    Type:"FREE",
    Users: "Single User",
    Storage:"5GB Storage",
    Projects:"Unlimited Public Projects",
    Access:"Community Access",
    PrivateProject: "text-muted",
    support:"text-muted",
    Subdomain: "text-muted",
    StatusReport:"text-muted"
  },
  {
    Price:"$9",
    Type:"PLUS",
    Users: "5 User",
    Storage:"50GB Storage",
    Projects:"Unlimited Public Projects",
    Access:"Community Access",
    PrivateProject: "",
    support:"",
    Subdomain: "",
    StatusReport:"text-muted"
  },
  {
    Price:"$49",
    Type:"PRO",
    Users: "Unlimited User",
    Storage:"150GB Storage",
    Projects:"Unlimited Public Projects",
    Access:"Community Access",
    PrivateProject: "",
    support:"",
    Subdomain: "",
    StatusReport:""
  }

]

export default function PrizeCard(){
  console.log(Data[0].Users);
    return(<div>
        <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {Data.map((ele)=>(
        <div className="col-lg-4">
        
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{ele.Type}</h5>
            <h6 className="card-price text-center">{ele.Price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{ele.Users}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{ele.Storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{ele.Projects}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{ele.Access}</li>
              <li className={ele.PrivateProject}><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li className={ele.support}><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li className={ele.Subdomain}><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
              </li>
              <li className={ele.StatusReport}><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      ))}
      
    </div> 
  </div>
</section>

    </div>
    
    
    )
}