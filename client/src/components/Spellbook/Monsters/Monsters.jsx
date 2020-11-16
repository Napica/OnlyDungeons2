import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import { useHistory } from "react-router-dom";
import "./Monsters.css"
import LoadSlime from "../../assets/Slime-Gif.gif";

export default function MonsterBook(){
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  const monstersbook = function () {
    API.getMonsters().then((res) => {
      setMonsters(res.data.data.results);
      console.log(res.data.data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    monstersbook();
  }, []);

  return (
    <>
      <div className="container">
      <div className="row vertical-spacer-md">
      <button to="#" onClick={()=>history.push("/armortest")} className="booktabs"> Armor </button>
      <button to="#" onClick={()=>history.push("/classestest")} className="booktabs"> Classes </button>
      <button to="#" onClick={()=>history.push("/racetest")} className="booktabs"> Races </button>
      <button to="#" onClick={()=>history.push("/monstertest")} className="booktabs"> Monsters </button>
      <button to="#" onClick={()=>history.push("/spelltest")} className="booktabs"> Spells </button>
      <button to="#" onClick={()=>history.push("/wpntest")} className="booktabs"> Weapons </button>


      {!loading ? (
        monsters.slice(4 * page, 4 * page + 4).map((monster) => {
          return (
            <div className="col s12 Book">
              <h3>{monster.name}</h3>

              <p className="col s12 m6">Type: {monster.type}<br/><br/>
              Size: {monster.size} <br/><br/>
              Alignment: {monster.alignment} <br/><br/>
              Armor: {monster.armor_class} <br/><br/>
              Hit Points: {monster.hit_points} <br/><br/>
               
              </p>
              <p className="col s12 m6">
              STR: {monster.strength}<br/><br/>
              DEX: {monster.dexterity} <br/><br/>
              CON: {monster.constitution} <br/><br/>
              INT: {monster.intelligence} <br/><br/>
              WIS: {monster.wisdom} <br/><br/>
              CHA: {monster.charisma} <br/><br/>
               
              </p>
            </div>
          );
        })
      ) : (
        <div className="footerControl">
          <div class="spinner-layer spinner-yellow">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
          <h1 className="loading center">Loading Monsters <img src={LoadSlime}/></h1>
        </div>
      )}
      {!loading ? (
        <div className="col s12 center">
        <button to="#" onClick={() => setPage(page - 1)} className="pagetabs"> Page Down </button>
    <button to="#" onClick={() => setPage(page + 1)} className="pagetabs"> Page Up </button>
      </div>
      ) : null}
    </div>

         
          
      </div>

    </>
  );
};


