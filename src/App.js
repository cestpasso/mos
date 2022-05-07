
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Loopvid from "./loopv.mp4";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const handle = useFullScreenHandle();
  const [perc, setPerc] = useState(0);
  const [visible, setVisible] = useState(false);
  const regInput = React.useRef();
  var val = 0;

  const [avancement, setAvancement] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("avancement");
    const initialValue = JSON.parse(saved);
    return initialValue || "0";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("avancement", JSON.stringify(avancement));
  }, [avancement]);

  const [objectif, setObjectif] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("objectif");
    const initialValue = JSON.parse(saved);
    return initialValue || "300 000";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("objectif", JSON.stringify(objectif));
  }, [objectif]);

  const [dernierDon, setDernierDon] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("dernierDon");
    const initialValue = JSON.parse(saved);
    return initialValue || "0";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("dernierDon", JSON.stringify(dernierDon));
  }, [dernierDon]);


  const [heureDon, setHeureDon] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("heureDon");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("heureDon", JSON.stringify(heureDon));
  }, [heureDon]);

  const [minuteDon, setMinuteDon] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("minuteDon");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("minuteDon", JSON.stringify(minuteDon));
  }, [minuteDon]);

  const [dateDon, setDateDon] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("dateDon");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("dateDon", JSON.stringify(dateDon));
  }, [dateDon]);


  






  useEffect(() => {
    var stringNum = objectif.toString().replace(/ /g,'');
    const recup = parseInt(stringNum);
    const recup2 = parseInt(avancement);
    val = (recup2/recup)*100;
    if(val>=100 ){
      val = 100;
    }
    setPerc(val);
    console.log(val);
  }, [avancement, objectif]);

  

  const ajouter = () =>{
    {/** 
    if(regInput.current.value > 0 && regInput.current.value < 300000){
      var stringNum = objectif.toString().replace(/ /g,'');
      const recup = parseInt(stringNum);
      const recup2 = regInput.current.value/recup*100;
    alert(recup2);
    }*/}
    if(regInput.current.value !=""){
    const rec = parseFloat(regInput.current.value);
    const rec2 = parseFloat(avancement);
    const full = rec + rec2;
    setAvancement(()=> full);
    setDernierDon(rec);
    var currHour = new Date().toLocaleTimeString([], {hour: '2-digit'});
    setHeureDon(currHour);
    var currMinute = new Date().toLocaleTimeString([], {minute: '2-digit'});
    if(currMinute<=9){
      currMinute = "0"+currMinute;
    }
    setMinuteDon(currMinute);
    var currDate = new Date().toLocaleDateString();
    setDateDon(currDate);
    }
    

  }

  const retirer = () =>{
    {/** 
    if(regInput.current.value > 0 && regInput.current.value < 300000){
      var stringNum = objectif.toString().replace(/ /g,'');
      const recup = parseInt(stringNum);
      const recup2 = regInput.current.value/recup*100;
    alert(recup2);
    }*/}
    if(regInput.current.value !=""){
    const rec = parseFloat(regInput.current.value);
    const rec2 = parseFloat(avancement);
    const full = rec2 - rec;
    if(full <0){
      setAvancement(0);
    }
    else
    setAvancement(()=> full);
    }
    

  }

  const changerObj = () =>{
    if(regInput.current.value !=""){
      const rec = parseFloat(regInput.current.value);
      rec.toLocaleString()
      setObjectif(rec);
  }
  

}

