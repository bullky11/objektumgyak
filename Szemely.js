class Szemely {
  #szulNev;
  constructor(nev, szulDatum, szuloElem) {
    //beállítja az adattagokat
    //a konkrét osztály példányra mutat a this
    //osztál példány ==objektum

    this.nev = nev;
    this.szulDatum = szulDatum;
    this.#szulNev = nev;
    this.setSzulnev(nev)
    //htmL OLDALON AKARJUK MEGJELENITENI
    szuloElem.append(`<div class="szemely">
                        <h3>${this.nev}</h3>
                        <p>${this.kor()}</p>
                        </div>
    `)
    //rákaattintok a személyekre irja ki consolera az adott szemelyt
    //készítek egy adattagot a html elemhez
    this.SzemelyElem=$(".szemely:last-child")//csak az utolso html DOM elem lesz

    console.log(this.SzemelyElem)
    //function esetén a this-->az az elem ami kiváltotta az eseményt
    //nyíl függvény esetén--> az aktuális objektumot jelenti
    this.SzemelyElem.on("click",()=>{
        console.log(this.nev)
    })
    //privát adattagok elérése

  }
  getSzulnev() {
    return this.#szulNev;
  }
  setSzulnev(ertek){
    /**ellenőrzés: nagybetű ,nem szám stb */
    this.#szulNev=ertek
  }
  kor(){
    const d =new Date()
    let year =d.getFullYear()
    return year -this.szulDatum
  }
}

export default Szemely;
