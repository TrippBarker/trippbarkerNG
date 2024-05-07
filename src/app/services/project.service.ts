import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private messageService: MessageService) { }
}
