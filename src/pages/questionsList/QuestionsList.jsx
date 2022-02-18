import "./questionsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
//import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import withAdmin from "../../withAdmin";

export default withAdmin(function QuestionsList() {
   const questionRows = [
    {
      id: '',
      question: '',
      niveau: '',
      time: '',
      type: '',
    },]
    const [questions, setQuestions] = useState(questionRows);
    const url = 'http://localhost:8000/api/allquestion';
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        

        .then(res => setQuestions([...res.questions].map((questions) => ({
          id:questions.id,
          questionText: questions.question,
          niveau:questions.niveau,
          time:questions.time,
          type:questions.type,
      }))))
        
        
         
         //!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }, [])
    //const [data, setData] = useState([]);
    const handleDelete = (id) => {
      setQuestions(questions.filter((item) => item.id !== id));
    
  };

  const columns = [
    { field: "questionId",
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
    { field: "niveau",
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
            <Link to={"/question/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
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
})
