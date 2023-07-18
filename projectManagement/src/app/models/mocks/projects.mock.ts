import { Project } from "../project.model";
import { Task } from "../task.model";

export const projects: Project[] = [
    new Project(1, "Project A", "Desc of Project A", new Date(2023, 7, 18), 0.1,
        [
            new Task(1, 'Task A', 'Desc of Task A', new Date(2023, 8, 1), 1, false),
            new Task(2, 'Task B', 'Desc of Task B', new Date(2023, 8, 1), 1, false),
            new Task(3, 'Task C', 'Desc of Task C', new Date(2023, 8, 1), 1, true),

        ], 1),
        new Project(2, "Project B", "Desc of Project B", new Date(2023, 7, 18), 0.1,
        [
            new Task(4, 'Task A1', 'Desc of Task A1', new Date(2023, 8, 1), 1, false),
            new Task(5, 'Task B1', 'Desc of Task B1', new Date(2023, 8, 1), 1, false),
            new Task(6, 'Task C1', 'Desc of Task C1', new Date(2023, 8, 1), 1, true),

        ], 1),
        
        new Project(3, "Project C", "Desc of Project C", new Date(2023, 7, 18), 0.1,
        [
            new Task(7, 'Task A2', 'Desc of Task A2', new Date(2023, 8, 1), 1, false),
            new Task(8, 'Task B2', 'Desc of Task B2', new Date(2023, 8, 1), 1, false),
            new Task(9, 'Task C2', 'Desc of Task C2', new Date(2023, 8, 1), 1, true),

        ], 1)
]