import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../../config/api.config";
import { AreaDTO } from "../../models/area.dto";



@Injectable()
export class AreaService{
    constructor(public http: HttpClient){

    }
    findAll(): Observable<AreaDTO[]> {
        //trocar aspas por crase, que deixa colocar variaveis sem a necessidade de concatenar
        return this.http.get<AreaDTO[]>(`${API_CONFIG.baseUrl}/areas`);
    }
}