import Szemely from "./Szemely.js";

$(function(){
    console.log("hellóka nyaloka")
    //példányosítás
    const szemely1= new Szemely("Béla",1965)
    const szemely2= new Szemely("Jolán",1975)

    console.log(szemely1);
    console.log(szemely2)
    console.log(szemely1.nev)
    szemely1.nev="kálmán"
    console.log(szemely1);
    szemely1.masikNev="géza"
    console.log(szemely1);
    console.log(szemely2)
    //futásidőben változtathatóak az osztály példányok
    //console.log(szemely1.#szulNev) kivülről privát adattagot nem érek el
    console.log(szemely1.getSzulnev())


})