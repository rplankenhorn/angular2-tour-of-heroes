/**
 * Created by robbieplankenhorn on 6/9/16.
 */
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    
    getHeroes() {
        return Promise.resolve(HEROES)
    }
    
}