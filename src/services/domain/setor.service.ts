import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../../config/api.config";
import { SetorDTO } from "../../models/setor.dto";



@Injectable()
export class SetorService{
    constructor(public http: HttpClient){

    }
    findAll(): Observable<SetorDTO[]> {
        //trocar aspas por crase, que deixa colocar variaveis sem a necessidade de concatenar
        return this.http.get<SetorDTO[]>(`${API_CONFIG.baseUrl}/setores`);
    }
}