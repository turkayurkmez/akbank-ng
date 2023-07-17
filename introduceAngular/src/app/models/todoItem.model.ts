export class TodoItem {
    // task?:string;
    // isDone?: boolean;

    constructor(public task?: string, public isDone?: boolean) {
        //this.isDone = isDone;
    }
    /*
      ! TypeScript dilinin bir kolaylığı constructor üzerinden public parametre kullandığınızda; onu parametreyi 
      !  field haline getirirsiniz.
    */

}