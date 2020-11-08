import React, { useEffect, useState, } from "react";
import { useParams } from "react-router-dom"
import placeholderImg from "./placeholder200x200.jpg";
import API from "../../utils/API"

function DmUpdateForm() {
  const {id} = useParams()

  const [dm, setDm] = useState({
    userName: "",
    password: "",
    email: "",
    isDm: false,
    roomName: "",
    tagLine: "",
    categoryType:{
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false,
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false
    },
    availability:{
      monday: false,
      tuesday: false, 
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    preferredRole: ""

  });

  const [formObject, setFormObject] = useState({
    userName: "",
    password: "",
    email: "",
    isDm: true,
    roomName: "",
    tagLine: "",
    categoryType:{
      byTheBook: false,
      campaigns: false,
      norestriction: false,
      homebrew: false,
      lvl1only: false,
      rpersonly: false,
      oneshots: false,
      displaydice: false,
      voyuerallowed: false
    },
    availability:{
      monday: false,
      tuesday: false, 
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    preferredRole: ""

  })
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };



  useEffect(async()=>{
    const response = await API.getUser(id)
    console.log(response.data)
    setDm(response.data)
    setFormObject({
      categoryType:{
        byTheBook: response.data.categoryType.byTheBook,
        campaigns: response.data.categoryType.campaigns,
        norestriction: response.data.categoryType.norestriction,
        homebrew: response.data.categoryType.homebrew,
        lvl1only: response.data.categoryType.lvl1only,
        rpersonly: response.data.categoryType.rpersonly,
        oneshots: response.data.categoryType.oneshots,
        displaydice: response.data.categoryType.displaydice,
        voyuerallowed: response.data.categoryType.voyuerallowed
      },
      availability:{
        monday: response.data.availability.monday,
        tuesday: response.data.availability.tuesday, 
        wednesday: response.data.availability.wednesday,
        thursday: response.data.availability.thursday,
        friday: response.data.availability.friday,
        saturday: response.data.availability.saturday,
        sunday: response.data.availability.sunday
      }
    })
    // .then((res)=> {
    //   console.log(res.data.categoryType.campaigns)
    //   setDm(res.data)})
    // .catch((err)=> console.log(err, "Could not reach page"))
  },[])


  // TODO: FIND A WAY TO INJECT EVENT.NAME INSTEAD OF REPEAT THIS NIGHTMARE
  function campaignOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.campaigns
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, campaigns:!current
      }
  }))
  }

  function oneshotsOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.oneshots
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, oneshots:!current
      }
  }))
  }

  // homebrew

  function homebrewOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.homebrew
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, homebrew:!current
      }
  }))
  }

  // byTheBook
  function byTheBookOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.byTheBook
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, byTheBook:!current
      }
  }))
  }

  // rpersonly
  function rpersonlyOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.rpersonly
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, rpersonly:!current
      }
  }))
  }

  // norestriction
  function norestrictionOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.norestriction
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, norestriction:!current
      }
  }))
  }
  
  // displaydice
  function displaydiceOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.displaydice
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, displaydice:!current
      }
  }))
  }


  // lvl1only
  function lvl1onlyOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.lvl1only
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, lvl1only:!current
      }
  }))
  }
  // voyuerallowed
  function voyuerallowedOnChange(event){
    event.stopPropagation()
    let current = formObject.categoryType.voyuerallowed
    // console.log(current)
    setFormObject(prevState => ({
      ...prevState,
      categoryType: {
          ...prevState.categoryType, voyuerallowed:!current
      }
  }))
  }

  
  return (
    <>
      <div className="container">
        <div className="row section"></div>

        <form className="row section content-border">
          <div className="row vertical-spacer-md">
            <div className="col s6">
            <p>Room Name: </p>
              <div className="content-border">
                <input id="roomName" className="validate" type="text" value={formObject.roomName} name="roomName" placeholder={dm.roomName} onChange={handleInputChange}/>
              </div>

            <p>Tagline: </p>
              <div className="content-border">
                <input id="Tagline" type="text" className="validate" value={formObject.tagLine} name="tagLine" placeholder={dm.tagLine} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col s6">
              <div className="col s12">
                <p>Avatar:</p>
                <img
                  className="content-border col s12 image-true"
                  src={placeholderImg}
                />
              </div>

              <p>Preferred Role: </p>
              <div className="content-border">
                <select className="browser-default">
                  <option value="" disabled selected>
                    Select
                  </option>
                  {dm.prefferedRole === "Barbarian" ? <option selected value="Barbarian">Barbarian</option> : <option value="Barbarian">Barbarian</option>}
                  {dm.prefferedRole === "Bard" ? <option selected value="Bard">Bard</option> : <option value="Bard">Bard</option>}
                  {dm.prefferedRole === "Cleric" ? <option selected value="Cleric">Cleric</option> : <option value="Cleric">Cleric</option>}
                  {dm.prefferedRole === "Druid" ? <option selected value="Druid">Druid</option> : <option value="Druid">Druid</option>}
                  {dm.prefferedRole === "Fighter" ? <option selected value="Fighter">Fighter</option> : <option value="Fighter">Fighter</option>}
                  {dm.prefferedRole === "Monk" ? <option selected value="Monk">Monk</option> : <option value="Monk">Monk</option>}
                  {dm.prefferedRole === "Paladin" ? <option selected value="Paladin">Paladin</option> : <option value="Paladin">Paladin</option>}
                  {dm.prefferedRole === "Ranger" ? <option selected value="Ranger">Ranger</option> : <option value="Ranger">Ranger</option>}
                  {dm.prefferedRole === "Rogue" ? <option selected value="Rogue">Rogue</option> : <option value="Rogue">Rogue</option>}
                  {dm.prefferedRole === "Sorcerer" ? <option selected value="Sorcerer">Sorcerer</option> : <option value="Sorcerer">Sorcerer</option>}
                  {dm.prefferedRole === "Warlock" ? <option selected value="Warlock">Warlock</option> : <option value="Warlock">Warlock</option>}
                  {dm.prefferedRole === "Wizard" ? <option selected value="Wizard">Wizard</option> : <option value="Wizard">Wizard</option>}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Category:</h5>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                    {/* {dm.categoryType.campaigns ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.categoryType.campaigns} name="campaigns" value={formObject.categoryType.campaigns} onChange={campaignOnChange}/>
                    <span>
                    <p>Campaigns</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                    {/* {dm.categoryType.oneshots ? <input checked="checked" type="checkbox"/> : <input type="checkbox" /> } */}
                    <input type="checkbox" checked={formObject.categoryType.oneshots} name="oneshots" value={formObject.categoryType.oneshots} onChange={oneshotsOnChange}/>
                    <span>
                    <p>One Shots</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.homebrew ? <input checked="checked" type="checkbox"/> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.homebrew} name="homebrew" value={formObject.categoryType.homebrew} onChange={homebrewOnChange}/>
                    <span>
                    <p>HomeBrew</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.byTheBook ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.byTheBook} name="byTheBook" value={formObject.categoryType.byTheBook} onChange={byTheBookOnChange}/>
                    <span>
                    <p>By The Book</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.rpersonly ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.rpersonly} name="rpersonly" value={formObject.categoryType.rpersonly} onChange={rpersonlyOnChange}/>
                    <span>
                    <p>Role Play Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.norestriction ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.norestriction} name="norestriction" value={formObject.categoryType.norestriction} onChange={norestrictionOnChange}/>
                    <span>
                    <p>No Restriction</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.displaydice ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.displaydice} name="displaydice" value={formObject.categoryType.displaydice} onChange={displaydiceOnChange}/>
                    <span>
                    <p>Display Dice</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.lvl1only ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.lvl1only} name="lvl1only" value={formObject.categoryType.lvl1only} onChange={lvl1onlyOnChange}/>
                    <span>
                    <p>Lvl One Only</p>
                    </span>
                  </label>
                </p>
              </div>
              <div className="col s4">
                <p>
                  <label>
                  {/* {dm.categoryType.voyuerallowed ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> } */}
                  <input type="checkbox" checked={formObject.categoryType.voyuerallowed} name="voyuerallowed" value={formObject.categoryType.voyuerallowed} onChange={voyuerallowedOnChange}/>
                    <span>
                    <p>Watchers Allowed</p>
                    </span>
                  </label>
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <h5 className="form-text">Availability:</h5>
              <div className="row">
                <div className="col s3">
                  <p>
                    <label>
                    {dm.availability.monday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Monday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                      {dm.availability.tuesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Tuesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {dm.availability.wednesday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Wednesday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s3">
                  <p>
                    <label>
                    {dm.availability.thursday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Thursday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col s4">
                  <p>
                    <label>
                    {dm.availability.friday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Friday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {dm.availability.saturday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Saturday</p>
                      </span>
                    </label>
                  </p>
                </div>
                <div className="col s4">
                  <p>
                    <label>
                    {dm.availability.sunday ? <input checked="checked" type="checkbox" /> : <input type="checkbox" /> }
                      <span>
                        <p>Sunday</p>
                      </span>
                    </label>
                  </p>
                </div>
              </div>
              <div className="row vertical-spacer-sm">
                <div className="col s4 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Cancel
                </button>
                <div className="col s1 "></div>
                <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
                  Update Account
                </button>
                <div className="col s1 "></div>
              </div>
            </div>
          </div>
        </form>


      <h5>Delete Your Account?</h5>
      <button className="vertical-spacer-sm waves-effect waves-light btn col s3">
        Delte Your Account?
      </button>

      </div>
    </>
  );
}

export default DmUpdateForm;
