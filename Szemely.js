class Szemely {
  #szulNev;
  constructor(nev, szulDatum) {
    //beállítja az adattagokat
    //a konkrét osztály példányra mutat a this
    //osztál példány ==objektum

    this.nev = nev;
    this.szulDatum = szulDatum;
    this.#szulNev = nev;
    this.setSzulnev(nev)

    //privát adattagok elérése
  }
  getSzulnev() {
    return this.#szulNev;
  }
  setSzulnev(ertek){
    /**ellenőrzés: nagybetű ,nem szám stb */
    this.#szulNev=ertek
  }
}

export default Szemely;
