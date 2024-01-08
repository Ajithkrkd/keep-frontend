import React, { useEffect, useState } from 'react'
import '../kanban/kanban.scss'
import './mockData.js'
import {DragDropContext,Draggable,Droppable} from 'react-beautiful-dnd'
import mockData from './mockData.js'
import Card from '../Cards/index.jsx'
function Kanban() {
    useEffect(()=>{
        console.log(data)
    })
    
    
    
    const [data ,setData] = useState(mockData);
    
    
    const onDragEnd = (result) => {
        // Handle the drag-and-drop logic
        if (!result.destination) return; // The item was dropped outside a droppable area
      
        const newData = [...data];
      
        // Remove the entire card from the source section
        const [movedCard] = newData[result.source.droppableId].data.splice(result.source.index, 1);
      
        // Insert the entire card into the destination section
        newData[result.destination.droppableId].data.splice(result.destination.index, 0, movedCard);
      
        // Update the state and save to local storage
        setData(newData);
        localStorage.setItem('kanbanData', JSON.stringify(newData));
      };
      

        return (
            <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={data.length > 0 ? data[0].id.toString() : "default"}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="kanban"
                >
                  {data.map((section, index) => (
                    <Draggable
                      key={section.id}
                      draggableId={section.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="kanban__section"
                        >
                          <div className="kanban__section__title">
                            {section.title}
                          </div>
                          <div>
                            {
                                section.tasks.map((task)=>(
                                    <div>
                                        <Card>
                                        {task.title}
                                        </Card>
                                    </div>
                                ))
                            }
                          </div>
                        </div>
                      )}
                      
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        );
      }

export default Kanban