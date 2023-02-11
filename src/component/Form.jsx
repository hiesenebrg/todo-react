import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {addArticle} from '../redux/articleRedux'
const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

   const addTitle = () => {
    return dispatch(addArticle({title , description,date}));
   }
  return (
    <>
      <Container>
        <Title>Form</Title>
        <Forms>
          <div style={{ marginTop: "20px" }}>
            Title :{" "}
            <Input
              style={{ padding: "4px", borderRadius: "10px" }}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </div>
          <div>
            Description :{" "}
            <Desc
              type="text"
              style={{
                marginLeft: "20px",
                padding: "40px",
                borderRadius: "10px",
                resize: "none",
              }}
              onChange={(e) => setDescription(e.target.value)}
            ></Desc>
          </div>
          <div style={{ marginBottom: "5px" }}>
            Date :{" "}
            <Input
              style={{ padding: "4px", borderRadius: "10px" }}
              onChange={(e) => setDate(e.target.value)}
            ></Input>
          </div>
          <Add onClick={addTitle}>Add Post</Add>
        </Forms>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 40vh;
  width: 30vw;
  background-color: orange;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
`;
const Title = styled.div`
  height: 6vh;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
  font-size: 20px;
  background-color: grey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Input = styled.input``;
const Desc = styled.input``;
const Forms = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Add = styled.button`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  border-style: none;
  margin-right: 20px;
  margin-left: 180px;
  background-color: green;
  color: white;
`;

export default Form;
