class Musica{
    #id
    #nome_musica

    
    constructor(id, nome_musica){
        this.#id = id;
        this.#nome_musica = nome_musica;
    }

    getId() {
        return this.#id;
    }
    getNome_Musica(){
        return this.#nome_musica;
    }

}

export default Musica;