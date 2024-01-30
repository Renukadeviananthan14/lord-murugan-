import React from "react";

const contact = ()=> {
    return(
        <>
        <h1>Contact For Any Queries</h1><div class="form-container">
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" class="btn btn-success" style={{margin: "2rem"}}>Submit</button>
</div>
</div>
        </>
    )
};

export  default contact;