const changerAv = () =>{
  if(regInput.current.value !=""){
    const rec = parseFloat(regInput.current.value);
    rec.toLocaleString()
    setAvancement(rec);
}


}







  return (
    <FullScreen handle={handle}>
  
    <div class="relative w-screen ">
      <div class={visible ? "absolute bg-slate-800  top-2 z-30  w-fit  left-7 transform transition duration-200 ease-in-out" : "absolute bg-gray-600 w-fit top-2 z-30 left-7 transform -translate-y-72 transition duration-200 ease-in-out"}>
      <div class="w-full flex flex-row justify-center mt-6 space-x-6 px-3 select-none">
    
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 text-2xl fontCust3 font-bold rounded py-2 text-center px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" ref={regInput} placeholder="Entrez somme"></input>
    <div onClick={()=>ajouter()} class="bg-green-800 text-white fontCust4 tracking-widest px-6 py-2 text-2xl border-b-4 hover:cursor-pointer border-green-600 hover:bg-green-700 transition duration-300 rounded-xl flex justify-center items-center"><div class="">Ajouter</div></div>
    <div onClick={()=>retirer()} class="bg-red-800 text-white fontCust4 tracking-widest px-6 py-2 text-2xl border-b-4 hover:cursor-pointer border-red-600 hover:bg-red-700 transition duration-300 rounded-xl flex justify-center items-center"><div class="">Retirer</div></div>
    </div>
    <div class="w-full flex flex-row  mt-6 space-x-6 px-3 mb-24 select-none">
    <div onClick={()=>changerObj()} class="bg-blue-800 text-white fontCust4 tracking-widest px-6 py-2 w-1/2 text-2xl border-b-4 hover:cursor-pointer border-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl flex justify-center items-center"><div class="">Changer objectif</div></div>
    <div onClick={()=>changerAv()} class="bg-yellow-400 text-black fontCust4 tracking-widest w-1/2 px-6 py-2 text-2xl border-b-4 hover:cursor-pointer border-green-500 hover:bg-yellow-300  transition duration-300 rounded-xl flex justify-center items-center"><div class="">Changer avancement</div></div>
    </div>
    <div class="absolute w-full flex flex-row bottom-0 bg-slate-700 pl-3 space-x-2 ">
      <div class="text-gray-200 text-2xl py-2 fontCust4 tracking-widest text-bold">Dernier don enregistré : </div>
      <div class={dernierDon == 0 ? "hidden text-green-400  text-2xl py-2 fontCust4 tracking-widest text-bold" : "text-green-400  text-2xl py-2 fontCust4 tracking-widest text-bold"}>{dernierDon} €</div>
      <div class={dernierDon == 0 ? "hidden text-yellow-300 text-2xl py-2 fontCust4 tracking-widest text-bold" : "text-yellow-300 text-2xl py-2 fontCust4 tracking-widest text-bold"}>le {dateDon} à {heureDon} {minuteDon}  </div>
    </div>
      </div>
      
      

      </div>

      

      

      

      
      
    <header class="relative flex items-center justify-center h-screen overflow-hidden">
     <div class="absolute bottom-4 left-2 z-50 bg-black/50 rounded px-4 py-2 space-y-2">
      <div class="text-gray-300  text-4xl fontCust4 tracking-widest ">Donné : {avancement.toLocaleString()} €</div>
      <div class={(objectif-avancement >=0) ? "text-gray-300  text-4xl fontCust4 tracking-widest" : "hidden"}>Restant : {(objectif-avancement).toLocaleString()} €</div>
      <div class={(objectif-avancement < 0) ? "text-green-400  text-4xl fontCust4 tracking-widest" : "hidden"}>Dépassé de : {(avancement-objectif).toLocaleString()} €</div>
    </div> 

   <div
     class="relative z-30 w-full"
   >
     
     <div class="relative w-screen select-none">
        <div  onClick={handle.enter} class="absolute text-center w-full golden fontCust6 text-8xl z-30 -mt-32 animate-pulse-slow">بارك الله فيك</div>
      </div>
      
  <div class="flex flex-col h-fit w-full justify-center items-center">
    
  <div class="h-20 w-3/5 bg-gray-200/30 rounded-full border-4 border-gray-300">
  <div class="relative h-full w-full rounded-full overflow-hidden">
    <div class={perc == 100 ? "absolute h-full  bg-green-600 rounded-full z-20" : "absolute h-full   bg-green-600 rounded-l-full z-20"} style={{width: `${perc}%`}}></div>
  </div>
  </div>
  
  <div class="w-3/5 h-fit flex justify-end mt-2"> 
  
  <div class="flex flex-row select-none">
  <div onClick={()=>setVisible(!visible)} class="text-cyan-300 font-bold text-4xl fontCust3 tracking-wider hover:cursor-pointer hover:text-yellow-300 transition duration-200">{avancement.toLocaleString()} </div>
  <div class="text-green-400 font-bold text-4xl fontCust3 tracking-wider px-2 ">/  </div>
  <div class="text-yellow-300 font-bold text-4xl fontCust3 tracking-wider pr-2 ">{objectif.toLocaleString()}</div>
  <div class="text-green-400 font-bold text-4xl fontCust3 tracking-wider">€</div>

  
  </div>
  
  </div>
 
  
  {/* <div class="w-3/5 flex flex-row justify-center mt-6 space-x-6 ">
    
  <input class="bg-gray-200 appearance-none border-2 border-gray-200 text-2xl fontCust3 font-bold rounded py-4 text-center px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" ref={regInput}></input>
  <div onClick={()=>ajouter()} class="bg-green-800 text-white fontCust4 tracking-widest px-6 py-2 text-3xl border-b-4 hover:cursor-pointer border-green-600 hover:bg-green-700 transition duration-300 rounded-xl flex justify-center items-center"><div class="">Ajouter</div></div>
  <div onClick={()=>retirer()} class="bg-red-800 text-white fontCust4 tracking-widest px-6 py-2 text-3xl border-b-4 hover:cursor-pointer border-red-600 hover:bg-red-700 transition duration-300 rounded-xl flex justify-center items-center"><div class="">Retirer</div></div>
  </div> */}
   
  </div>

  
 
   </div>
   
   
   <video
     loop
     muted
     autoPlay
     playsInline
     class="absolute z-10 w-full h-full object-cover brightness-75"
   >
     <source
       src={Loopvid}
       type="video/mp4"
     />
     Votre navigateur ne supporte pas la vidéo.
   </video>
   
 </header>
 </FullScreen>


  );
}

export default App;
