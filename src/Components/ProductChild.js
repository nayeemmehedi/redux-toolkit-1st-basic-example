import React, { useState, useEffect } from "react";
import { useGetPokemonByNameQuery,useGetPokemonByOtherQuery } from "../features/Pokemon";

import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./index2.css";

const ProductChild = () => {
  const { id } = useParams();

  const [newValuw, setnewValuw] = useState({});
  const [updateValue, setupdateValue] = useState(false);
  const [user, setUser] = useState({});



  const { data, error, isLoading } = useGetPokemonByNameQuery();

  const resInfo = useGetPokemonByOtherQuery(id)

  

useEffect(() => {

  if(resInfo){
    setUser(resInfo)
    

  }
  
  

},[resInfo])


 





  useEffect(() => {
    if(data){
         const value = data.filter((v) => v.id == id);
          setnewValuw(value);
    }
  }, [data]);


  const clickUpdate=()=>{
      setupdateValue(!updateValue);


  }



   const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };


  return (
    <div>
      <div class="text-center">
        <h1>Full Description Page</h1>
        <hr />
        <p>{newValuw[0]?.id} .</p>
        <h4 style={{ color: "green" }}> {user.data?.name}</h4>
        <h6 style={{ color: "#73318f" }}>Email : {user.data?.email}</h6>
        <h6>Phone Number : {user.data?.phone}</h6>
        <p style={{ color: "#3cbd85" }}>Website : {user.data?.website}</p>
        <p>
          
          <span style={{ color: "green" }}>Title :</span>{" "}
          <span style={{ color: "#73318f" }}>{newValuw[0]?.title}</span>
        </p>{" "}
        <br />
        <h3>
          <span style={{ color: "green" }}>Body :</span>{" "}
          <span style={{ color: "#3cbd85" }}>{newValuw[0]?.body}</span>
        </h3>
        <hr />


        <div class="d-grid gap-5 d-md-block">
          <button class="btn btn-danger" type="Delete">
           Delete
          </button>
          {" "}
          <button onClick={()=> clickUpdate()} class="btn btn-primary" type="Update">
            Update
          </button>
        </div>



      </div>
       {/* form start here  */}

        {updateValue ? <div className="nayeem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">title</label>
          <input placeholder="title" {...register("title")} />
        </div>

        <div>
          <label htmlFor="body">body</label>
          <input placeholder="body" {...register("body")} />
        </div>

       
        <input type="submit" />
      </form>
    </div> :null
}




    </div>
  );
};

export default ProductChild;
