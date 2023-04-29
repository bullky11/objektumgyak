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
