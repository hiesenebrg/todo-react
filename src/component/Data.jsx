import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delArticle, editArticle } from "../redux/articleRedux";

const Data = ({ data  , index}) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [date, setDate] = useState(data.date);
  const [editable, seteditable] = useState(false);
  const dispatch = useDispatch();

  const save = (index, value) => {
    dispatch(editArticle({ index, value }));
    seteditable(false);
  };

  const deletes = function (index) {
    dispatch(delArticle(index));
  };

  return (
    <>
      <Containers>
        <Titles>
          {!editable ? (
            title
          ) : (
            <Input
            placeholder="Edit your Title"
            style={{marginBottom:"15px"}}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          )}
          <div>
            <Edit
              onClick={() =>
                !editable
                  ? seteditable(true)
                  : save(index, { title, description, date })
              }
            >
              {editable ? "SAVE " : "Edit"}
            </Edit>

            <Delete
            disabled={editable}
              onClick={() => {
                deletes(index);
              }}
            >
              Delete
            </Delete>
          </div>
        </Titles>
        <Description>
          {!editable ? (
            description
          ) : (
            <Input
            style={{padding:"40px"}}
            placeholder="Edit your Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></Input>
          )}
        </Description>
      </Containers>
    </>
  );
};
const Titles = styled.div`
  height: 6vh;
  text-align: center;
  padding-top: 20px;
  padding-left: 20px;
  color: white;
  font-size: 20px;
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Description = styled.div`
  padding-top: 25px;
  padding-left: 20px;
  font-size: 10px;
  color: white;
  background-color: orange;
  margin-bottom: 20px;
`;
const Edit = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 4px;
  border-style: none;
  margin-right: 20px;
`;

const Delete = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 4px;
  border-style: none;
  margin-right: 20px;
`;

const Containers = styled.div`
  width: 60vw;
  background-color: orange;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;
const Input = styled.input`
border-radius:6px;
`;
export default Data;
