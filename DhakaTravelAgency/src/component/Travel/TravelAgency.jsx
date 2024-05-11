import React from "react";



const TravelAgency = () => {
  return (
    <>

    <h1 className="text-4xl text-emerald-300">Travel Agency Software</h1>
      <form>
        {/* upper Button Start */}
  <div className="mt-8">
 
<button className="btn btn-outline btn-primary">Primary</button>
<button className="btn btn-outline btn-secondary">Secondary</button>
<button className="btn btn-outline btn-accent">Accent</button>
  </div>
        <div className="space-y-2">
          {/* Horizontal line */}
          <div className="mt-10  text-emerald-500">
            {" "}
            <hr />
          </div>

         

          <div className="row flex flex-nowrap  gap-4">
            <div className="sm:col-span-1">
              <input
                type="text"
                placeholder="LHR"
                className="input input-bordered input-accent w-32 "
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="text"
                placeholder="CDG"
                className="input input-bordered input-accent w-32"
              />
            </div>
            <div className="sm:col-span-1">
              <input
                type="date"
                placeholder=""
                className="input input-bordered input-accent w-38"
              />
            </div>
            <div className="sm:col-span-1">
              <select className="select select-accent  w-24">
                <option disabled selected>
                  Day
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <select className="select select-accent  w-24">
                <option disabled selected>
                  Day+
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <select className="select select-accent  w-32">
                <option disabled selected>
                  Any Time
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <span className="mt-3">+</span>
            <div className="sm:col-span-1">
              <select className="select select-accent  w-24">
                <option disabled selected>
                  ADT
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <select className="select select-accent  max-w-xs">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <span className="mt-3">+</span>
          </div>
          {/* Horizontal line */}
          <div className=" text-emerald-500">
            <hr />
          </div>

          {/* 1st step ending */}

          <div className="row flex flex-nowrap gap-80">
            <div className="col-sm-4">
              <div className="form-control mt-4">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox checkbox-accent"
                  />
                  &nbsp;&nbsp;<span>Extra Options</span>
                </label>
              </div>
            </div>
            <div className="col-sm-4">
              Enviroment &nbsp;&nbsp;
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent mt-4"
                checked
              />
              &nbsp;&nbsp;&nbsp;&nbsp;<span>Dummy</span>&nbsp;&nbsp; &nbsp;
              <input
                type="radio"
                name="radio-4"
                className="radio radio-accent"
              />
              &nbsp;PDT
            </div>
            <div className="col-sm-4">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered input-accent w-36"
              />
            </div>
          </div>
          {/* Horizontal line */}
          <div className=" text-emerald-500">
            <hr />
          </div>
        </div>
        <span className="float-start font-bold">Data Parse Successfully</span>
      </form>


   
    </>
  )
  
        };

export default TravelAgency;
