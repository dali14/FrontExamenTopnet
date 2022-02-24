import "./questionsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";
import { HeadProvider, Meta } from "react-head";

const QuestionsList= () => {
   const questionRows = [
    {
      id: '',
      question: '',
      niveau: '',
      time: '',
      type: '',
      etat: ''
    },]
    const [questions, setQuestions] = useState(questionRows);
    const url = 'http://localhost:8000/api/allquestion';
    const token = localStorage.getItem('token');
    useEffect(() => {
        console.log(token)
        fetch(url)
        .then(res => res.json())
        

        .then(res => setQuestions([...res.questions].map((questions) => ({
          id:questions.id,
          questionText: questions.question,
          niveau:questions.niveau,
          time:questions.time,
          type:questions.type,
          etat:questions.etat,
      }))))
        
        
         
         //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, [])
    //const [data, setData] = useState([]);
    const handleDelete = (id) => {
      
      fetch(`http://localhost:8000/api/question/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',

    },
    body: JSON.stringify()
  })
    .then(data => data.json(),window.location.reload())
    
  };

  const columns = [
    { field: "id",
     headerName: "ID",
      width: 90 },
    {
      field: "questionText",
      headerName: "Question",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            
            {params.row.questionText}
          </div>
        );
      },
    },
    { 
      field: "niveau",
      headerName: "Niveau",
      width: 200 },
    {
      field: "time",
      headerName: "Time",
      width: 120,
    },
    {
      field: "type",
      headerName: "Type",
      width: 160,
    },
    {
      field: "Etat",
      headerName: "Etat",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <HeadProvider> 
      <Meta name="csrf-token" content="{{ csrf_token() }}" />
      </HeadProvider>
            <Link to={"/question/" + params.row.id} >
              <button className="productListEdit">View</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              data-method="delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={questions}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
export default withAdmin(QuestionsList);
