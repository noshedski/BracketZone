import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";




import "./Task.css";

export const Task = ({ id, title, url }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
  
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };
  
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="task"
      >
        <img src={url} alt={title} className="logo"/>
        {title}
      </div>
    );
  };