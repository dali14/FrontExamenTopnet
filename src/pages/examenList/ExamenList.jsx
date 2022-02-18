import "./examenList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React from 'react'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function ExamenList() {
const examenRows = [
  {
    id: '',
    cin: '',
    note:'',
    duree: '',
    date: '',
    question: '',
  },]
  

  const [examen, setExamen] = useState(examenRows);
  const url = 'http://localhost:8000/api/examen';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())

        .then(res => setExamen([...res.examen].map((examen) => ({
          id:examen.id,
          cin: examen.cin,
          note: examen.note,
          duree:examen.duree,
          date:examen.date,
          question:examen.question,
      }))))
    }, [])
    const handleDelete = (id) => {
      setExamen(examen.filter((item) => item.id !== id));
    
  };
  const columns = [
    { field: "id",
     headerName: "ID",
      width: 90 },
    {
      field: "cin",
      headerName: "CIN",
      width: 200,
      
    },
    { field: "duree",
     headerName: "duree",
      width: 200 },
    {
      field: "date",
      headerName: "date",
      width: 120,
    },
    {
      field: "Note",
      headerName: "note",
      width: 120,
    },
    {
      field: "question",
      headerName: "question",
      width: 160,
    },
    {
      field: "resultat",
      headerName: "resultat",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/question/" + params.row.id}>
              <button className="productListEdit">Details</button>
            </Link>
            
          </>
        );
      },
    },
  ];


  return (
    <div className="productList">
      <DataGrid
        rows={examen}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
