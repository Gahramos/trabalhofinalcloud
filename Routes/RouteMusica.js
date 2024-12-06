import BaseRouter from "./BaseRouter.js";
import ControllerMusica from "../Controllers/ControllerMusica.js";

class RouteMusica extends BaseRouter{
    constructor(){
        super();    
        this._controller = new ControllerMusica();
        
        this._router.get("/", this._controller.getTodasMusicas);
    }
}

export default RouteMusica