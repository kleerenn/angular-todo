import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '/?_limit=5';

  constructor(private http: HttpClient) { }
  getTodos():Observable<Todo[]> {
    console.log(`${this.todosUrl}${this.todosLimit}`)
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }
  addTodo(todo: Todo): Observable<Todo> {
    console.log(1111)
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
  }
}
