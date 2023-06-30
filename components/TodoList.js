"use client";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const TodoList = () => {
  const [notes, setNotes] = useState("");
  const [notesObj, setNotesObj] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("notes"));
    if (storedTodos) {
      setNotesObj(storedTodos);
    }
  }, []);

  const handleDelete = (index) =>{
    const updatedNotesObj = [...notesObj];
  updatedNotesObj.splice(index, 1);
  setNotesObj(updatedNotesObj);
    localStorage.setItem("notes", JSON.stringify(updatedNotesObj));
  }

  const handleAddNotes = () => {
    if(notes.length) {
    setNotesObj(prev =>[...prev, notes]);
    setNotes("");
    }
  };

  const filteredNotes = notesObj.filter((note) =>
  note.toLowerCase().includes(search.toLowerCase())
);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }, [notesObj, filteredNotes]);



  return (
    <div className="flex flex-col justify-center ">
      <h2 className="text-center mb-10 text-4xl font-bold text-white">
        To Do List
      </h2>
      <div className="flex justify-around  ">
        <div className="flex flex-col input">
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="w-96 h-24 px-4 py-2 outline-none mb-4"
            type="text"
            placeholder="input task here"
          />
          <div>
            <button
              onClick={handleAddNotes}
              className="bg-red-300 px-6 py-2 rounded-3xl mb-10"
            >
              Add Notes
            </button>
          </div>
        </div>
        <div className="search">
          <input
            className="px-4 py-3 rounded-3xl outline-none"
            type="text"
            placeholder="search"
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
        <div className="flex justify-start flex-wrap mb-10 mx-24">
          {
            filteredNotes.map((value, index) =>{
                return <Card index ={index} key={index} notes={value} handleDelete={handleDelete}  />
            })
          }
        </div>
    </div>
  );
};

export default TodoList;
