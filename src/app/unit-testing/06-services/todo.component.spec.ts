import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { Observable, of, empty, throwError} from 'rxjs';


describe('TodoService', () => {
      
    let component: TodoComponent;
    let service: TodoService;

    beforeEach(() => {
       service = new TodoService(null);
       component = new TodoComponent(service);
    });

    it('should set the property of todos with the items returned from server', () => {
       spyOn(service, 'getTodos').and.callFake(() => {
           return of([1, 2, 3]);
       });

       component.ngOnInit();
    //    expect(component.todos.length).toBeGreaterThan(1);
       expect(component.todos.length).toBe(3);
    });
    
    it('should call the server to save the changes when a new todo item added', () => {
       const spy = spyOn(service, 'add').and.callFake(td => {
           return empty();
       });

       component.add();
       expect(spy).toHaveBeenCalled();
    });

    it('should add the new todo returned from server', () => {
       const todo = {id: 1};
       const spy = spyOn(service, 'add').and.callFake(td => {
        //    return of([ {id: 1} ]);
              return of([todo]);
       });

       component.add();
       expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
    });

    it('should set the message property if server returns error when adding a new todo', () => {
       
       const error = 'Error from server';
       const spy = spyOn(service, 'add').and.callFake(td => {
          return throwError(error);
       });

       component.add();
       expect(component.message).toBe(error);
    });


});
