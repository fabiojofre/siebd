import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../../config/api.config";
import { CongregacaoDTO } from "../../models/congregacao.dto";




@Injectable()
export class CongregacaoService{
    constructor(public http: HttpClient){

    }
    findAll(): Observable<CongregacaoDTO[]> {
        //trocar aspas por crase, que deixa colocar variaveis sem a necessidade de concatenar
        return this.http.get<CongregacaoDTO[]>(`${API_CONFIG.baseUrl}/congregacoes`);
    }
}