import { useState, useEffect, useReducer } from "react";
import { db, auth } from "../firebase/config.js";
import { updateDoc, doc, getDoc} from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const useUpdateDocument = (docCollection) => {
  const [response, dispatch] = useReducer(updateReducer, initialState);

  const updateDocument = async (docId, data) => {
    dispatch({
      type: "LOADING",
    });

    try {
      const docRef = await doc(db, docCollection, docId)

      const updatedDocument = await updateDoc(docRef, data)

      dispatch({
        type: "UPDATED_DOC",
        payload: updatedDocument,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

 

  return { updateDocument, response };
};
