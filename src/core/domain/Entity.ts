// classe que vai implementar um comportamento padrão para todas as entidades.
import crypto from 'crypto';

export abstract class Entity {
    protected _id: string;
    public props: T;


    constructor(props: T, id?: string) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();
    }
}
