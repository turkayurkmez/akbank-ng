import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';
import { fakeTodoItems } from './models/todoItem.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Öğreniyoruz!';
  paragraph: string = 'Bu temel bir binding örneği!';
  createdDate: string = 'Temmuz 2023';

  countries: string[] = ['Turkey', 'Australia', 'Canada', 'Holland', 'France']

  todoItems: TodoItem[] = fakeTodoItems;
  isAllTaskShowing: boolean = true;

  filter(): void {   
    this.isAllTaskShowing = !this.isAllTaskShowing;
    if (!this.isAllTaskShowing) {
      this.todoItems = this.todoItems.filter(t => !t.isDone);
    }
    else{
      this.todoItems = fakeTodoItems;
    }
  }

  getButtonText(){
    return this.isAllTaskShowing ? "Yapılan görevleri gizle": "Tüm görevleri göster"
  }

  getItemsCount():number{
    return this.todoItems.filter(t=>!t.isDone).length;
  }

  addNewTask(name: string):void{
    let todo: TodoItem = new TodoItem(name,false);
    this.todoItems.push(todo);
  }


}
