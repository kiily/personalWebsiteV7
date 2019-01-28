import { IPersonalData } from './../interfaces/personal-data.interface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IQualification, IProfessionalXP, IProject, IITXP, ILanguageSkills } from '../interfaces';
import { EDUCATION_DATA, PRO_XP_DATA, PROJECTS_DATA, ITXP_DATA, PERSONAL_DATA, LANGUAGE_SKILLS_DATA } from '../data';

@Injectable()
export class DataService {

  constructor() { }

  getQualifications(): Observable<IQualification[]> {
    return of(EDUCATION_DATA);
  }

  getProfessionalXp(): Observable<IProfessionalXP[]> {
    return of(PRO_XP_DATA);
  }

  getProjects(): Observable<IProject[]> {
    return of(PROJECTS_DATA);
  }
  
  getLanguageSkillsData(): Observable<ILanguageSkills[]> {
    return of(LANGUAGE_SKILLS_DATA);
  }

  getPersonalData(): Observable<IPersonalData> {
    return of(PERSONAL_DATA)
  }

  getProgrammingLanguages(): Observable<IITXP[]> {
    return of(ITXP_DATA).pipe(map( technologies => {
      return technologies.filter(tech => tech.type === 'language');
    }));
  }

  getFrameworks(): Observable<IITXP[]> {
    return of(ITXP_DATA).pipe(map( technologies => {
      return technologies.filter( tech => tech.type === 'framework');
    }));
  }

  getWebDevTools(): Observable<IITXP[]> {
    return of(ITXP_DATA).pipe(map( technologies => {
      return technologies.filter( tech => tech.type === 'build-tool');
    }));
  }

  getDataTools(): Observable<IITXP[]> {
    return of(ITXP_DATA).pipe(map( technologies => {
      return technologies.filter( tech => tech.type === 'data-tool');
    }));
  }
}
